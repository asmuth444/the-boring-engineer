import LocalStorageKeys from "../enums/LocalStorageKeys";

export enum StorageType { 
    Session = 'session',
    Local = 'local'
}

export interface UseStorageReturnValue {
    getItem: (key: LocalStorageKeys, defaultValue?: string, type?: StorageType) => string;
    setItem: (key: LocalStorageKeys, value: string, type?: StorageType) => boolean;
    removeItem: (key: LocalStorageKeys, type?: StorageType) => void;
}

const useStorage = (): UseStorageReturnValue => {
    const storageType = (type?: StorageType): 'localStorage' | 'sessionStorage' => `${type ?? 'session'}Storage`;
    const isBrowser: boolean = ((): boolean => typeof window !== 'undefined')();

    const getItem = (key: LocalStorageKeys, defaultValue: string = "", type: StorageType = StorageType.Local): string => {
        return isBrowser ? window[storageType(type)].getItem(key) || defaultValue: defaultValue;
    };

    const setItem = (key: LocalStorageKeys, value: string, type: StorageType = StorageType.Local): boolean => {
        if (isBrowser) {
            window[storageType(type)].setItem(key, value);
            return true;
        }
        return false;
    };

    const removeItem = (key: LocalStorageKeys, type: StorageType = StorageType.Local): void => {
        window[storageType(type)].removeItem(key);
    }

    return {getItem, setItem, removeItem};
}

export default useStorage;

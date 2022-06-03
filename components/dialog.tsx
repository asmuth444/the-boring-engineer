import {ReactNode, useEffect, useRef} from "react";
import {MdClose} from "react-icons/md";
import {createPortal} from "react-dom";

export interface DialogProps {
  show: boolean
  title?: string;
  children: ReactNode;
  handleClose: () => void;
}

const Dialog = (props: DialogProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleBackdropClick = (event: { target: any; }) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        props.handleClose();
      }
    };
    document.addEventListener('click', handleBackdropClick, true);
    return () => {
      document.removeEventListener('click', handleBackdropClick, true);
    }
  });
  if (!props.show) return null;

  return createPortal(
      <div className={"dialog" + (props.show ? "" : " hidden")}>
        <div ref={dialogRef} className="dialog__main">
          <div className="dialog__header">
            <span>{props.title}</span>
            <button className="icon-button" onClick={props.handleClose}><MdClose/></button>
          </div>
          {props.children}
        </div>
      </div>
  , document.body);
}


export default Dialog;

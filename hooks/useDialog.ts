import {useState} from "react";

const useDialog = () => {
  const [show, setShow] = useState<boolean>(false);
  const showDialog = () => {
    setShow(true);
    console.log(show);
  }
  const closeDialog = () => setShow(false);
  const handleDialogClose = () => {
    closeDialog();
  }

  return {show, showDialog, closeDialog, handleDialogClose};
};

export default useDialog;

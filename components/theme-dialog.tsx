import Dialog from "./dialog";

const ThemeDialog = (props: {show: boolean, handleClose: () => void}) => {
  return (
      <Dialog title={"Themes"} {...props}>
        <div className="dialog__main">Theme Form</div>
        <div className="dialog__footer">
          <button>Ok</button>
        </div>
      </Dialog>
  )
}

export default ThemeDialog;

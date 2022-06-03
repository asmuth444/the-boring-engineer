import Link from "next/link";
import React from "react";
import {MdDarkMode, MdLightMode, MdWbTwilight, MdFormatPaint} from "react-icons/md";
import Themes from "../enums/Themes";
import useTheme from "../hooks/useTheme";
import useDialog from "../hooks/useDialog";
import dynamic from "next/dynamic";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const {show, showDialog, handleDialogClose} = useDialog();
  const ThemeDialog = dynamic( () => import("./theme-dialog"), {ssr: false});

  const getIcon = (theme: Themes) => {
    switch (theme) {
      case Themes.Light:
        return <MdLightMode />
      case Themes.Dark:
        return <MdDarkMode />
      case Themes.Auto:
        return <MdWbTwilight />
    }
  };

  return (
    <header className="header">
      <Link href="/">
        <a className="header__brand">BE</a>
      </Link>
      <div className="header__menu">
        <div className="header__links">
          <Link href="/blog"><a>Blog</a></Link>
          <Link href="/about"><a>About</a></Link>
        </div>
        <div className="header__buttons">
          <button onClick={toggleTheme}
            className="icon-button">
            {getIcon(theme as Themes)}
          </button>
          <button onClick={showDialog} className="icon-button"><MdFormatPaint/></button>
        </div>
      </div>
      <ThemeDialog show={show} handleClose={handleDialogClose}/>
    </header>
  )
};

export default Header;

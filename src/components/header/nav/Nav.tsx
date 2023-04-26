import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import { ReactComponent as Hamburger } from "../../../assets/images/icon-hamburger.svg";
import classes from "./Nav.module.css";
import { useState } from "react";
import NavList from "./NavList";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((currentMenuState) => {
      // Prevent scrolling on page if menu is being opened
      // aka. currentMenuState === false
      if (!currentMenuState) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
      // Toggle currentMenuState
      return !currentMenuState;
    });
  };

  return (
    <nav className={classes.nav}>
      <div className={classes.backdrop} data-show={showMenu} onClick={toggleMenu} />
      <Logo />
      {/* Navigation list */}
      <Hamburger
        role="menu"
        aria-label="hamburger menu"
        aria-expanded={showMenu}
        className={classes.hamburger}
        onClick={toggleMenu}
      />
      <ul role="list" data-show={showMenu} className={classes["nav-list"]}>
        <NavList />
      </ul>
    </nav>
  );
};

export default Nav;

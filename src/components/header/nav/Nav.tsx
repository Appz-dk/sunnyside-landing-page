import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import { ReactComponent as Hamburger } from "../../../assets/images/icon-hamburger.svg";
import classes from "./Nav.module.css";
import { useState } from "react";
import NavList from "./NavList";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className={classes.nav}>
      <div className={classes.backdrop} data-show={showMenu} onClick={() => setShowMenu(false)} />
      <Logo />
      {/* Navigation list */}
      <Hamburger
        role="menu"
        aria-label="hamburger menu"
        aria-expanded={showMenu}
        className={classes.hamburger}
        onClick={() => setShowMenu((prev) => !prev)}
      />
      <ul role="list" data-show={showMenu} className={classes["nav-list"]}>
        <NavList />
      </ul>
    </nav>
  );
};

export default Nav;

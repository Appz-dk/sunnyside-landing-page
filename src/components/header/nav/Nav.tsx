import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import { ReactComponent as Hamburger } from "../../../assets/images/icon-hamburger.svg";
import classes from "./Nav.module.css";
import { useState } from "react";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className={classes.nav}>
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
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <button>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

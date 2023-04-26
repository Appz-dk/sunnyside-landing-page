import classes from "./Footer.module.css";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import NavList from "../header/nav/NavList";
import IconsList from "./iconsList/IconsList";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Logo className={classes["footer-logo"]} />
      <ul role="list" className={classes["footer-nav"]}>
        <NavList />
      </ul>
      <IconsList />
    </footer>
  );
};

export default Footer;

import { ReactComponent as ArrowDown } from "../../../assets/images/icon-arrow-down.svg";

import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <h1 className={classes["hero-title"]}>We are creatives</h1>
      <ArrowDown className={classes.arrow} />
    </section>
  );
};

export default Hero;

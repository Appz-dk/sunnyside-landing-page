import eggMobile from "../../assets/images/mobile/image-transform.jpg";
import eggDesktop from "../../assets/images/desktop/image-transform.jpg";
import glassMobile from "../../assets/images/mobile/image-stand-out.jpg";
import glassDesktop from "../../assets/images/desktop/image-stand-out.jpg";
import classes from "./MainContent.module.css";

const MainContent = () => {
  return (
    <section>
      <picture>
        <source media="(min-width:45em)" srcSet={eggDesktop} />
        <img src={eggMobile} />
      </picture>
      <div className={classes["text-container"]}>
        <h2>Transform your brand</h2>
        <p>
          We are a full-service creative agency specializing in helping brands grow fast. Engage
          your clients through compelling visuals that do most of the marketing for you.
        </p>
        <button className={classes["btn-yellow-after"]}>Learn more</button>
      </div>
      <picture>
        <source media="(min-width:45em)" srcSet={glassDesktop} />
        <img src={glassMobile} />
      </picture>
      <div className={classes["text-container"]}>
        <h2>Stand out to the right audience</h2>
        <p>
          Using a collaborative formula of designers, researchers, photographers, videographers, and
          copywriters, we’ll build and extend your brand in digital places.
        </p>
        <button className={classes["btn-red-after"]}>Learn more</button>
      </div>
      <div className={classes["image-with-text"]}></div>
      <div className={classes["image-with-text"]}></div>
    </section>
  );
};

export default MainContent;

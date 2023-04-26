import { ReactComponent as FacebookIcon } from "../../../assets/images/icon-facebook.svg";
import { ReactComponent as InstagramIcon } from "../../../assets/images/icon-instagram.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/images/icon-twitter.svg";
import { ReactComponent as PinterestIcon } from "../../../assets/images/icon-pinterest.svg";

import classes from "./IconsList.module.css";

const SOCIAL_ICONS = [
  {
    icon: FacebookIcon,
    label: "Facebook icon as a link",
    link: "#add-facebook-link",
  },
  {
    icon: InstagramIcon,
    label: "Instragram icon as a link",
    link: "#add-instagram-link",
  },
  {
    icon: TwitterIcon,
    label: "Twitter icon as a link",
    link: "#add-twitter-link",
  },
  {
    icon: PinterestIcon,
    label: "Pinterest icon as a link",
    link: "#add-pinterest-link",
  },
];

const IconsList = () => {
  return (
    <div className={classes["icons-list"]}>
      {/* TODO: This is soo janky... */}
      {SOCIAL_ICONS.map(({ icon: Icon, label, link }) => (
        <a href={link} key={Icon.toString()}>
          <Icon aria-label={label} />
        </a>
      ))}
    </div>
  );
};

export default IconsList;

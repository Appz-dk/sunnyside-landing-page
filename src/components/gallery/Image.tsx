import classes from "./Image.module.css";

type ImageProps = {
  src: string;
  alt: string;
  imageDesktop: string;
};

const Image: React.FC<ImageProps> = ({ src, alt, imageDesktop }) => {
  return (
    <picture className={classes.picture}>
      <source media="(min-width:50em)" srcSet={imageDesktop} />
      <img src={src} alt={alt} />
    </picture>
  );
};

export default Image;

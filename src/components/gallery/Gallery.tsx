import Image from "./Image";
import classes from "./Gallery.module.css";

// Gallery images
import milkImgMobile from "../../assets/images/mobile/image-gallery-milkbottles.jpg";
import milkImgDesktop from "../../assets/images/desktop/image-gallery-milkbottles.jpg";
import orangeImgMobile from "../../assets/images/mobile/image-gallery-orange.jpg";
import orangeImgDesktop from "../../assets/images/desktop/image-gallery-orange.jpg";
import coneImgMobile from "../../assets/images/mobile/image-gallery-cone.jpg";
import coneImgDesktop from "../../assets/images/desktop/image-gallery-cone.jpg";
import sugarCubesImgMobile from "../../assets/images/mobile/image-gallery-sugar-cubes.jpg";
import sugarCubesImgDesktop from "../../assets/images/desktop/image-gallery-sugarcubes.jpg";

const GALLERY_IMAGES = [
  {
    desktop: milkImgDesktop,
    mobile: milkImgMobile,
    alt: "Milk bottles with sky and clouds in the background",
  },
  {
    desktop: orangeImgDesktop,
    mobile: orangeImgMobile,
    alt: "Orange background with a plate with an orange cut in half",
  },
  {
    desktop: coneImgDesktop,
    mobile: coneImgMobile,
    alt: "Blue background with a vaffle cone in the center",
  },
  {
    desktop: sugarCubesImgDesktop,
    mobile: sugarCubesImgMobile,
    alt: "Pink background with sugar cubes stacked in a random pattern",
  },
];

const Gallery = () => {
  return (
    <section className={classes.gallery}>
      {GALLERY_IMAGES.map((image) => (
        <Image key={image.mobile} src={image.mobile} imageDesktop={image.desktop} alt={image.alt} />
      ))}
    </section>
  );
};

export default Gallery;

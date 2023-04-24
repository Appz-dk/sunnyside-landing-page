import Testimonial from "./Testimonial";
import classes from "./Testimonials.module.css";

// Testimonial images
import emilyImg from "../../assets/images/image-emily.jpg";
import thomasImg from "../../assets/images/image-thomas.jpg";
import jennieImg from "../../assets/images/image-jennie.jpg";

export type TestimonialType = {
  img: string;
  text: string;
  author: string;
  title: string;
};

const TESTIMONIALS: TestimonialType[] = [
  {
    img: emilyImg,
    text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    author: "Emily R",
    title: "Marketing Director",
  },
  {
    img: thomasImg,
    text: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    author: "Thomas S",
    title: "Chief Operating Officer",
  },
  {
    img: jennieImg,
    text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    author: "Jennie F",
    title: "Business Owner",
  },
];

const Testtimonials = () => {
  return (
    <section className={classes.testimonials}>
      <h1 className={classes.title}>Client testimonials</h1>
      {TESTIMONIALS.map((testimonial) => (
        <Testimonial key={testimonial.author + testimonial.title} testimonial={testimonial} />
      ))}
    </section>
  );
};

export default Testtimonials;

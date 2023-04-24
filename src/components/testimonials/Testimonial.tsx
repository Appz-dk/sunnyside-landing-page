import { TestimonialType } from "./Testtimonials";
import classes from "./Testimonial.module.css";

type TestimonialProps = {
  testimonial: TestimonialType;
};

const Testimonial: React.FC<TestimonialProps> = ({ testimonial }) => {
  const firstName = testimonial.author.split(" ")[0] || "Anonymous";
  const lastName = testimonial.author.split(" ")[1] || "";
  const lastNameFirstLetter = lastName ? lastName[0] + "." : "";

  return (
    <div className={classes.testimonial}>
      <img src={testimonial.img} alt="Image of the author" className={classes["testimonial-img"]} />
      <p className={classes["testimonial-text"]}>{testimonial.text}</p>
      <div className={classes["testimonial-footer"]}>
        <span
          className={classes["testimonial-author"]}
        >{`${firstName} ${lastNameFirstLetter}`}</span>
        <span className={classes["testimonial-title"]}>{testimonial.title}</span>
      </div>
    </div>
  );
};

export default Testimonial;

import { useState } from "react";
import people from "../data";
import { FaQuoteRight, FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, image, job, name, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    } else if (number < 0) {
      return people.length - 1;
    } else {
      return number;
    }
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * people.length)
    setIndex(randomIndex)
  }

  return (
    <article key={id} className="review">
      <div className="img__container">
        <img src={image} alt="" className="review__image"/>
        <span className="img__quote">
          <FaQuoteRight />
        </span>
      </div>
      <h3 className="review__author">{name}</h3>
      <p className="review__desc">{job}</p>
      <p className="review__info">{text}</p>
      <div className="btn__container">
        <button className="prev__btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next__btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random__btn" onClick={randomPerson}>
        Surprise Me
      </button>
    </article>
  );
};

export default Review;

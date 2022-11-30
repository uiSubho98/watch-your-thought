import React from "react";
import "./Testimonials.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="container testimonial-div">
        <div className="testimonial-header">
          <h1>Testimonials</h1>
        </div>
        <div className="testimonial-review">
          <div className="text-white">
            <sup>
              <RiDoubleQuotesL className="quote"></RiDoubleQuotesL>
            </sup>
            <br></br>
            <p className="review-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur id autem deleniti non, dicta dolore laborum corporis
              itaque, aliquam nulla quisquam voluptatem fugit tempora sequi
              molestias ipsam velit cupiditate impedit! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Repellendus officia tempore
              harum architecto minus, reprehenderit unde aspernatur dignissimos
              numquam? Accusamus harum possimus voluptates laudantium quae cum
              assumenda ducimus, beatae accusantium?Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Modi cumque aut, culpa, obcaecati
              natus praesentium quod quis quasi quibusdam at, delectus quam!
              Rerum, labore. Delectus quisquam rem distinctio amet rerum modi,
              soluta fugit? Exercitationem tempore voluptatem odit id ipsa
              iusto!
              <p className="mt-4">- Genevieve Harleen, Company Name</p>
            </p>
          </div>
        </div>
        <div className="arrow-testimonials">
            <AiOutlineArrowLeft className="text-white arrows"></AiOutlineArrowLeft>
           <AiOutlineArrowRight className="text-white arrows"></AiOutlineArrowRight>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

import React from "react";
import { testimonialInfo } from "../../data/testimonials";
import TestimonialCard from "./TestimonialCard";
import { Fade } from "react-reveal";

const Testimonials = () => {
  const TestimonialList = testimonialInfo.map((testimonial, index) => {
    return (
      <Fade key={index} duration={1000} delay={index * 200}>
        <TestimonialCard
          image={testimonial.image}
          quote={testimonial.quote}
          name={testimonial.name}
        />
      </Fade>
    );
  });

  return (
    <div className="w-full testimonial-enter bg-gray-100">
      <h2 className="pt-4 text-3xl font-extrabold text-center text-primary-color">
        Loved by footballers <span className="text-black">across the country</span>
      </h2>
      <div className="pt-20 w-full max-w-6xl mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3 align-center">
        {TestimonialList}
      </div>
    </div>
  );
};

export default Testimonials;

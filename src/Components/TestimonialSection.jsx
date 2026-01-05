import React from 'react'
import Testimonial1 from "../assets/images/HomePage/Testimonial1.png";
import Testimonial2 from "../assets/images/HomePage/Testimonial2.png";
import Testimonial3 from "../assets/images/HomePage/Testimonial3.png";


export const testimonials = [
  {
    quote:
      "The kiosk is a really attractive and intuitive feature of our front-desk now. Every visitor finds it quite amusing and easy to use!",
    author: "Mr. Murali",
    image: Testimonial1,
    position: "top",
  },
  {
    quote:
      "There’s a complete track of each person coming in or going out. The manual process was really time-consuming and ineffective.",
    author: "Mr. Rakesh",
    image: Testimonial2,
    position: "bottom",
  },
  {
    quote:
      "The digital check-in is flawless. It’s cut wait times in half and looks incredibly professional to our clients.",
    author: "Mr. Rohan",
    image: Testimonial3,
    position: "top",
  },
];





export const TestimonialSection = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* HEADING (optional) */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-20">
          Testimonials
        </h2>

        {/* TESTIMONIAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
          {testimonials.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              
              {/* TOP QUOTE */}
              {item.position === "top" && (
                <div className="bg-[#EED7FA] rounded-2xl px-6 py-4 text-sm text-justify mb-6 max-w-xs ">
                  “{item.quote}”
                  <div className="mt-2 font-medium text-xs">
                    — {item.author}
                  </div>
                </div>
              )}

              {/* IMAGE */}
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={item.image}
                  alt={item.author}
                  className="w-72 h-auto object-cover"
                />
              </div>

              {/* BOTTOM QUOTE */}
              {item.position === "bottom" && (
                <div className="bg-[#EED7FA] rounded-2xl px-6 py-4 text-sm text-center mt-6 max-w-xs">
                  “{item.quote}”
                  <div className="mt-2 font-medium text-xs">
                    — {item.author}
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

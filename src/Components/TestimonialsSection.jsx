

import React from "react";


const testimonialsData = [
  {
    quote:
      "Vizit has revolutionised our visitor experience; not only has it improved the way in which we book our visitors in, but also the way we manage them on site.",
    name: "Ehla",
    role: "EuroGarages",
    image: "/images/testimonials/ehla.png",
    rating: 5,
  },
  {
    quote:
      "Vizit is a must have for event managers. It manages registration, keeping contractors informed of upcoming deadlines, and generally helping everything run as smoothly as possible.",
    name: "Chris",
    role: "Event Manager",
    image: "/images/testimonials/chris.png",
    rating: 5,
  },
  {
    quote:
      "Vizit has been an amazing aid for our company. One of the best features is that it sends reminders to our contractors about their renewal so we don't have to worry about it.",
    name: "Sarah",
    role: "Administrator",
    image: "/images/testimonials/sarah.png",
    rating: 5,
  },
];




const TestimonialsSection = () => {
  return (
    <section className="w-full py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-sm font-semibold text-green-600 mb-4">
            Testimonials
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What our clients are saying
          </h2>

          <p className="text-lg text-[#4b4b63] leading-relaxed">
            Our clients have been great to work with, and we're honored to have
            their support. Here are a few of the things they've had to say.
          </p>
        </div>

        {/* ================= TESTIMONIAL CARDS ================= */}
        <div className="flex flex-col lg:flex-row gap-10 justify-center">
          {testimonialsData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-10 w-full lg:w-1/3 text-center"
            >
              {/* Quote */}
              <p className="text-[#4b4b63] leading-relaxed mb-8">
                “{item.quote}”
              </p>

              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
              </div>

              {/* Name & Role */}
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-[#6b7280] mb-4">
                {item.role}
              </p>

              {/* Stars */}
              {/* <div className="flex justify-center gap-1 text-yellow-400">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div> */}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;

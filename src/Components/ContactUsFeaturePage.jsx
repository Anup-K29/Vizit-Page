import React from "react";
import ContactIllustration from "../assets/images/FeaturePage/ContactIllustration.png";

export const ContactUsFeaturePage = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-5xl px-6 ">
        <div className="flex flex-col items-center justify-between gap-10 rounded-3xl  border-[#AA60C8] p-10 md:flex-row  inset-shadow-sm inset-shadow-[#AA60C8] shadow-xl ">
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <h3 className="text-4xl font-medium text-[#AA60C8]">
              Something Missing ? <br /> Need More Features ?
            </h3>

            <h2 className="mt-3 text-4xl font-bold text-black">Contact Us</h2>

            <p className="mt-2 text-2xl text-gray-600">
              We will develop it for you!
            </p>

            {/* Optional Button */}
            <button className="mt-6 rounded-lg bg-[#AA60C8] px-6 py-3 text-md font-medium text-white transition hover:bg-white border-2 border-[#AA60C8] hover:text-[#AA60C8] cursor-pointer">
              Get in Touch
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="max-w-sm">
            <img
              src={ContactIllustration}
              alt="Contact illustration"
              loading="lazy"
              decoding="async"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

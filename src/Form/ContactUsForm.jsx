import React from "react";
import { useForm } from "react-hook-form";

export const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form data:", data);

    // TODO: send to API here
    await new Promise((r) => setTimeout(r, 800)); // fake delay

    reset();
  };

  return (
    <div className="mt-16 rounded-2xl border border-[#AA60C8] p-8">
      <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
      <p className="text-gray-600 mb-6">
        Tell us what you need and our team will get back to you.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-[#AA60C8]"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-[#AA60C8]"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <textarea
            rows="4"
            placeholder="Your message..."
            className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-[#AA60C8]"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-lg bg-[#AA60C8] px-6 py-3 text-white font-medium hover:opacity-90 disabled:opacity-50 cursor-pointer hover:bg-[white] hover:text-[#AA60C8] border-2 border-[#AA60C8]"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {isSubmitSuccessful && (
          <p className="text-green-600 font-medium">
            Message sent successfully!
          </p>
        )}
      </form>
    </div>
  );
};

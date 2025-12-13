import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { formSchema } from "./formValidation";
import { useCountryCode } from "./countryCode";
import axios from "axios";
import toast from "react-hot-toast";

const API_BASE_URL = "https://vms-backend-w6pj.onrender.com";

function RegistrationForm() {
  const countryList = useCountryCode();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      companyName: "",
      countryCode: "+91",
      phoneNumber: "",
      email: "",
      password: "",
      category: "",
      hearAboutUs: "",
    },
  });

  const [serverMessage, setServerMessage] = useState(null);
  const [serverError, setServerError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  console.log("loading state changed:", loading);

  const onSubmit = async (data) => {
    // console.log("eeeeeee", e)
    console.log("onSubmit called with:", data);
    setServerMessage(null);
    setServerError(null);
    setLoading(true);

    const payload = {
      name: data.name,
      company_name: data.companyName,
      country_code: data.countryCode,
      phone: data.phoneNumber,
      email: data.email,
      password: data.password,
      category: data.category,
      heard_about_us: data.hearAboutUs,
    };

    try {
      const res = await axios.post(`${API_BASE_URL}/api/auth/signup`, payload);

      const message =
        res.data.message || "Account created. 15-day trial started.";

      setServerMessage(message);

      //   toast.success(message, {
      //   duration: 4000,
      //   style: {
      //     borderRadius: "8px",
      //     background: "#333",
      //     color: "#fff",
      //   },
      // })
      setShowPopup(true);
      reset(); // clear form
    } catch (err) {
      console.error("Signup error (frontend):", err);
      const errorMsg =
        err.response?.data?.message ||
        "Something went wrong. Please try again.";

      setServerError(errorMsg);

      toast.error(errorMsg, {
        duration: 4000,
        style: {
          borderRadius: "8px",
          background: "#ff4d4f",
          color: "#fff",
        },
      });
    } finally {
      // console.log("Finally block: setting loading = false");
      setLoading(false);
    }
  };

  const categories = [
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "Retail",
    "Manufacturing",
    "Consulting",
    "Other",
  ];

  const hearAboutUsOptions = [
    "Google Search",
    "Social Media",
    "Friend/Colleague",
    "Advertisement",
    "Event/Conference",
    "Email Newsletter",
    "Blog/Article",
    "Other",
  ];

  return (
    <>
      {/* {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xl bg-white/10 z-50">
          <div className="bg-white w-full max-w-md rounded-xl shadow-2xl p-6 animate-fadeIn">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              🎉 Account Created!
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              Your account has been created successfully. Please check your
              email inbox.
            </p>

            <div className="flex justify-end">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      )} */}


      {showPopup && (
  <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl bg-transparent">

    <div className="bg-white/80 backdrop-blur-xl shadow-2xl w-full max-w-md p-7 rounded-2xl animate-slideFadeUp border border-white/30">

      {/* Success Icon */}
      <div className="flex justify-center mb-4">
        <div className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg animate-pop">
          ✓
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-800 text-center">
        Account Created Successfully!
      </h3>

      <p className="text-gray-600 text-sm mt-2 text-center">
        Please check your email inbox and verify your account to get started.
      </p>

      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowPopup(false)}
          className="px-5 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 cursor-pointer transition-all "
        >
          Close
        </button>
      </div>

    </div>

  </div>
)}


      <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
        <div className="w-full max-w-2xl bg-white shadow-xl rounded-xl p-8">
          {/* Header */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-1">
            Create Your Account
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Start your 15-day free trial. No credit card required.
          </p>

          {/* Alerts */}
          {/* {serverMessage && (
            <div className="bg-green-100 text-green-700 border border-green-300 px-4 py-2 rounded-md text-sm mb-4">
              {serverMessage}
            </div>
          )}
          {serverError && (
            <div className="bg-red-100 text-red-700 border border-red-300 px-4 py-2 rounded-md text-sm mb-4">
              {serverError}
            </div>
          )} */}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Grid Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  {...register("name")}
                  required
                  className="mt-1 w-full border rounded-md px-3 py-2 shadow-sm text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter company name"
                  {...register("companyName")}
                  required
                  className="mt-1 w-full border rounded-md px-3 py-2 shadow-sm text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.companyName.message}
                  </p>
                )}
              </div>

              {/* Country */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Country <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("countryCode")}
                  value={watch("countryCode")}
                  className="mt-1 w-full border rounded-md px-3 py-2 shadow-sm text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  {countryList.map((c) => (
                    <option key={c.country} value={c.calling_code}>
                      {c.calling_code} {c.country}
                    </option>
                  ))}
                </select>
                {errors.countryCode && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.countryCode.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  {...register("phoneNumber")}
                  maxLength={10}
                  required
                  className="mt-1 w-full border rounded-md px-3 py-2 shadow-sm text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email")}
                  required
                  className="mt-1 w-full border rounded-md px-3 py-2 shadow-sm text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password")}
                  required
                  className="mt-1 w-full border rounded-md px-3 py-2 shadow-sm text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            {/* Category & Hear About Us */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("category")}
                  className="mt-1 w-full border rounded-md px-3 py-2 shadow-sm text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.category.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  How did you hear about us?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("hearAboutUs")}
                  className="mt-1 w-full border rounded-md px-3 py-2 shadow-sm text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select an option</option>
                  {hearAboutUsOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
                {errors.hearAboutUs && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.hearAboutUs.message}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-2.5 rounded-md shadow-md text-sm font-medium hover:bg-indigo-700 
                     transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Create Account"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default RegistrationForm;

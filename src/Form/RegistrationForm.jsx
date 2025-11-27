// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';

// import { formSchema } from './formValidation';
// import { useCountryCode } from './countryCode';
// import axios from 'axios';

// const api_base_url = "https://vms-backend-w6pj.onrender.com"

// function RegistrationForm() {

//   const countryList = useCountryCode();
//   // console.log(countryList);


//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors }
//   } = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: '',
//       companyName: '',
//       countryCode: '+91',
//       phoneNumber: '',
//       email: '',
//       password: '',
//       category: '',
//       hearAboutUs: ''
//     }
//   });

//   const [serverMessage, setServerMessage] = useState(null);
//   const [serverError, setServerError] = useState(null);
//   const [loading,setLoading]=useState(false)

//   const onSubmit = async(data) => {

//     // this runs when form is valid & submitted
//     setServerMessage(null);
//     setServerError(null);
//     setLoading(true)


//         // map frontend field names -> backend expected keys
//     const payload = {
//       name: data.name,
//       company_name: data.companyName,
//       country_code: data.countryCode,
//       phone: data.phoneNumber,
//       email: data.email,
//       password: data.password,
//       category: data.category,
//       heard_about_us: data.hearAboutUs
//     }

//     try {
//       const res=await axios.post(`${api_base_url}/api/auth/signup`,payload)

//       setServerMessage(res.data.message || "Account created. 15-day trial started.");
         
      
//     } catch (err) {
//       console.error(err);
//       if (err.response?.data?.message) {
//         setServerError(err.response.data.message);
//       } else {
//         setServerError("Something went wrong. Please try again.");
//       }
//     }finally{
//       console.log("Setting loading to false")
//       setLoading(false)
//     }
//   };


//   // Categories data
//   const categories = [
//     'Technology',
//     'Healthcare',
//     'Finance',
//     'Education',
//     'Retail',
//     'Manufacturing',
//     'Consulting',
//     'Other'
//   ];

//   // How did you hear about us options
//   const hearAboutUsOptions = [
//     'Google Search',
//     'Social Media',
//     'Friend/Colleague',
//     'Advertisement',
//     'Event/Conference',
//     'Email Newsletter',
//     'Blog/Article',
//     'Other'
//   ];

//   return (

//     // old
//   <>

//     <form onSubmit={handleSubmit(onSubmit)}
//       className="max-w-2xl mx-auto p-6 space-y-6 mt-15">
//       {/* 2-column grid: name / company | country / phone | email / password */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* row-1 */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Name *</label>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             {...register('name')}
//             required
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
//           />
//           {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Company Name *</label>
//           <input
//             type="text"
//             placeholder="Enter company name"
//             {...register('companyName', { required: true })} required
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
//           />
//           {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName.message}</p>}
//         </div>

//         {/* row-2 */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Country *</label>
//           <select
//             {...register('countryCode')}

//             value={watch('countryCode')}
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
//           >
//             {countryList.map((c) => (
//               <option key={c.country} value={c.calling_code}>
//                 {c.calling_code} {c.country}
//               </option>
//             ))}
//           </select>
//           {errors.countryCode && <p className="text-red-500 text-xs mt-1">{errors.countryCode.message}</p>}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
//           <input
//             type="tel"
//             placeholder="Enter your phone number  "
//             {...register('phoneNumber', { required: true })} required
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
//           />
//           {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>}
//         </div>

//         {/* row-3 */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Email *</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             {...register('email', { required: true })} required
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
//           />
//           {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Password *</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             {...register('password', { required: true })} required
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
//           />
//           {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
//         </div>
//       </div>

//       {/* Two-column row: Category | Hear-about-us */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Category *</label>
//           <select {...register('category', { required: true })} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border">
//             <option value="">Select a category</option>
//             {categories.map((cat) => (
//               <option key={cat} value={cat}>{cat}</option>
//             ))}
//           </select>
//           {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">How did you hear about us? *</label>
//           <select {...register('hearAboutUs', { required: true })} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border">
//             <option value="">Select an option</option>
//             {hearAboutUsOptions.map((o) => (
//               <option key={o} value={o}>{o}</option>
//             ))}
//           </select>
//           {errors.hearAboutUs && <p className="text-red-500 text-xs mt-1">{errors.hearAboutUs.message}</p>}
//         </div>
//       </div>

//       {/* Sign-up button */}
//       <button
//         type="submit"
//         disabled={loading}
//         className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
//       >
//         {loading ? 'Submitting...' : 'Sign up'}
//       </button>
//     </form>

//   </>

//   );
// }

// export default RegistrationForm;











import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { formSchema } from "./formValidation";
import { useCountryCode } from "./countryCode";
import axios from "axios";

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
     

      setServerMessage(
        res.data.message || "Account created. 15-day trial started."
      );
      reset(); // clear form
    } catch (err) {
      console.error("Signup error (frontend):", err);
      if (err.response?.data?.message) {
        setServerError(err.response.data.message);
      } else {
        setServerError("Something went wrong. Please try again.");
      }
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      
      className="max-w-2xl mx-auto p-6 space-y-6 mt-15"
    >
     

      {/* Messages */}
      {serverMessage && (
        <p className="text-green-600 text-sm mb-2">{serverMessage}</p>
      )}
      {serverError && (
        <p className="text-red-600 text-sm mb-2">{serverError}</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* row-1 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name *
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Company Name *
          </label>
          <input
            type="text"
            placeholder="Enter company name"
            {...register("companyName")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          />
          {errors.companyName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.companyName.message}
            </p>
          )}
        </div>

        {/* row-2 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Country *
          </label>
          <select
            {...register("countryCode")}
            value={watch("countryCode")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
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

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number *
          </label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            {...register("phoneNumber")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-xs mt-1">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>

        {/* row-3 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password *
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>

      {/* Two-column row: Category | Hear-about-us */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category *
          </label>
          <select
            {...register("category")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
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
          <label className="block text-sm font-medium text-gray-700">
            How did you hear about us? *
          </label>
          <select
            {...register("hearAboutUs")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
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

      {/* Sign-up button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Sign up"}
      </button>
    </form>
  );
}

export default RegistrationForm;
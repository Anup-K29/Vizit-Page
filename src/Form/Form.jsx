import React from 'react';
import { useForm, Watch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { formSchema } from './formValidation';
import { useCountryCode } from './countryCode';

function RegistrationForm() {

  const countryList = useCountryCode();
  console.log(countryList);


  const {
    register,
    handleSubmit, watch,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      companyName: '',
      countryCode: '+91',
      phoneNumber: '',
      email: '',
      password: '',
      category: '',
      hearAboutUs: ''
    }
  });

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    // Add your form submission logic here
    alert('Form submitted successfully!');
  };


  // Categories data
  const categories = [
    'Technology',
    'Healthcare',
    'Finance',
    'Education',
    'Retail',
    'Manufacturing',
    'Consulting',
    'Other'
  ];

  // How did you hear about us options
  const hearAboutUsOptions = [
    'Google Search',
    'Social Media',
    'Friend/Colleague',
    'Advertisement',
    'Event/Conference',
    'Email Newsletter',
    'Blog/Article',
    'Other'
  ];

  return (<>
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto p-6 space-y-6 mt-15">
      {/* 2-column grid: name / company | country / phone | email / password */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* row-1 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name *</label>
          <input
            type="text"
            placeholder="Enter your name"
            {...register('name')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Company Name *</label>
          <input
            type="text"
            placeholder="Enter company name"
            {...register('companyName')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          />
          {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName.message}</p>}
        </div>

        {/* row-2 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Country *</label>
          <select
            {...register('countryCode')}
            value={watch('countryCode')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          >
            {countryList.map((c) => (
              <option key={c.country} value={c.calling_code}>
                {c.calling_code} {c.country}
              </option>
            ))}
          </select>
          {errors.countryCode && <p className="text-red-500 text-xs mt-1">{errors.countryCode.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
          <input
            type="tel"
            placeholder="Enter your phone number  "
            {...register('phoneNumber')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          />
          {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>}
        </div>

        {/* row-3 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email *</label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register('email')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password *</label>
          <input
            type="password"
            placeholder="Enter your password"
            {...register('password')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>
      </div>


      {/* Two-column row: Category | Hear-about-us */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Category *</label>
          <select {...register('category')} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border">
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">How did you hear about us? *</label>
          <select {...register('hearAboutUs')} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border">
            <option value="">Select an option</option>
            {hearAboutUsOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
          {errors.hearAboutUs && <p className="text-red-500 text-xs mt-1">{errors.hearAboutUs.message}</p>}
        </div>
      </div>



      {/* Sign-up button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'Sign up'}
      </button>
    </form>
  </>

  );
}

export default RegistrationForm;
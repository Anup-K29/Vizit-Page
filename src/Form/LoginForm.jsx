import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema } from "./formValidation"
import Logo from "../assets/images/vizit-logo.png";

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(formSchema)
    })

    const onSubmit = (data) => {
        // Add your Loginform submission logic here
        alert('Form submitted successfully!');
    }
    return (
        <>
            <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>

                <div className='w-full max-w-sm bg-white p-8 rounded-xl shadow-lg space-y-6'>

                    <div className=" flex justify-center">
                        <img className="w-20" src={Logo} alt="logo" />
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}
                        className=' mx-auto p-6 space-y-6 mt-15'>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email *</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                {...register('email')} required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password *</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                {...register('password', { required: true })} required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                            />
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                        </div>



                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                        >
                            {isSubmitting ? 'Submitting...' : 'Login'}
                        </button>

                    </form>

                </div>

            </div>



        </>
    )
}

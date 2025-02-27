import React from 'react'
import { useForm } from 'react-hook-form';



const ContactUs = () => {
   const {
           register,
           handleSubmit,
           formState: { errors }
       } = useForm();
   
       const onSubmit = (data) => {
        console.log('Form submitted:', data);
       };


  return (
    <div className="pt-20">
      <div className="max-w-3xl mx-auto mt-20 px-6">
        <h2 className="text-4xl font-montserrat font-normal text-center mb-2">CONTACT US</h2>
        <p className="text-center text-sm font-montserrat font-light text-black mb-12">
          OUR FRIENDLY SUPPORT TEAM IS HERE TO HELP YOU!
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <input
                type="text"
                placeholder="First name"
                {...register('firstName', { required: 'First name is required' })}
                className="font-montserrat font-light w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-900"
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                placeholder="Last name"
                {...register('lastName', { required: 'Last name is required' })}
                className="font-montserrat font-light w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-900"
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              className="font-montserrat font-light w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-900"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <div className="flex">
              <span className="font-montserrat font-light text-black border-b border-gray-300 py-2 pr-2">+216</span>
              <input
                type="tel"
                placeholder="00 - 000 - 000"
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^\d{2}\s-\s\d{3}\s-\s\d{3}$/,
                    message: 'Please use the format: 00 - 000 - 000'
                  }
                })}
                className="font-montserrat font-light w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-900"
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <textarea
              placeholder="Message"
              rows={4}
              {...register('message', { required: 'Message is required' })}
              className="font-montserrat font-light w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-900"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-40 px-6 py-2 font-light text-sm text-black border-[1.5px] border-[#353535] hover:bg-[#353535] hover:text-white rounded-full transition-all duration-300"
          >
            SEND A MESSAGE
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs;

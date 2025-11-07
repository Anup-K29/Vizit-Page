import React from 'react'

export const ProcessCards = ({title,description,image}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition duration-300">
      <img src={image} alt={title} className="w-40 h-40 object-contain mb-4 scale-130" />
      <h3 className="text-[#6730CF] font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

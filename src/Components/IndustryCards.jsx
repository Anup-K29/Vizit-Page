import React from 'react'

export const IndustryCards = ({title,image,description}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        
      <img src={image} alt={title} className="w-full h-50 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-[#6730CF] font-semibold text-lg mb-1">
          {title}
        </h3>
        <p className="text-gray-700 text-sm leading-snug">
          {description}
        </p>
      </div>
    </div>
  )
}

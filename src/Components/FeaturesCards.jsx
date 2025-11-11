import React from 'react'


export const FeaturesCards = ({title,icon}) => {
  return (
      <div className="flex flex-col items-center text-center text-white hover:scale-105 transition-transform duration-300">
      <img src={icon} alt={title} className="w-14 h-14 mb-8 scale-150 " />
      <p className="text-xl font-medium opacity-90 ">{title}</p>
    </div>
  )
}



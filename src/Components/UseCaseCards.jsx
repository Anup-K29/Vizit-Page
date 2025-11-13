// UseCaseCard.jsx
import React from "react";

const UseCaseCard = ({ image, title, features }) => {
    return (
        <div
        //   className="rounded-2xl p-8 shadow-md flex gap-8"
        //   style={{
        //     background: "linear-gradient(135deg, #6730CF 0%, #7037DB 80%, #C493FF 10%)"
        //   }}  linear-gradient(10deg, #6730CF 0%, #7037DB 0%, #C493FF 90%)
        >

            <div className="bg-white w-full rounded-2xl p-8 shadow-md flex gap-8"
            style={{
            background: "#E6D1FF"
          }}>

                {/* LEFT COLUMN → Title + Image */}
                <div className="w-1/3 flex flex-col gap-4">

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-purple-700 leading-snug">
                        {title}
                    </h2>

                    {/* Image Below Title */}
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-auto object-contain rounded-md"
                    />
                </div>

                {/* RIGHT COLUMN → 3 Features */}
                <div className="w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((item, index) => (
                        <div key={index} className="flex flex-col gap-2">

                            {/* Subheading */}
                            <h3 className="text-lg font-semibold text-gray-900">
                                {item.heading}
                            </h3>

                            {/* Desc1 (black) */}
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {item.desc1}
                            </p>

                            {/* Desc2 (purple) */}
                            <p className="text-purple-700 text-sm leading-relaxed">
                                {item.desc2}
                            </p>

                        </div>
                    ))}
                </div>

            </div>
            
        </div>
    );
};

export default UseCaseCard;


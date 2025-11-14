// UseCaseCard.jsx
import React from "react";
import { motion } from "framer-motion";

const UseCaseCard = ({ image, title, features }) => {
    return (

        <motion.div
            initial={{ opacity: 0, y: 40 , scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
        >
            <div className="usecase-card-wrapper relative rounded-2xl p-[2px] overflow-hidden">
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
                            className="w-auto h-55 object-full rounded-md"
                        />
                    </div>

                    {/* RIGHT COLUMN → 3 Features */}
                    <motion.div
                        className="w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            show: {
                                
                                transition: { delayChildren: 0.20,staggerChildren: 0.40 }
                            }
                        }}
                    >
                        {features.map((item, index) => (
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 400 },
                                    show: { opacity: 1, y: 0 }
                                }}

                                className="flex flex-col gap-2"
                                key={index}
                            >

                                {/* Subheading */}
                                <h3 className="text-xl font-bold text-gray-900">
                                    {item.heading}
                                </h3>

                                {/* Desc1 (black) */}
                                <p className="text-gray-700 text-[14px] leading-relaxed">
                                    {item.desc1}
                                </p>

                                {/* Desc2 (purple) */}
                                <p className="text-purple-700 text-[15px] leading-relaxed">
                                    {item.desc2}
                                </p>

                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>

        </motion.div>


    );
};

export default UseCaseCard;


// src/components/FeatureBlock.jsx

const FeatureBlock = ({
  eyebrow,
  title,
  description,
  buttonText,
  image,
  reverse = false,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      
      {/* TEXT */}
      <div className={reverse ? "lg:order-2" : "lg:order-1"}>
        <p className="text-sm font-semibold text-orange-500 mb-3">
          {eyebrow}
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          {title}
        </h2>

        <p className="text-lg mb-8">{description}</p>

        <button className="px-6 py-3 bg-orange-500 text-white rounded-lg">
          {buttonText}
        </button>
      </div>

      {/* IMAGE */}
      <div className={reverse ? "lg:order-1" : "lg:order-2"}>
        <img src={image} alt={title} className="w-full max-w-xl" />
      </div>

    </div>
  );
};
export default FeatureBlock;
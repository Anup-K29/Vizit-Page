import {lobbySections} from "../DataObjects/Lobby.js"

export const Lobby = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="text-center mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f0f1a]">
          How Vizit Transforms Your Lobby
        </h2>
      </div>
      <div className="max-w-5xl mx-auto px-6 space-y-24">
        {lobbySections.map((item, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-26 ${
                isReverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* TEXT */}
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-semibold text-[#AA60C8]">
                  {item.title}
                </h3>
                <p className="text-[#4b4b63] text-xl leading-relaxed max-w-sm">
                  {item.description}
                </p>
              </div>

              {/* IMAGE */}
              <div className="flex-1 flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="rounded-xl shadow-xl w-full max-w-xl"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

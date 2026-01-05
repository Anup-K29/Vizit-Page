import Lobby1 from "../assets/images/HomePage/Lobby1.png";
import Lobby2 from "../assets/images/HomePage/Lobby2.png";
import Lobby3 from "../assets/images/HomePage/Lobby3.png";
import Lobby4 from "../assets/images/HomePage/Lobby4.png";
export const lobbySections = [
  {
    title: "Quick Visitor Sign-Up & Compliance",
    description:
      "Transform your lobby with a lightning-fast sign-up process that handles all your legal and security requirements automatically. From digital NDAs to ID verification, Vizit keeps your workspace secure and your audit trail flawless.",
    image: Lobby1,
  },
  {
    title: "Host Notification and Approval",
    description:
      "Keep your lobby moving by instantly connecting guests with their hosts through automated alerts. Vizit ensures the right person is notified the second a visitor arrives, allowing for one-tap approvals and a seamless handoff.",
    image: Lobby2,
  },
  {
    title: "QR-Based Access & Authentication",
    description:
      "Streamline entry with a QR-based system that replaces manual check-ins with a simple scan. By providing guests with unique, secure access codes, Vizit ensures rapid authentication while maintaining strict control over who enters your facility.",
    image: Lobby3,
  },
  {
    title: "Real-Time Global Oversight",
    description:
      "Take full control of your facility from anywhere with a centralized, cloud-based command center. Vizit provides instant visibility into visitor traffic and security alerts, ensuring you stay informed and in command.",
    image: Lobby4,
  },
];

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

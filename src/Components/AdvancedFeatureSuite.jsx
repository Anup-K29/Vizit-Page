// components/AdvancedFeatureSuite.jsx
import {FeatureCardBlocks} from "./FeatureCardBlocks.jsx";
import IdScanning from "../assets/images/FeaturePage/IdScanning.png";
import WatchlistManagement from "../assets/images/FeaturePage/WatchlistManagement.png";
import OccupancyDashboards from "../assets/images/FeaturePage/WatchlistManagement.png";
import PhotoCapture from "../assets/images/FeaturePage/PhotoCapture.png";

const securityFeaturesData = [
  {
    id: 1,
    title: "ID Scanning Verification",
    description: "Automatic identity verification.",
    image: IdScanning,
  },
  {
    id: 2,
    title: "Watchlist Management",
    description: "Flags or blocks banned individuals.",
    image: WatchlistManagement,
  },
  {
    id: 3,
    title: "Occupancy Dashboards",
    description: "Real-time list of people onsite.",
    image: OccupancyDashboards,
  },
  {
    id: 4,
    title: "Photo Capture & Badge",
    description: "Instant photo ID printed badges.",
    image: PhotoCapture,
  },
];




export const AdvancedFeatureSuite = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <div>
            <h2 className="text-6xl font-bold text-black">
              Advanced Feature Suite
            </h2>

            <p className="mt-8 max-w-md text-gray-600 text-2xl">
              Discover the powerful tools designed to automate your
              reception, enhance onsite security, and provide a
              seamless experience for every visitor .
            </p>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-gray-900">
              Security & Access Control
            </h3>

            <div className="grid gap-6 sm:grid-cols-2">
              {securityFeaturesData.map((feature) => (
                <FeatureCardBlocks
                  key={feature.id}
                  image={feature.image}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};



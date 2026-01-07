import React from "react";
import { FeatureCardBlocks } from "./FeatureCardBlocks.jsx";

import {
  ComplianceFeaturesData,
  OperationalEfficiencyFeaturesData,
  AnalyticsBrandFeaturesData,
  SafetyEmergencyFeaturesData,
} from "../DataObjects/RestAdvanceFeatures.js";

export const RestAdvanceFeatures = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-gray-900">
              Compliance & Legal
            </h3>

            <div className="grid gap-6 sm:grid-cols-2">
              {ComplianceFeaturesData.map((feature) => (
                <FeatureCardBlocks
                  key={feature.id}
                  image={feature.image}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-semibold text-gray-900">
              Operational Efficiency
            </h3>

            <div className="grid gap-6 sm:grid-cols-2">
              {OperationalEfficiencyFeaturesData.map((feature) => (
                <FeatureCardBlocks
                  key={feature.id}
                  image={feature.image}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-semibold text-gray-900">
              Analytics & Brand
            </h3>

            <div className="grid gap-6 sm:grid-cols-2">
              {AnalyticsBrandFeaturesData.map((feature) => (
                <FeatureCardBlocks
                  key={feature.id}
                  image={feature.image}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-semibold text-gray-900">
              Safety & Emergency
            </h3>

            <div className="grid gap-6 sm:grid-cols-2">
              {SafetyEmergencyFeaturesData.map((feature) => (
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

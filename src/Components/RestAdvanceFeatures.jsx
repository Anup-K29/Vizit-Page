import React from "react";
import { FeatureCardBlocks } from "./FeatureCardBlocks.jsx";

import DigitalNda from "../assets/images/FeaturePage/DigitalNda.png";
import ScreeningQuestions from "../assets/images/FeaturePage/ScreeningQuestions.png";
import DataPrivacySafety from "../assets/images/FeaturePage/DataPrivacySafety.png";
import AuditTrailsReports from "../assets/images/FeaturePage/AuditTrailsReports.png";

import SelfServiceKiosks from "../assets/images/FeaturePage/SelfServiceKiosks.png";
import PreRegistration from "../assets/images/FeaturePage/PreRegistration.png";
import HostNotifications from "../assets/images/FeaturePage/HostNotifications.png";
import BulkRegistration from "../assets/images/FeaturePage/BulkRegistration.png";

import CustomBranding from "../assets/images/FeaturePage/CustomBranding.png";
import TrafficInsights from "../assets/images/FeaturePage/TrafficInsights.png";
import WaitTimeTracking from "../assets/images/FeaturePage/WaitTimeTracking.png";

import MassAlertsNotifications from "../assets/images/FeaturePage/MassAlertsNotifications.png";
import DigitalRollCall from "../assets/images/FeaturePage/DigitalRollCall.png";
import WayfindingNavigation from "../assets/images/FeaturePage/WayfindingNavigation.png";

const ComplianceFeaturesData = [
  {
    id: 1,
    title: "Digital NDA/Waiver Signing",
    description: "On-screen legal waiver signing.",
    image: DigitalNda,
  },
  {
    id: 2,
    title: "Screening Questions",
    description: "Custom health/safety surveys.",
    image: ScreeningQuestions,
  },
  {
    id: 3,
    title: "Data Privacy & Safety",
    description: "Auto-deletes logs for GDPR.",
    image: DataPrivacySafety,
  },
  {
    id: 4,
    title: "Audit Trails & Reports",
    description: "Exportable history for inspectors.",
    image: AuditTrailsReports,
  },
];

const OperationalEfficiencyFeaturesData = [
  {
    id: 1,
    title: "Self-Service Kiosks",
    description: "Custom kiosks for guest self-check-in.",
    image: SelfServiceKiosks,
  },
  {
    id: 2,
    title: "Pre-Registration",
    description: "QR codes sent before arrival.",
    image: PreRegistration,
  },
  {
    id: 3,
    title: "Host Notifications",
    description: "Instant SMS/Email arrival alerts.",
    image: HostNotifications,
  },
  {
    id: 4,
    title: "Bulk Registration",
    description: "Fast check-in for large groups.",
    image: BulkRegistration,
  },
];

const AnalyticsBrandFeaturesData = [
  {
    id: 1,
    title: "Custom Branding",
    description: "Logo and theme personalization.",
    image: CustomBranding,
  },
  {
    id: 2,
    title: "Traffic Insights",
    description: "Custom health/safety surveys.",
    image: TrafficInsights,
  },
  {
    id: 3,
    title: "Wait-Time Tracking",
    description: "Measures receptionist/host speed.",
    image: WaitTimeTracking,
  },
];

const SafetyEmergencyFeaturesData = [
  {
    id: 1,
    title: "Mass Alerts & Notifications",
    description: "Emergency instructions sent to guests.",
    image: MassAlertsNotifications,
  },
  {
    id: 2,
    title: "Digital Roll Call",
    description: "Mobile-based evacuation checklists.",
    image: DigitalRollCall,
  },
  {
    id: 3,
    title: "Wayfinding & Navigation",
    description: "Digital maps sent to phones.",
    image: WayfindingNavigation,
  },
];

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

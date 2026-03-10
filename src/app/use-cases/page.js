import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const useCases = [
  {
    title: "Spices Quality Intelligence",
    desc: "Assess freshness, aroma retention, storage stability, and contamination suspicion using multimodal sensing."
  },
  {
    title: "Fruit & Herb Freshness Monitoring",
    desc: "Track ripeness, spoilage trends, moisture stress, and quality drift across storage and logistics."
  },
  {
    title: "Essential Oils Profiling",
    desc: "Support profile consistency, oxidation trend detection, and batch fingerprint analysis."
  },
  {
    title: "Coal Quality Intelligence",
    desc: "Monitor coal-linked gases, dust, moisture context, and source-level variability for decision support."
  },
  {
    title: "Industrial Air & Emission Monitoring",
    desc: "Enable field and plant-level pollutant insight with digital monitoring, alerts, and analytics."
  },
  {
    title: "Warehouse Storage Risk Analytics",
    desc: "Link environment, sensing, and AI models to identify storage-linked degradation and operational risk."
  }
];

export default function UseCasesPage() {
  return (
    <>
      <Navbar />
      <main className="section page-top">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">Use Cases</p>
            <h1 className="page-title">Multi-Domain Application Areas</h1>
            <p className="section-text">
              MxSense is designed as a platform-led sensing intelligence system
              that can operate across food, agriculture, industrial quality,
              warehouse monitoring, and environmental use cases.
            </p>
          </div>

          <div className="card-grid">
            {useCases.map((item) => (
              <div className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
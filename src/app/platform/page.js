import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const modules = [
  {
    title: "Device Management",
    desc: "Manage sensing devices, health, firmware versions, deployment sites, and operational status."
  },
  {
    title: "Live Sensing Dashboard",
    desc: "Monitor real-time sensor feeds, sample runs, AI outputs, and batch-level quality indicators."
  },
  {
    title: "AI Insights Engine",
    desc: "Run multimodal inference across sensor, vision, thermal, and contextual inputs."
  },
  {
    title: "Traceability Explorer",
    desc: "Track samples, batches, devices, timestamps, operators, and model versions."
  },
  {
    title: "Alerts & Notifications",
    desc: "Generate actionable alerts for anomalies, drift, contamination suspicion, and process deviations."
  },
  {
    title: "Reports & Analytics",
    desc: "Export QA summaries, trend analysis, batch reports, and operational intelligence."
  }
];

export default function PlatformPage() {
  return (
    <>
      <Navbar />
      <main className="section page-top">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">Platform Overview</p>
            <h1 className="page-title">Digital AI Platform Modules</h1>
            <p className="section-text">
              MxSense is designed as a scalable sensing intelligence platform
              connecting physical sensing, edge processing, AI analytics, and
              decision workflows into one digital system.
            </p>
          </div>

          <div className="card-grid">
            {modules.map((item) => (
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
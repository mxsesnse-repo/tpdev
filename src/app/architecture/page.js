import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const layers = [
  {
    title: "Sensing Layer",
    points: [
      "VOC and gas sensors",
      "Vision and thermal imaging",
      "Environmental and particulate sensing",
      "Optional firmness, acoustic, or spectral modules"
    ]
  },
  {
    title: "Edge AI Layer",
    points: [
      "Signal preprocessing",
      "Feature extraction",
      "Low-latency inference",
      "Offline buffering and secure sync"
    ]
  },
  {
    title: "Cloud AI Layer",
    points: [
      "Multimodal fusion",
      "Model orchestration",
      "Traceability engine",
      "Analytics and report generation"
    ]
  },
  {
    title: "Decision Layer",
    points: [
      "Dashboards and alerts",
      "QA workflows",
      "Enterprise integrations",
      "Operator and manager actions"
    ]
  }
];

export default function ArchitecturePage() {
  return (
    <>
      <Navbar />
      <main className="section page-top">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">Architecture</p>
            <h1 className="page-title">Edge-to-Cloud Platform Architecture</h1>
            <p className="section-text">
              The MxSense platform architecture is built to move from sensing to
              intelligence through a layered flow that is practical for field,
              plant, warehouse, and industrial deployments.
            </p>
          </div>

          <div className="flow-grid">
            {layers.map((layer) => (
              <div className="flow-box" key={layer.title}>
                <h3>{layer.title}</h3>
                <ul className="list">
                  {layer.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="section-header top-gap">
            <h2>Reference Flow</h2>
            <p className="section-text">
              Sensors capture data, edge systems preprocess and infer, cloud AI
              performs fusion and traceability, and dashboards deliver decision
              intelligence.
            </p>
          </div>

          <div className="architecture-line">
            <div className="flow-pill">Sensing Devices</div>
            <div className="flow-arrow">→</div>
            <div className="flow-pill">Edge AI Gateway</div>
            <div className="flow-arrow">→</div>
            <div className="flow-pill">Cloud AI Platform</div>
            <div className="flow-arrow">→</div>
            <div className="flow-pill">Dashboards & APIs</div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
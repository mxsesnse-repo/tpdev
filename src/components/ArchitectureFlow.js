export default function ArchitectureFlow() {
  return (
    <section className="section" id="architecture">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Architecture</p>
          <h2>Edge-to-cloud digital intelligence flow</h2>
          <p className="section-text">
            The platform is designed to connect physical sensing layers with
            real-time edge processing, cloud AI, and actionable dashboards.
          </p>
        </div>

        <div className="flow-grid">
          <div className="flow-box">
            <h3>1. Sensing Devices</h3>
            <p>VOC, gas, thermal, vision, particulate, environmental, and other sensing modules.</p>
          </div>
          <div className="flow-box">
            <h3>2. Edge AI Gateway</h3>
            <p>Signal preprocessing, feature extraction, local inference, and secure buffering.</p>
          </div>
          <div className="flow-box">
            <h3>3. Cloud AI Platform</h3>
            <p>Multimodal fusion, model orchestration, analytics, traceability, and reporting.</p>
          </div>
          <div className="flow-box">
            <h3>4. Dashboards & APIs</h3>
            <p>Operational insights for QA, plant managers, customers, and enterprise integrations.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
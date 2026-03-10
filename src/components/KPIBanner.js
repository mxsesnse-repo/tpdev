export default function KPIBanner() {
  return (
    <section className="kpi-section">
      <div className="container kpi-grid">
        <div className="kpi-card">
          <h3>Multimodal AI</h3>
          <p>Sensor + vision + thermal + contextual intelligence</p>
        </div>
        <div className="kpi-card">
          <h3>Edge + Cloud</h3>
          <p>Low-latency decisions with scalable cloud analytics</p>
        </div>
        <div className="kpi-card">
          <h3>Traceability</h3>
          <p>Batch, sample, device, operator, and model lineage</p>
        </div>
        <div className="kpi-card">
          <h3>Domain Coverage</h3>
          <p>Food, agriculture, industrial quality, and emissions</p>
        </div>
      </div>
    </section>
  );
}
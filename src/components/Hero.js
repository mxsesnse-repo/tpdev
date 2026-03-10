export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">AI-Native • Edge + Cloud • Traceability</p>
          <h1>
            Digital AI Platform for Real-Time Quality, Traceability, and
            Sensing Intelligence
          </h1>
          <p className="hero-text">
            MxSense connects electronic sensing devices, multimodal AI models,
            edge intelligence, and cloud analytics to deliver actionable
            decision support across spices, fruits, herbs, essential oils, coal,
            and industrial environments.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#platform">
              Explore Platform
            </a>
            <a className="btn btn-secondary" href="#architecture">
              View Architecture
            </a>
          </div>

          <div className="hero-highlights">
            <span>Electronic Sensing Devices</span>
            <span>Edge AI Gateways</span>
            <span>Cloud AI Analytics</span>
            <span>Traceable Decision Intelligence</span>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-top">
            <span className="status-dot" />
            <span>Live Platform Snapshot</span>
          </div>

          <div className="hero-metrics">
            <div className="metric-box">
              <h4>Freshness Index</h4>
              <p>87%</p>
            </div>
            <div className="metric-box">
              <h4>Aroma Stability</h4>
              <p>High</p>
            </div>
            <div className="metric-box">
              <h4>Contamination Risk</h4>
              <p>Low</p>
            </div>
            <div className="metric-box">
              <h4>Devices Online</h4>
              <p>18</p>
            </div>
          </div>

          <div className="hero-flow">
            <div className="flow-pill">Sensors</div>
            <div className="flow-arrow">→</div>
            <div className="flow-pill">Edge AI</div>
            <div className="flow-arrow">→</div>
            <div className="flow-pill">Cloud</div>
            <div className="flow-arrow">→</div>
            <div className="flow-pill">Insights</div>
          </div>
        </div>
      </div>
    </section>
  );
}
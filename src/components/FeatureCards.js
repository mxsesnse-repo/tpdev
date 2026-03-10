import features from "../data/features";

export default function FeatureCards() {
  return (
    <section className="section" id="platform">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Why MxSense</p>
          <h2>Built as a modern sensing intelligence platform</h2>
          <p className="section-text">
            MxSense is positioned as an AI-native digital platform connecting
            sensing hardware, edge inference, traceability, and analytics into
            one commercially scalable system.
          </p>
        </div>

        <div className="card-grid">
          {features.map((item) => (
            <div className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
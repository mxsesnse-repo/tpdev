import modules from "../data/modules";

export default function PlatformModules() {
  return (
    <section className="section alt-section">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Core Modules</p>
          <h2>Platform capabilities designed for growth</h2>
        </div>

        <div className="module-grid">
          {modules.map((module) => (
            <div className="module-card" key={module}>
              {module}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
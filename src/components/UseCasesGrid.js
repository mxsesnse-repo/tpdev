import usecases from "../data/usecases";

export default function UseCasesGrid() {
  return (
    <section className="section alt-section" id="usecases">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Use Cases</p>
          <h2>Designed for multi-domain sensing applications</h2>
        </div>

        <div className="card-grid">
          {usecases.map((item) => (
            <div className="card" key={item}>
              <h3>{item}</h3>
              <p>
                AI-driven sensing workflow combining edge intelligence,
                cloud analytics, and traceable decision support.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="logo-wrap">
          <div className="logo-badge">M</div>
          <div>
            <div className="logo">MxSense Digital AI Platform</div>
            <div className="logo-sub">Sensing Intelligence</div>
          </div>
        </div>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/platform">Platform</a>
          <a href="/architecture">Architecture</a>
          <a href="/use-cases">Use Cases</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

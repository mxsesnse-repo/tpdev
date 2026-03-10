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
          <a href="/tpdev/">Home</a>
          <a href="/tpdev/platform">Platform</a>
          <a href="/tpdev/architecture">Architecture</a>
          <a href="/tpdev/use-cases">Use Cases</a>
          <a href="/tpdev/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
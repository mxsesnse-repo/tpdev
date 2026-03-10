import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="section page-top">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">Contact</p>
            <h1 className="page-title">Request a Demo</h1>
            <p className="section-text">
              Use this page to position MxSense for demo requests, pilot discussions,
              partner conversations, and investor or customer outreach.
            </p>
          </div>

          <div className="contact-box">
            <div className="card">
              <h3>MxSense Telingent Solutions</h3>
              <p>Email: info@mxsteligent.com</p>
              <p>Website: www.mxsteligent.com</p>
              <p>Focus: Electronic Sensing • Edge AI • Digital AI Platform</p>
            </div>

            <div className="card">
              <h3>Suggested CTA</h3>
              <p>Schedule a product walkthrough</p>
              <p>Request a pilot discussion</p>
              <p>Explore use-case fit for your domain</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
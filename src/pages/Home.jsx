import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero">
        <h1>Google Maps Management Service</h1>
        <p>Boost your visibility with expert management and optimization of your Google Maps listing.</p>
        <a href="mailto:sales@map2map.com" className="cta-button">Fix my listing now</a>
      </section>

      <section className="services">
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h3>New Listing Creation</h3>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-sync-alt"></i>
          </div>
          <h3>Listing Updates & Optimization</h3>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-clipboard-check"></i>
          </div>
          <h3>Accurate Business info Corrections</h3>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-images"></i>
          </div>
          <h3>Visual Enhancements</h3>
        </div>
      </section>

      <section className="cta-section">
        <h2>Not seeing results on Google Maps?</h2>
        <p>Let us help you fix that.</p>
        <a href="mailto:sales@map2map.com" className="cta-button">Start Free Consultation</a>
      </section>
    </>
  );
};

export default Home; 
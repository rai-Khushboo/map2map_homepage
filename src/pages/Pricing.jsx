import Navbar from '../components/Navbar';

const Pricing = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <h1>Pricing Plans</h1>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h2>Basic</h2>
            <div className="price">$99<span>/month</span></div>
            <ul>
              <li>Basic listing management</li>
              <li>Monthly updates</li>
              <li>Basic analytics</li>
            </ul>
            <a href="mailto:sales@map2map.com" className="cta-button">Get Started</a>
          </div>
          
          <div className="pricing-card featured">
            <h2>Professional</h2>
            <div className="price">$199<span>/month</span></div>
            <ul>
              <li>Advanced listing management</li>
              <li>Weekly updates</li>
              <li>Detailed analytics</li>
              <li>Priority support</li>
            </ul>
            <a href="mailto:sales@map2map.com" className="cta-button">Get Started</a>
          </div>
          
          <div className="pricing-card">
            <h2>Enterprise</h2>
            <div className="price">Custom</div>
            <ul>
              <li>Multiple location management</li>
              <li>Daily updates</li>
              <li>Advanced analytics & reporting</li>
              <li>24/7 support</li>
              <li>Custom solutions</li>
            </ul>
            <a href="mailto:sales@map2map.com" className="cta-button">Contact Us</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing; 
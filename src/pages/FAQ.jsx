import Navbar from '../components/Navbar';

const FAQ = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <h1>Frequently Asked Questions</h1>
        <div className="container">
          <div className="faq-section">
            <div className="faq-item">
              <h2 className="faq-question">What is Map2Map?</h2>
              <p className="faq-answer">Map2Map is a service that helps you manage your Google Business Profile and keep it up to date.</p>
            </div>

            <div className="faq-item">
              <h2 className="faq-question">Why should I choose Map2Map?</h2>
              <p className="faq-answer">We save you time by handling all the updates for your business. You can rely on us to keep your profile accurate.</p>
            </div>

            <div className="faq-item">
              <h2 className="faq-question">How often can I update my profile?</h2>
              <p className="faq-answer">You can request updates as often as needed – there's no limit.</p>
            </div>
          </div>

          <div className="contact-section">
            <h2>CONTACT US</h2>
            <a href="mailto:sales@map2map.com" className="contact-email">sales@map2map.com</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ; 
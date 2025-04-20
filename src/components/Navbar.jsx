import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <Link to="/" className="logo">Map2Map</Link>
      <nav>
        <Link to="/services">Services</Link>
        <Link to="/prices">Pricing</Link>
        <Link to="/faq">FAQ</Link>
        <a href="mailto:sales@map2map.com">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;

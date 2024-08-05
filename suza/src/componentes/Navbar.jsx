import { Link } from "react-router-dom";
import Logo from "../assets/img/SUZA PNG MO 1 (1).png";
import "../style/navbar.css";
const Navbar = () => {
  return (
    <>
      <div>
        <header>
          <picture>
            <img src={Logo} alt="" />
          </picture>
          <nav>
            <ul>
              <li>
                <Link to="/" className="links">
                  {" "}
                  Home
                </Link>
                <Link to="/AboutUs" className="links">
                  {" "}
                  About Us
                </Link>
                <Link to="/Varieties" className="links">
                  Varieties
                </Link>
                <Link to="/Gallery" className="links">
                  Gallery
                </Link>
                <Link to="/Reviews" className="links">
                  Reviews
                </Link>
                <Link to="/Contact" className="links">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;

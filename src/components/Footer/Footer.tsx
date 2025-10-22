import { GiTakeMyMoney } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <div className=" foooterContainer">
      <div className="footerWrapper">
        <NavLink to={""} className="logoWrapper">
          <div className="logo">
            <GiTakeMyMoney fill="#FFF" /> <NavLink to={"/"}>Evenza</NavLink>
          </div>
        </NavLink>
        <div className="icons">
          <FaXTwitter fill="#fff" />
          <FaInstagram fill="#fff" />
          <IoLogoFacebook fill="#fff" />
          <IoLogoLinkedin fill="#fff" />
        </div>
      </div>
      <div className="footerMenu">
        <ul >
            <li>About Us</li>
            <li>Contact</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="footeritem">
            <p>Privacy policy</p>
            <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

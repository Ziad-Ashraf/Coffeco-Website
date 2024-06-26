import './styles/Footer.scss'
import { IoLogoFacebook } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { SiInstagram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
<footer className="bg-body-tertiary text-center">
  <div className="container p-4 pb-0">
    <section className="mb-4">
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1 facebook" href="#!"role="button"><IoLogoFacebook /></a>
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1 twitter" href="#!" role="button"><BsTwitterX /></a>
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1 google" href="#!" role="button"><FcGoogle /></a>
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1 instagram" href="#!" role="button"> <SiInstagram /></a>
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1 linkedin" href="#!" role="button"><FaLinkedinIn /></a>
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1 github" href="#!" role="button" ><FaGithub /></a>
    </section>
  </div>
  <div className="text-center p-3 text">
    © 2020 Copyright: Ziad Ashraf
  </div>
</footer>
      </div>
    );
}

export default Footer;

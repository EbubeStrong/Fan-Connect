import { Link } from "react-router-dom";
import { Button } from "../../components/components/ui/button";
import {vectorImageTwo} from "../images/image"; // Ensure correct import
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer__main_container"
      style={{
        background: "linear-gradient(179.09deg, #00f0ff 0.36%, #26968B 51.22%)"
      }}
    >
      <div
        className="footer__container"
        style={{
          // backgroundImage: `url(${vectorImageTwo})`,
          // backgroundSize: "100% 100%",
          // height: "50vh",
          textAlign: "center",
          position: "relative",
          // backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
          width: "100%",
          paddingTop: "30px",
        }}
      >
        <h2>Thanks for connecting with us</h2>

        <Button asChild>
          <Link
            className="btn text-blue-900 px-6 py-3 rounded-full text-xl font-semibold hover:text-white transition duration-300"
          >
            Login for free
          </Link>
        </Button>

        <h3>FanConnect</h3>

        <div className="social__contact">
          <p>Connect with us on socials</p>

          <div className="social__icons">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809..." />
              </svg>
            </div>
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127..." />
              </svg>
            </div>
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145..." />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

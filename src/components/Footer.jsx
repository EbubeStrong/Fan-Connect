import { Link } from "react-router-dom";
import { Button } from "../../components/components/ui/button";
import { vectorImageTwo } from "../images/image"; // Ensure correct import
// import "../styles/footer.css";

const socialIcons = [
  {
    name: "Twitter",
    path: "M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461...",
  },
  {
    name: "Facebook",
    path: "M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56...",
  },
  {
    name: "LinkedIn",
    path: "M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145...",
  },
];

const Footer = () => {
  return (
    <div
      className="footer__main_container"
      style={{
        background: "linear-gradient(179.09deg, #26968B 51.22%, #00f0ff 0.36%)",
        height: "100%",
      }}
    >
      <div
        className="footer__container"
        style={{
          backgroundImage: `url(${vectorImageTwo})`,
          backgroundSize: "100% 100%",
          // height: "50vh",
          textAlign: "center",
          position: "relative",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          paddingTop: "7rem",
          paddingBottom: "2rem",
          color: "white",
        }}
      >
        <h2
          style={{
            fontFamily: "Roboto",
            fontSize: "44px",
            fontWeight: "700",
            lineHeight: "75px",
            textAlign: "center",
          }}
        >
          Thanks for connecting with us
        </h2>

        <Button asChild>
          <Link
            className="btn  px-6 py-3 rounded-full text-xl font-semibold hover:text-white transition duration-300"
            style={{ backgroundColor: "#00F0FF", color: "black" }}
          >
            Login for free
          </Link>
        </Button>

        <h3
          style={{
            fontFamily: "Roboto",
            fontSize: "34px",
            fontWeight: "700",
            lineHeight: "75px",
            textAlign: "center",
          }}
        >
          Fan{" "}
          <span
            style={{
              fontFamily: "Romanesco",
              fontSize: "34px",
              fontWeight: "400",
              lineHeight: "73.41px",
              textAlign: "center",
            }}
          >
            Connect
          </span>
        </h3>

        <div className="social__contact">
          <p
            style={{
              fontFamily: "Roboto",
              fontSize: "20px",
              fontWeight: "700",
              lineHeight: "37.5px",
              textAlign: "center",
            }}
          >
            Connect with us on socials
          </p>

          <div className="social__icons flex justify-center items-center gap-4 p-4">
            {socialIcons.map((icon, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200 transition duration-300 positon-relative"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor" 
                  className="fill-black w-6 h-6" 
                >
                  <path d={icon.path} />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

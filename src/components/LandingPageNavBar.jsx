import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { Button } from "../../components/components/ui/button";


const LandingPageNavBar = () => {
  return (
    <div className="nav__container backdrop-blur-md bg-white/20 px-7 py-5">
      <div className="nav__contents flex items-center justify-between">
        <div className="logo">
          <h2>
            <span>Fan</span>
            <span>Connect</span>
          </h2>
        </div>

        <div className="nav__links">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>Concerts</li>
            <li>Celebrities</li>
            <li>Connect</li>
          </ul>
        </div>

        <div className="buttons flex gap-4">
          <Button asChild>
            <Link
              to="/choose-account"
              className="btn text-white px-7 py-1  text-xl font-semibold hover:text-white transition duration-300"
              style={{ border: "1px solid #1AD3DE", cursor: "pointer" }}
            >
              Sign up
            </Link>
          </Button>

          <Button asChild>
            <Link
              to="/login"
              className="btn text-black bg-[#00F0FF] px-7 py-1 text-xl font-semibold hover:text-white hover:bg-[#00eeffa4] transition duration-300 cursor-pointer"
            >
              Login
            </Link>
          </Button>
        </div>
      </div>
     
    </div>
  );
};

export default LandingPageNavBar;

import { Link } from "react-router-dom";
// import LandingPage from "src/Pages/LandingPage";

const LandingPageNavBar = () => {
  return (
    <div className="nav__container">
      <div className="nav__contents">
        <div className="logo">
          <h2>
            <span>Fan</span>
            <span>Connect</span>
          </h2>
        </div>

        <div className="nav__links">
          <ul>
            <li>Home</li>
            <li>Concerts</li>
            <li>Celebrities</li>
            <li>Connect</li>
          </ul>
        </div>

        <div className="buttons">
          <Link
            to="/choose-account"
            className="btn text-blue-900 px-6 py-3 rounded-full text-xl font-semibold hover:text-white transition duration-300"
          >
            Sign up
          </Link>
          <Link
            to="/login"
            className="btn text-blue-900 px-6 py-3 rounded-full text-xl font-semibold hover:text-white transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPageNavBar;

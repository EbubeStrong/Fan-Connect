import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/components/ui/button";
import { burnaboy, kolaboy, portable, wizkid } from "../images/image";

const SignUpContents = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/d677/0e08/6b02438dc8603848e735adc43acf0783?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y1YNiWt2C~783IpfzHkyHa0SLMnP2dPeY~i9OKhQiTE5ADmu-yabBjbuTjx5Je6rOejBXibNiaG7Uq4mi4bFQE6QPL0x9KMti5usxMgXVw5Douk2vythvNHVR6uS3Rt4aqNOaclMAfeknEEXy3PsLOUIVMkFnoxUWb4r-WD-48ieivwvvIG42T0ZfWHjc6j5uIkU2Brr4ovyXR8EMamZ~QYUlTnW-z58lNDEqmOJ1dY0K5rerI3YR9O32qKOzzVmQkWzYzuu4tGeUmpXO9euFU~x0ETEAFt42CEiuljZYWMGPHXGEORwai1PgXdk1pfIVfdFOWoEddU3Txm-mfuDOw__",

    title:
      "Experience the thrill of millions of live events, personalized alerts for your favorite artists, teams, and shows, all backed by safe and secure ticketing. Stay in the loop, discover unforgettable moments, and enjoy effortless, worry-free ticketing every time.",
  },

  {
    image:
      "https://s3-alpha-sig.figma.com/img/3809/cc24/660b0cddfa745ab954e34a852e564d02?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k-mT4IQGaPXcorV8HGefWRD4wPVDHmEGqFB3WDMudG6OiZSap7Vlbzoa7od7ctE38UeKuEQJkvcZXngRh0~-i7s-mZUTnnX0T0vDNJh74UAUgkN1NlYZg2dwaBkhGjAktM0hSVy~ar25ez0RARX-zl-yhZscKqKOk79Wm42nzksvndBWOn8--IHH6iilLAjbpRto6hZ-myj1hGV6P~jci1EatUrFQP-EqbhezfcrY~-U6BTORLAeiV5P2ErshMUG9w0r5C~qEJgryOCKV6m7k5n67sS4hvo33pPxQLtxmWarE26BmEqbig~4y3aaNQht246gEHWGadbAETuDztypaw__",

    title:
      "Stay closer to your fans like never before! Share live event updates, exclusive content, and personalized alerts directly with your audience. Connect effortlessly, keep your fans engaged, and make every moment unforgettable—all while ensuring a secure and seamless experience.",
  },
  {
    image: burnaboy,
    title:
      "Experience the thrill of millions of live events, personalized alerts for your favorite artists, teams, and shows, all backed by safe and secure ticketing. Stay in the loop, discover unforgettable moments, and enjoy effortless, worry-free ticketing every time.",
  },
  {
    image: kolaboy,
    title:
      "Stay closer to your fans like never before! Share live event updates, exclusive content, and personalized alerts directly with your audience. Connect effortlessly, keep your fans engaged, and make every moment unforgettable—all while ensuring a secure and seamless experience.",
  },
  {
    image: portable,
    title:
      "Experience the thrill of millions of live events, personalized alerts for your favorite artists, teams, and shows, all backed by safe and secure ticketing. Stay in the loop, discover unforgettable moments, and enjoy effortless, worry-free ticketing every time.",
  },
  {
    image: wizkid,
    title:
      "Stay closer to your fans like never before! Share live event updates, exclusive content, and personalized alerts directly with your audience. Connect effortlessly, keep your fans engaged, and make every moment unforgettable—all while ensuring a secure and seamless experience.",
  },
];

const SignupPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === SignUpContents.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="signup__container pt-20 pb-30 w-full h-screen flex items-start bg-gray-900">
      {/* Image Container */}
      {/* <div className="image__container w-1/2 relative h-screen overflow-hidden">
        {SignUpContents.map((content, index) => (
          <img
            key={index}
            src={content.image}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            alt="Signup Background"
          />
        ))}
      </div> */}

      <div className="image__container w-1/2 h-screen relative overflow-hidden">
        {SignUpContents.map((content, index) => (
          <img
            key={index}
            src={content.image}
            className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            alt="Signup Background"
          />
        ))}
      </div>

      {/* Form Container */}
      <div className="form__container w-1/2 flex flex-col justify-center px-12 text-white">
        <h1 className="text-4xl font-bold transition-opacity duration-1000">
          Connect With Your {currentIndex % 2 === 0 ? "Fans" : "Celebrity"}
        </h1>
        <p className="mt-4 text-lg transition-opacity duration-1000">
          {SignUpContents[currentIndex].title}
        </p>

        <form className="mt-6">
          <h2 className="text-2xl font-semibold">Sign Up</h2>

          <div className="mt-4 text-sm">
            <p>
              Create a Fanconnect account. Already have an account?{" "}
              <Link to="/login" className="text-blue-400 hover:underline">
                Sign in
              </Link>
            </p>
          </div>

          {/* Form Inputs */}
          <div className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 bg-gray-800 text-white rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-gray-800 text-white rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 bg-gray-800 text-white rounded-md"
            />
            <input
              type="text"
              placeholder="Referrer Phone or Promo Code (Optional)"
              className="w-full p-3 bg-gray-800 text-white rounded-md"
            />
            <input
              type="text"
              placeholder="How Did You Hear About Us? (Optional)"
              className="w-full p-3 bg-gray-800 text-white rounded-md"
            />
          </div>

          {/* Terms & Policy */}
          <div className="mt-4 flex items-center space-x-2 text-sm">
            <input type="checkbox" className="w-4 h-4" required />
            <p>
              By continuing, you agree to our{" "}
              <a href="#" className="text-blue-400 hover:underline">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-400 hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          {/* Submit Button */}
          <Button asChild>
            <Link
              to="/sign-in"
              className="block mt-6 bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Sign Up
            </Link>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;

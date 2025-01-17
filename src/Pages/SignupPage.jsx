import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { burnaboy, kolaboy, portable, wizkid } from "../images/image";
import { Button } from "../../components/components/ui/button";
import axios from "axios";

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
  const [loading, setLoading] = useState(false);
  const [backendError, setBackendError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === SignUpContents.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    password: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const newErrors = {
      fullName: !fullName,
      email: !email,
      password: !password,
    };

    setErrors(newErrors);

    if (newErrors.fullName || newErrors.email || newErrors.password) {
      return;
    }

    setLoading(true);

    try {
      const data = {
        fullName,
        email,
        password,
        referrer: e.target.referrer?.value,
        howDidYouHear: e.target.howDidYouHear?.value,
      };

      const response = await axios.post("/api/signup", data);

      if (response.status === 201) {
        e.target.reset(); // Clear form inputs after successful submission
        navigate("/login");
      }
    } catch (error) {
      setBackendError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="signup__container pt-20 pb-30 px-10 w-full flex items-end"
      style={{ backgroundColor: "rgba(157, 216, 240, 0.801)" }}
    >
      <div className="image__container w-1/2 px-7 h-screen relative overflow-hidden">
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

      <div
        className="form__container w-1/2 flex flex-col justify-center px-12 pb-10"
        style={{ color: "#0A2E65" }}
      >
        <h1 className="text-4xl font-bold transition-opacity duration-1000">
          Connect With Your {currentIndex % 2 === 0 ? "Fans" : "Celebrity"}
        </h1>
        <p
          className="mt-4 text-lg transition-opacity duration-1000"
          style={{ fontSize: "16px", fontStyle: "italic" }}
        >
          {SignUpContents[currentIndex].title}
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 px-8 py-8 bg-white"
          style={{ borderRadius: "20px 78px 15px 68px" }}
        >
          <h2 className="text-2xl font-semibold" style={{ color: "#0A2E65" }}>
            Sign Up
          </h2>

          <div className="mt-4 text-sm">
            <p>
              Create a Fanconnect account. Already have an account?{" "}
              <Link to="/login" className="text-blue-400 hover:underline">
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <input
              style={{ border: "1px solid #999999" }}
              type="text"
              placeholder="Full Name"
              className={`w-full p-3 rounded-md ${
                errors.fullName ? "border-red-500" : ""
              }`}
              name="fullName"
              required
            />
            <input
              style={{ border: "1px solid #999999" }}
              type="email"
              placeholder="Email"
              className={`w-full p-3 rounded-md ${
                errors.email ? "border-red-500" : ""
              }`}
              name="email"
              required
            />
            <input
              style={{ border: "1px solid #999999" }}
              type="password"
              placeholder="Password"
              className={`w-full p-3 rounded-md ${
                errors.password ? "border-red-500" : ""
              }`}
              name="password"
              required
            />
            <input
              style={{ border: "1px solid #999999" }}
              type="text"
              placeholder="Referrer Phone or Promo Code (Optional)"
              className="w-full p-3 rounded-md"
              name="referrer"
            />
            <input
              style={{ border: "1px solid #999999" }}
              type="text"
              placeholder="How Did You Hear About Us? (Optional)"
              className="w-full p-3 rounded-md"
              name="howDidYouHear"
            />
          </div>

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

          {backendError && (
            <div className="mt-4 text-red-500 text-sm">{backendError}</div>
          )}

          <div className="flex justify-end">
            <Button asChild disabled={loading}>
              <button
                type="submit"
                className="block mt-6 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 bg-[rgba(4, 107, 241, 0.884)] hover:bg-[rgba(28, 124, 202, 0.651)] mr-0 ml-auto"
                style={{ backgroundColor: "rgba(4, 107, 241, 0.884)" }}
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;

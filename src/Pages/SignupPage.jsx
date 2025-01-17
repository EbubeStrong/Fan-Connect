import { Link } from "react-router-dom";
import { Button } from "../../components/components/ui/button";
import {burnaboy, kolaboy, portable, wizkid} from "../images/image"

const SignupPage = () => {
  // This is for the signUp/In images
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
    },
    {
      image: kolaboy,
    },
    {
      image: portable,
    },
    {
      image: wizkid,
    },
  ];

  return (
    <>
      {SignUpContents.map((content, index) => {
        return (
          <div className="signup__container" key={index}>
            <div className="image__container">
              <img src={content.image} alt="" />
            </div>

            <div className="form__container">
              <h1>Connect With Your Celebrity</h1>

              <p></p>

              <form>
                <h2>Sign Up</h2>

                <div className="fan__signup__text">
                  <h3>Create a Fanconnect account. Already have an account?</h3>

                  <Link
                  to="/login"
                  >Sign in</Link>


                  <div className="form__inputs">
                    <div className="label__input">
                      <label htmlFor="Name">Full Name</label>
                      <input type="text" />
                    </div>

                    <div className="label__input">
                      <label htmlFor="Name">Email</label>
                      <input type="email" />
                    </div>

                    <div className="label__input">
                      <label htmlFor="Name">Password</label>
                      <input type="password" required/>
                    </div>

                    <div className="label__input">
                      <label htmlFor="Name">Referrer Phone or Promo Code (Optional)</label>
                      <input type="text" />
                    </div>

                    <div className="label__input">
                      <label htmlFor="Name">How Did You Hear About Us? (Optional)</label>
                      <input type="text" />
                    </div>
                  </div>

                    <div className="checkbox__policy">
                      <span>
                        <input type="checkbox" required />
                      </span>
                        <p>By continuing past this page, you agree to the <a href="">Terms of Use</a> and understand that <br /> information will be used as described in our <a href="">Privacy Policy.</a></p>
                    </div>

                    <Button asChild>
                                <Link
                                  to="/sign-in"
                                  className="btn text-blue-900 px-6 py-3 rounded-full text-xl font-semibold hover:text-white transition duration-300"
                                >
                                  Sign Up
                                </Link>
                              </Button>
                </div>
              </form>
            </div>
          </div>
        );
      })}
     
    </>
  );
};

export default SignupPage;

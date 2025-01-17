// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/components/ui/button";
import "../styles/landingPage.css";

import LandingPageNavBar from "../components/LandingPageNavBar";
import { laptop } from "../images/image";
import Footer from "../components/Footer";

const numLine = [
  {
    num: 1,
    title: "Create your Profile",
    text: "Log in to your account if you are a frequent user and if you are a first time user sign up to create your account",
  },
  {
    num: 2,
    title: "Select your favourite celebrites",
    text: "Choose the celebrity of your choice.",
  },
  {
    num: 3,
    title: "Connect with your favourite celebrities",
    text: "Start connecting with your favourite celebrities, get latest news about the celbritiy of your choice.",
  },
];

const testimonials = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/3d98/9226/0e375e93a2802698664974f94b08c1f3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UtyYB8EJzZv7z~8RCPWkm5nGIDuNshTShuPI4JOY0D7ayf~vTDNok-gsOeW5Mlx3LWo0LMyoGGYr7Oj8eTs6nBXI3Onf3TSgAI7BbmMLFDqeODLORdusfzNM5Te6bSu7yoiCsq9Ii-QiVXiVIbyb1cphwWjcfjcdwXHZHmv5D8T53cFt6FTWQo4wsJbxmNu9cExbE7sYLqf6ok~wsJ7dLo5iHXI-aNGL-duqoFLKqasd8xFUhy0lcE8oq-dMWFA~SBotDXcwhB9QLDBEpDZroe1zn3-ww2~oJraswQiwwQ2z~RYqMs~8jaR8iNYVN24jlhEQ2U9TBlArY8rV2bGlAw__",
    starCount: 5,
    text: "“I never knew it would be a dream come true. I had always desired to connect with Davido because I am his fan. I love his songs and his composure. Through FanConnect I have been able to connect with him and I was able to chat with him.”",
    name: "-Seyi Adedokun",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/d8e1/3cf0/aa8e52dbee759610c4b6150b7a297826?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K7uVJSVVWFVXvjQlm4ptKWlY3QyD2axXG7oQUIJUVjrjSl2oApE69qBsFFiWw8xsMISH-iTp~CQB5aGXJggKfn0gefkd8hBqyb05rW8wgcqYye5AWUtdpLYJvamTS3UsWkxqNfLqJ~sGAEBRlF06gGaPimkVVtV32HyoL6zYYYkeKClooMOJT6VOy9Jj2jB~a1ceRKeTqLd78qXL2ZZ8ond4IQDtKfA8HpGVWc1Cw1GORRJV77ItlfDLj33sQ0kdZQwMERalSL7cTvssGcYjyaZ3mKH0jAd34Fx~HmwMHRJDXW13CZ6NaS0rb1XHslOCD2CAA6M9LFiJWVj4jVR52Q__",
    starCount: 5,
    text: "“Through FanConnect I was able to connect with Mercy Chinwo my favourite music minister because I am a Christian and whatever I do I must glorify God. She prayed for me through the chats. I was able to keep track of her.” -Amarachi Dike",
    name: "-Amarachi Dike",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/5d49/b6e6/ecc1eed0bb0deec2f6470bf6b3b5437b?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iCvZozNu7U~-TrJnqajb-XI91JaJrHvdE2c86POK2~MAqMfpTjmCvgVAl10cTzRUf~SllG8uCbUhl8Clx3j0ijJTaDq3K66pYPfhuVhmoFQ9Ga8qr5G6x~WUFvwukNoYyclhCOsxvnIVfwgfcdH0rMetjj~jXKK-nB5cRkOCvE56nhZdTkGUI4MQuqQCdGhiByRCA7Fxlf6Qo7f3eLWLUFhe9tgDj3DZ1iIuT4Zi54ODGC7mdJAPeMxNH6ZEhyM6~ShzmhLxjBoQRXjf6~N58LhjoriXIz9DS3rvFjRFWndf7NhbglsfJQH8~I0ooFpZxPLh05iKKjyLwAWlNDtYlg__",
    starCount: 5,
    text: "“FanConnect is a game changer. It has given me the opportunity to connect with the celebrity of my dreams and I haven’t regretted it. It is user-friendly. I didn’t encounter any issues.”",
    name: "-Adeleke Idowu",
  },
];

const LandingPage = () => {
  return (
    <>
      <div className="home__screen hero__one">
        <LandingPageNavBar />

        <div className="hero__one">
          <h1>
            Connect with your <br /> favourite celebrities
          </h1>

          <p>Begin to connect with any celebrity of your choice</p>

          <Button asChild>
            <Link
              to="/choose-account"
              className="btn text-black bg-[#00F0FF] px-6 py-3 rounded-full text-xl font-semibold hover:text-white hover:bg-[#00eeffa4] transition duration-300"
            >
              Get Started
            </Link>
          </Button>
        </div>
      </div>

      <div className="hero__two flex">
        <div className="content__one">
          <h2>
            Celebrities get <br />
            to be monitized
          </h2>

          <p>
            FanConnect is designed to help celebrities monetize their fanbase
            through subscription, <br />
            virtual meet-and-greets, and event tickets.
          </p>

          <Button asChild>
            <Link
              to="/"
              className="btn text-blue-900 px-6 py-3 rounded-full text-xl font-semibold hover:text-white transition duration-300"
            >
              Learn More
            </Link>
          </Button>
        </div>

        <div className="content__two ">
          <img
            className="w-[760px]"
            src="https://s3-alpha-sig.figma.com/img/9a28/ab0a/1b7eceb4027421a185266169c21623a5?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FAVo9miWlRpEa4Du5mTjfyYe0mqD83VcEFNx4VJy6qHfYGdXNAQ~k0jvow9xBrg3S-FIUzc59P4ViDDgEUGt-hrJZhqQWHTt9KT19ZhYHG66uwaASV1tzfRyjxT9DDajqMNCnzQ6SIwGoTJ7dQpn42n67NRtTA2RTwVDBw7vdPbzrMES31j9RSKBcOh4B9ut~Vts8VZpA6YCF-vf5YGVB-kF4OingIj882ar7Dft8hX3VLxKwX-WBFR~Q-JlAi8pyaPaEHHZtaXmVUtLGoaRj5C6ryQC~8fJ2r3JuLB29g~m17NjAhtQsdGS4L6zsETwj6tA2rVud7ppWzYgucJGlA__"
            alt="money"
          />
        </div>
      </div>

      <div className="hero__three">
        <h2>
          Get the latest news of <br />
          your favourite celebrities
        </h2>

        <p>
          You can get the latest news of your favourite celebrities through our
          social media community
        </p>

        <div className="celeb__images__container flex items-center gap-7 px-5">
          <div className="images__content flex items-center gap-6 mb-4">
            <div className="image">
              <img
                className="w-[235px] h-[239px]"
                src="https://s3-alpha-sig.figma.com/img/19f4/699f/c644a381f006255d3a9a52a253467559?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B3fJMi~Mww5I~LTuP1AR0oFcuYOv-U~YWnbgGARYz3GpQnJ2yWQcnM9Ha2c3fSK~TwVGg0b~g3QHtfPpxC6RwMCooi0JgQUq8s09Rlf7kcbpukSGtRHaBWAO67zM8PYT0cYfE7PKgaFnOtck9CL6cspne5fAqUs5ZS-cBAGV-vDN6XAC2i6Q~UCMsc5J7a7Dtrul3uDbxbn0SgfP7DHhTEvzJvtAHn4m9OFLcr9w4m80uUiAL4jhsM5gcjGWbOyQ-xVzQQ-1lVMSy3I0MRH2P2svtLM~FA3CTytkOCq8RmRmFZg7~liOPIpBMGDJrkLEanEtlfa0GzJfA~3HlVrrFg__"
                alt=""
              />
            </div>

            <div className="image flex flex-col gap-4">
              <img
                className="w-[235px] h-[239px]"
                src="https://s3-alpha-sig.figma.com/img/e8c5/7c70/b2a9e6c70db8bf85f3795682a69d6068?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j4KvnSAqWkWxDeyHDzX2jOVE75HkyO62whuQqwd6kxuu1Ab83slIjmtCTkFbvniP4zwEgNueg75KCFVl6CiTbk5Lh35MEvCsCDI8MQBLS2IrVefY-2uvbmd1t~oSA0-aXKJE7upQzhtc2WueUqi8GtiUgTDclWlx0zRPR0HbW0GYP8TbX1apGXDYBrCxCNaVN5iY6-ua-jj9Y1QvnDlGisEWezTWjtz3tse6k4HsCU6HE1HBC0rhqUtsXnQvsNf7N0sTXQ6gClWqWIReCi7e2t358ntPo0gMLxUKFiwCbaZKh7ZEeFv2I545~rzl-vhsoYG2uMj~eSU8e66Gu52F-w__"
                alt=""
              />
              <img
                className="w-[235px] h-[239px]"
                src="https://s3-alpha-sig.figma.com/img/f82a/1b51/c1a8945634163d01625bd3c0372a4c14?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TZkCDxfsBo2Jjfxp2rnYaaNvn64Tt5R6cWgTnAas4ufsofNNXwvQiTeEZtncO2NmFMDFXBaBA8lQfCgyPHQnn2ZhgNDVWE4Gxu6ql7A2rxY0sF7kcmoh0ZGR6x9TCKmwAbgeNScpzoBMPAFsUcNsG6m3WD8pcGkjbtEQkUKpn9U~Gqckg3lHRE8xKuoAN-8VOPwc7Ln-ky48JTFdIOLHJTFgt7-qZxY4M3tx7X-hV-BNBU45~yNDgkh6QxQor27dyH9D0qM9CZDG6E-h8SJU3r06kkrY9VztS1atljjzwZsuJSYKi03IfviClXd5z9rWM3ikVvOpXfGxID4PWJdH0w__"
                alt=""
              />
            </div>
          </div>

          <div className="images__content flex items-center gap-6 mb-4">
            <div className="image">
              <img
                className="w-[235px] h-[239px]"
                src="https://s3-alpha-sig.figma.com/img/abcb/1fb4/a34cf01afb45894c326d4247298dd804?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WJAGeAwL7ER26md6~bATvG13C4rGDeLoU7dHvB-iYOMBkgrBlCjKob5Mk6tY6Xp2E7fQQSiBwG7a53crVJ3jDNe8OWqvXe-cvUesFG5~xwBDq30leJNDFmmpyDLrvhXq-C7ocOWwyGPnufZtqiNO0XXDc2nvg0PJMRLNXIqJhciVpAhnRoHELYshzDSXrdYLiLV6icJkxXad8Ok601LjUw9lTr6LU7CsFSypeVtW6ReY1fUOHLCh5or7n1VpAztnWCD-kSEi-6LVjDuHP8Ai1X5f1C8HXWctigMY7d46SSe2X01~IIdXdcviClOsFxswnZG9hfVuoTQongaWscQ8VA__"
                alt=""
              />
            </div>

            <div className="image flex flex-col gap-4">
              <img
                className="w-[235px] h-[239px]"
                src="https://s3-alpha-sig.figma.com/img/4e47/79d7/42ea0a1249c61d3578a270e3f3708c8c?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gq4DteIJ3HxS~uxS7z4OIbCUnq4-zMeMRKW4hCN9PpQ8dpU0yB1GMvCLcDkR9vy9BtSpjJqGk7i0cor2WbcO3cNSsYnf3TPa7sq9T~wCzUSer-EW1JaKzh~OZpWPcKImgdCWGwRvP3GzkKJHjwrw2hIE47Z-qPo0NZ8z~vd1m4zlgkg3jlCCDz3i~L7O-m0J~Tvqh~APmwr0hwE-7efnJhe-~HdKZlLGmKbbIIc6xCorlDQxkFB~SWayQJnLTzzpCM0-SLsg3LGAkX9rCV6MSr02~Qqqk99EzlccsWPXJYt2sIRHG4LB0RjDF16TT0USKq-LQR3SHre1UpBM1mlBrw__"
                alt=""
              />
              <img
                className="w-[235px] h-[239px]"
                src="https://s3-alpha-sig.figma.com/img/e50d/f4f4/83a0f3374f1d86b335278825f896d067?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V6QXAqtTubv9J6vDumvskTvaSwoS0xGzJdPu7raoQMaRWVCWPmogGALVvjfai6Ssk1pW0m~zOvj1RShugDQmKDZaQUakAaCWZaaLgop1FJtDaPxx69nndf5tHBQMsnZEwQ6L8I-UZJrEKIe161rpfxhv8Y5zlhge8ktsfuT18mBtXY63lG9j43JzvIq5u~NyEz0gLmBM7aazjk7qeoDVgaAX3-wi67IZljaLQNvB52Ks-xxXy8dj5CKvlPKY2DR4NDPTtN45IW0wZqQvx71D5DnQfolPp3i3xOKO-yMKocv6MSjyWSb1iZG5NhiSjS3N2VffE-28Ojr38Xp9y5zL2Q__"
                alt=""
              />
            </div>
          </div>

          <div className="images__content flex gap-6 mb-4">
            <div className="image">
              <img
                className="w-[235px] h-[239px]"
                src="https://s3-alpha-sig.figma.com/img/f2ed/ae0d/08788a512b03b844b736c89cb03f5c02?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XyDhD9KRczDIiKk4O5JmnfkNo6HtR~Pdw9vKLmG0Y5wLCBv1OY1Lve5zElpX9xA4kdK5bQsOJyP2we2-Erz-9l8uTPXS~yEYMBoYBw8Vnwyg09LZ6BaqH0NXUtORhgkA~txI4nddjMbynV3LSi60Dg5bCnWZlcywS1Wp2fzZVFwV~eANo0efUomAo9HFsd27zZa0JCA99lzKrT44dpu2LagCs3US~gEDXGdb5fdMIemFZhTtjfPSKsyosFY3ysJxAm6g8WX41YLFjd8GtK~id~dX6LjeR9MxJXClm0xZc87rGJML7gOL6yuc5Vp3Y9Y7r27r90uVTYnDWo~SJ8T4RQ__"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hero__four">
        <h2>How it works</h2>

        <div className="image__text__content flex gap-9 items-center">
          <div className="image__content">
            <img className="w-[500px]" src={laptop} alt="" />
          </div>

          <div className="text__content pt-10">
            {numLine.map((word, index) => {
              return (
                <div className="num-text flex gap-5 mb-4" key={index}>
                  <div
                    className="num__line flex flex-col
                  justify-center items-center "
                  >
                    <div className="num mb-3">
                      {word.num.toString().padStart(2, "0")}
                    </div>

                    {index !== numLine.length - 1 && (
                      <div className="line bg-red-100 w-[5px] h-[100px]"></div>
                    )}
                  </div>

                  <div className="texts-content">
                    <h2 className="text-title mb-2">{word.title}</h2>
                    <p className="mb-4">{word.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="vector__image__one"></div>
      </div>

      <div className="testimonial__content">
        <h2>Let’s hear from our users</h2>

        <div className="testimonial__image__text__content">
          {testimonials.map((testimonial, index) => {
            return (
              <div key={index} className="testimonial__image__text">
                <div className="image">
                  <img src={testimonial.image} alt="photo" />
                </div>

                {/* Star Rating */}
                <div className="star__rating flex gap-1">
                  {[...Array(5)].map((_, i) =>
                    i < testimonial.starCount ? ( // Render full stars
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="gold"
                        stroke="gold"
                        className="w-5 h-5"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ) : (
                      // Render last empty star for 4-star testimonials
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="gold"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                    )
                  )}
                </div>

                <div className="testimonial__text">
                  <p>{testimonial.text}</p>
                </div>

                <div className="testimonial__name">
                  <h3>{testimonial.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LandingPage;

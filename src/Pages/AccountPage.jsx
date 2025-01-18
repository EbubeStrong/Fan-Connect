import { Link } from "react-router-dom";
import "../styles/accountPage.css"
const AccountPage = () => {
  const accountTabs = [
    {
      title: "Discover & Connect",
      text: "Explore a world of entertainment. Discover new artists, connect with your favourites, build your own music community and stay up-to-date on the latest entertainment news",
      image:
        "https://s3-alpha-sig.figma.com/img/3ab9/c7ca/e9610ae5838e6e34de175b556164f6e8?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VIPTf9DVv01Qmr-MxSgo81ZeI07N5KVU173OC91YF0KhPWs~ZxYSh--DYyOnN25Blc3fftm5YAlpDXJ2WDDTKSZPN~vLJMDgyWaPJj6Kzo3qx1iRWF~k4UFDXt5--1efA0hRtJZ24gxU23b~Bmm7v-8pHauvJzU8dMerRfgS1L8j25wu5v9a-GeniDa7-mUewrTd18WiBsYqiO9Drnei7eOThLEk2-wVSTZsWYlGE2N8skuPYXUhK9m5T3wMTCuLD53R9yf8aZOiRFibydO4JmEDfMQaBQkG6nr4Jr53rj-vjSBbHKCRpGuUtDxYM6T1tMqerQkzKjg2U5qhytAGgg__",
    },
    {
      title: "Showcase Your Talent",
      text: "A platform to showcase your talent. Build a dedicated fanbase, get discovered by industry professionals, and monetize your artistry.",
      image:
        "https://s3-alpha-sig.figma.com/img/5687/af5a/96dc3ce6b093ed5f574f6835ab9aed94?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nfgVwq0kwxzvVXVjc8cm2jFYmV513SGMAGSPSzWULB3bHfFOKf9cEs0z32CYvino7hH6srw2bZpmMpqLNV5WLBzTunpdSpjmsfrRTCjUX11VXo0KsUk81-6shXxml6zNC1g6wJnUpC5Mhp7PypvwC2OFY0G6zcxpaWt-~4dnFje6Z2MpYItv~ntVQUpqO56naGCBH0Jp9WtmfQ~nW8crdMoEF6W~yaQLX4efGeBY1ABEgpM7sBmaYSZJsNNO-fbxAUyVkD~LEuH4EPfhgN-X3WGeVVHNmfJjDg7YN3di-cR36Qq3rJ48yDR6JgV0issOQ8S4-1eIVqWhhXToM~-QFQ__",
    },
    {
      title: "Explore as a Guest",
      text: "Browse the platform and experience the community without creating an account",
      image:
        "https://s3-alpha-sig.figma.com/img/30f8/e33c/54fbbf42603f0248dafe64ac6e4c9948?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ICfVTv0CJs-DG5t15Y2VNmha1kgsg0vzkH8QvbjE-eq7xgWT-VRgdrt~cguTJoaE-QpdZZAMdh5Il7cMUDBdz9kxPRb9SE8sPuEyJn7VHhXo3f9kxfcaff6teCq3dm5NjO6ij6e92i-6~a2dWgfFninmqSmYYHcZnSu6FiTUhA4KwPQtEZeIxBDw1I~bqBkSeuMjvh9AylDjxC3QtOjEvVtfXHuNQs~u4SAv117h6CkaQH~aPP4eunpxlI3aXGQd0mIR~ymdWgHO~AoOYVgrlFHtUmYLYb4CIsAHr05pIK775CcYxYe-v5fs8rj5mnoLcEHyATc4BnrOYt1IS9OsTQ__",
    },
  ];
  const colors = ["red", "#ffebcd", "#98fb98"];

  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        height: "100vh",
        position: "relative",
        backgroundColor: "#BEDAFF",
      }}
    >
      <div
        className="nav__link"
        style={{ position: "absolute", top: "20px", right: "30px" }}
      >
        <nav className="flex gap-1" style={{ color: "#082552" }}>
          Existing User?
          <span className="signIn"
          >
            <Link to="/sign-in">Sign in</Link>
          </span>
        </nav>
      </div>

      <h1
        style={{
          fontFamily: "Roboto",
          fontSize: "51px",
          fontWeight: "700",
          lineHeight: "63.7px",
          letterSpacing: "-2.5px",
          textAlign: "center",
          marginBottom: "30px",
          color: "#082552",
        }}
      >
        Choose an account type
      </h1>

      <div className="account__container">
        <div className="account__content flex gap-7 px-10">
          {accountTabs.map((accountTab, index) => {
            const bgColor = colors[index % colors.length];
            return (
              <div
                key={index}
                className="account__image__text flex flex-col justify-between py-0"
                style={{
                  backgroundColor: bgColor,
                  width: "100%",
                  position: "relative",
                }}
              >
                <div
                  className="text-white"
                  // style={{postion: "absolute", top: "0"}}
                >
                  <h3>{accountTab.title}</h3>
                  <p>{accountTab.text}</p>
                </div>

                <div className="image__button flex justify-between items-end ">
                  <img
                    src={accountTab.image}
                    alt="photo"
                    style={{
                      width: "185px",
                      height: "262px",
                      borderRadius: "10px 0px 0px 0px",
                    }}
                  />

                  <Link to="/Home">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style={{
                        fill: "rgb(0, 0, 0)",
                        "--darkreader-inline-fill": "#e8e6e3",
                      }}
                    >
                      <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;

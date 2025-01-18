import { Button } from "../../components/components/ui/button";

const HomePage = () => {
  return (
    <div>
      <div className="nav__container">
        <div className="nav__contents">
          <div className="logo">
            <h2>
              Fan<span>Connect</span>
            </h2>
          </div>

          <div className="nav__links">
            <ul>
              <li>Search Celebrity</li>
              <li>Find Talent</li>
              <li>Upload Video</li>
              <li>About Us</li>
            </ul>
          </div>

          <div className="notify__profile">
            <div className="bell__image">
              <img src="/path/to/bell-icon.png" alt="Notification Bell" />{" "}
              {/* Added placeholder */}
            </div>

            <div className="name__content">
              <p>Promise Samuel Anita Eesha</p>
            </div>

            <div className="image__profile">
              <img src="/path/to/profile-image.jpg" alt="Profile" />{" "}
              {/* Added placeholder */}
            </div>
          </div>
        </div>
      </div>

      <div className="search__main__container">
        <div className="search__container">
          <div className="search__write__up__container">
            <div className="search__write__up__image">
              <p>Search Your Favourite Celebrities Here</p>
              <span>
                <img src="/path/to/search-icon.png" alt="Search Icon" />{" "}
                {/* Added placeholder */}
              </span>
              <span>
                <img src="/path/to/another-icon.png" alt="Another Icon" />{" "}
                {/* Added placeholder */}
              </span>
            </div>

            <div className="search__image">
              <img src="/path/to/search-image.jpg" alt="Search" />{" "}
              {/* Added placeholder */}
            </div>
          </div>

          <div className="search__boxes__container">
            <div className="search__box">
              <span>{/* {search_icon} */}</span>
              <input type="text" />
            </div>

            <div className="search__box">
              <span>{/* {icon} */}</span>
              <input type="text" />
              <Button asChild>Search</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="recommend__listings__container">
        <div className="recommend__text__button">
          <p className="text">Recommended Celebrities</p>

          {/* Please make use of button element or help me fix the commented buttons instead */}
          {/* <Button asChild>
            Most recent Celebrities <span>
            {/* {icon} 
            </span>
          </Button> */}
        </div>

        <div className="recommend__celeb__container">
          <div className="celebrity__contents">
            <div className="text__profile__image">
              <div className="profile__image">
                <img
                  src="/path/to/celebrity-image.jpg"
                  alt="Celebrity Profile"
                />{" "}
                {/* Added placeholder */}
              </div>

              <div className="text">
                <div className="artist__name">
                  <h2>Artist Name</h2>
                </div>

                <div className="artist__title">
                  <p>Artist Title</p>
                </div>

                <div className="artist__followers">
                  <p>Followers: 1,000</p>
                </div>
              </div>
            </div>

            {/* Please make use of button element or help me fix the commented buttons instead */}
            {/* <div className="connect__request__button">
              <Button asChild>
                <div>Connect</div> 
              </Button>

              <Button asChild>
                <div>Send Request</div>
              </Button>
            </div> */}

            <div className="artist__about">
              <p>About the Artist</p> {/* Add dynamic about information */}
            </div>

            <hr />
          </div>

          <div className="view__more__container">
            <div className="view__more">
              <h3>
                View more about
                {/* {artist name} */}
                <a href="">
                  here... <span>{/* {icons should be here} */}</span>
                </a>
              </h3>
            </div>

            <div className="time__posting">
              <div className="icon">{/* {icon should be here} */}</div>
              <div className="time">
                <h3>Posted 2 day(s) ago {/* Add dynamic time */}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

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
              <img src="" alt="" />
            </div>

            <div className="name__content">
              <p>Promise Samuel Anita Eesha</p>
            </div>

            <div className="image__profile">
              <img src="" alt="" />
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
                <img src="" alt="" />
              </span>
              <span>
                <img src="" alt="" />
              </span>
            </div>

            <div className="search__image">
              <img src="" alt="" />
            </div>
          </div>

          <div className="search__boxes__container">
            <div className="search__box">
              <span>
                {/* {search_icon} */}

              </span>
              <input type="text" />
            </div>

            <div className="search__box">
              <span>
                {/* {icon} */}
                </span>
              <input type="text" />

              <Button asChild>Search</Button>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default HomePage;

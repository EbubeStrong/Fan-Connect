import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/components/ui/button";
import logo from "../images/FanConnect.png";
import { Menu, X } from "lucide-react";

const LandingPageNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="px-4 flex justify-center w-full">
      <div className="nav__container w-full max-w-[960px] backdrop-blur-[13.5px] bg-[#FFFFFF2B] px-4 md:px-[46px] py-[20px] rounded-[30px] h-auto md:h-[80px]">
        <div className="nav__contents flex items-center justify-between">
          <div className="logo">
            <img src={logo} alt="logo" className="w-[100px]" />
          </div>

          {/* Hamburger Menu Button */}
          <button className="md:hidden text-[#00F0FF]" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex gap-9 text-[#00F0FF] font-roboto font-bold text-[16px]">
              <li className="hover:text-[#00eeffa4] cursor-pointer">Home</li>
              <li className="hover:text-[#00eeffa4] cursor-pointer">
                Concerts
              </li>
              <li className="hover:text-[#00eeffa4] cursor-pointer">
                Celebrities
              </li>
              <li className="hover:text-[#00eeffa4] cursor-pointer">Connect</li>
            </ul>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-4">
            <Button asChild>
              <Link
                to="/choose-account"
                className="btn text-[#FFF] rounded-[8px] px-[10px] py-[10px] text-xl w-[109px] h-[38px] font-semibold bg-transparent font-roboto hover:text-white transition duration-300 border border-[#00F0FF]"
              >
                Sign up
              </Link>
            </Button>
            <Button
              asChild
              className="rounded-[8px] text-black bg-[#00F0FF] w-[109px] h-[38px] px-[10px] py-[10px] text-xl font-semibold font-roboto hover:text-white hover:bg-[#00eeffa4] transition duration-300 border border-[#1AD3DE]"
            >
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <ul className="flex flex-col gap-4 text-[#00F0FF] font-roboto font-bold text-[16px]">
              <li className="hover:text-[#00eeffa4] cursor-pointer">Home</li>
              <li className="hover:text-[#00eeffa4] cursor-pointer">
                Concerts
              </li>
              <li className="hover:text-[#00eeffa4] cursor-pointer">
                Celebrities
              </li>
              <li className="hover:text-[#00eeffa4] cursor-pointer">Connect</li>
            </ul>
            <div className="flex flex-col gap-4 mt-4">
              <Button asChild>
                <Link
                  to="/choose-account"
                  className="btn text-[#FFF] rounded-[8px] px-[10px] py-[10px] text-xl w-full h-[38px] font-semibold bg-transparent font-roboto hover:text-white transition duration-300 border border-[#00F0FF]"
                >
                  Sign up
                </Link>
              </Button>
              <Button
                asChild
                className="rounded-[8px] text-black bg-[#00F0FF] w-full h-[38px] px-[10px] py-[10px] text-xl font-semibold font-roboto hover:text-white hover:bg-[#00eeffa4] transition duration-300 border border-[#1AD3DE]"
              >
                <Link to="/login">Login</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPageNavBar;

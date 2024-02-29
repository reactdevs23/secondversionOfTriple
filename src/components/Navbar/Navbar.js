import React, { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { AiOutlineAlignRight } from "react-icons/ai";
import classes from "./Navbar.module.css";

import { Link, NavLink } from "react-router-dom";
import { logo } from "../../images";
import Button from "../common/Button/Button";
import Dropdown from "./Dropdown/Dropdown";
import { useMyContext } from "../../Context/Context";
import clsx from "clsx";

const Navbar = () => {
  const { setIsJoinWaitingListModalActive, setIsWhiteListModalActive } =
    useMyContext();
  const dropDownRef = useRef(null);
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const [sidebar, setSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const services = [
    {
      title: "Service Name",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    },
    {
      title: "Service Name",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    },
    {
      title: "Service Name",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    },
    {
      title: "Service Name",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    },
    {
      title: "Service Name",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    },
    {
      title: "Service Name",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    },
  ];
  return (
    <div
      className={[classes.wrapper, isScrolled && classes.wrapperBg].join(" ")}
    >
      <header className={[classes.header, "container"].join(" ")}>
        <Link
          className={[classes.logoContainer].join(" ")}
          to="/"
          onClick={() => setSidebar((prev) => !prev)}
        >
          {" "}
          <img src={logo} alt="#" className={classes.logo} />
        </Link>

        <div
          className={[classes.navItems, sidebar && classes.sidebar].join(" ")}
        >
          <NavLink
            to="/campaign"
            onClick={() => setSidebar(false)}
            className={({ isActive }) =>
              isActive
                ? clsx(classes.navItem, classes.navActive)
                : classes.navItem
            }
          >
            Campaign
          </NavLink>
          <div ref={dropDownRef} className={classes.dropdownRef}>
            <Dropdown
              label="Service"
              isActive={isDropdownActive}
              setActive={setIsDropdownActive}
              onSelect={(val) => {
                setIsDropdownActive(false);
              }}
              services={services}
              dropdownRef={dropDownRef}
            />
          </div>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? clsx(classes.navItem, classes.navActive)
                : classes.navItem
            }
            to="/newsAndBlog"
            onClick={() => setSidebar(false)}
          >
            News & Blog
          </NavLink>{" "}
          <NavLink
            className={({ isActive }) =>
              isActive
                ? clsx(classes.navItem, classes.navActive)
                : classes.navItem
            }
            to="/help"
            onClick={() => setSidebar(false)}
          >
            Help
          </NavLink>{" "}
          <div className={classes.buttonContainer}>
            <Button
              btnPrimary
              size="md"
              onClick={() => setIsJoinWaitingListModalActive(true)}
              className={classes.mobileButton}
            >
              Join Waiting List
            </Button>{" "}
            <Button
              btnPrimary
              size="md"
              onClick={() => setIsWhiteListModalActive(true)}
              className={classes.mobileButton}
            >
              WhiteList
            </Button>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <Button
            btnPrimary
            size="md"
            onClick={() => setIsJoinWaitingListModalActive(true)}
            className={classes.button}
          >
            Join Waiting List
          </Button>{" "}
          <Button
            btnPrimary
            size="md"
            onClick={() => setIsWhiteListModalActive(true)}
            className={classes.button}
          >
            WhiteList
          </Button>
          {sidebar ? (
            <div className={classes.iconContainer}>
              <IoMdClose
                className={classes.icon}
                onClick={() => setSidebar((prev) => !prev)}
              />
            </div>
          ) : (
            <AiOutlineAlignRight
              className={clsx(classes.icon, classes.hamburger)}
              onClick={() => setSidebar((prev) => !prev)}
            />
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;

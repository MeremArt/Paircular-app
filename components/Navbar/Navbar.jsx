import React, { useState, useRef } from "react";
import Image from "next/image";
import logo from "../../public/pair.svg";
import Hamburger from "../../assest/Hamburger1.svg";
import Close from "../../assest/Close.svg";
import Navmodal from "../NavModal/NavModal";
import "./Navbar.css";
const Navbar = ({ links, fire }) => {
  const [showLinks, setShowLinks] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const linksContainerRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const toggleHandler = () => {
    setToggleMenu((prev) => !prev);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <nav className="Beans_navbody">
      <div className="Beans_nav-center">
        <div className="Beans_nav-header">
          <img src="/pair.svg" className="logo" alt="logo" />
        </div>

        <div className="sign" ref={linksContainerRef} onClick={toggleHandler}>
          <Image
            className="fix-log"
            src={!toggleMenu ? Hamburger : Close}
            alt="Close tab or hamburger"
            width={30} // Adjust width and height as needed
            height={30}
          />
        </div>
        {toggleMenu && <Navmodal setToggleMenu={setToggleMenu} fire={fire} />}
      </div>
    </nav>
  );
};

export default Navbar;

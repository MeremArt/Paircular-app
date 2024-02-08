import React, { useEffect, useState } from "react";
import "./NavModal.css";
import SignUpModal from "../SignUp/SignUpModal";
import SignIn from "../SignIn/SignIn";
export default function Navmodal({ fire, setToggleMenu }) {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
  };
  const openSigInpModal = () => {
    setIsSignInModalOpen(true);
  };
  const closeSignUpModal = () => {
    setIsSignUpModalOpen(false);
  };
  const closeSignInModal = () => {
    setIsSignInModalOpen(false);
  };
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Delaying the visibility to ensure the transition effect works
    const timeoutId = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <main className={`Main_modal ${visible ? "show" : ""}`}>
      <div className="Modal_container">
        <ul className="Modal_list">
          <li>About us</li>
          <li>Join Our Community</li>
          <li>Volunteer</li>
          <li onClick={openSigInpModal}>Sign In</li>
          <SignIn isOpen={isSignInModalOpen} onClose={closeSignInModal} />
          <li onClick={openSignUpModal}>Sign Up</li>
          <SignUpModal isOpen={isSignUpModalOpen} onClose={closeSignUpModal} />
        </ul>
      </div>
    </main>
  );
}

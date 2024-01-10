// SignUpModal.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./SignIn.css";
import CircularProgress from "@mui/material/CircularProgress";

const SignIn = ({ isOpen, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    setIsModalOpen(isOpen);
    if (isOpen) {
      // Delaying the visibility to ensure the transition effect works
      const timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timeoutId);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Show loader
    setIsLoading(true);

    try {
      // Make API request using Axios
      const response = await axios.post(
        "https://paircular-server-vdwt.onrender.com/api/v1/paircular-holmes/signin",
        formData
      );

      // Assuming your API returns a success message
      toast.success(response.data.message);
    } catch (error) {
      // Handle errors
      toast.error("Error signing in. Please try again.");
    } finally {
      // Hide loader and close modal
      setIsLoading(false);
      onClose();
    }
  };

  const handleModalClose = () => {
    onClose();
  };

  return (
    <div
      className={`modal ${isModalOpen ? "open" : ""} ${
        isVisible ? "fade-in" : ""
      }`}
    >
      <div className={`modal-content ${isVisible ? "fade-in" : ""}`}>
        <span className="close" onClick={handleModalClose}>
          &times;
        </span>
        <center>
          <img src="/pair.svg" className="logo" alt="logo" />
        </center>
        <>
          <form className="form_it" onSubmit={handleSubmit}>
            {/* Add your form fields here */}
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="input_form"
              name="email"
              value={formData.email}
              placeholder="Enter your email address..."
              onChange={handleInputChange}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="input_form"
              name="password"
              value={formData.password}
              placeholder="Enter your password.."
              onChange={handleInputChange}
              required
            />
            {/* Add more form fields as needed */}
            <button className="signup_button" type="submit">
              {isLoading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        </>
      </div>
    </div>
  );
};

export default SignIn;

// SignUpModal.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SignUpModal.css";
import { useRouter } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";

const url =
  "https://paircular-server-vdwt.onrender.com/api/v1/paircular-holmes/signup";
const SignUpModal = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profession: "",
    location: "",
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
    if (!formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    // Show loader
    setIsLoading(true);

    try {
      // Make API request using Axios
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        alert("Successfully signed up");
        router.push(`/dashboard`);
      } else {
        console.log(response.statusText);
      }
      // Assuming your API returns a success message
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert("Email address is already in use. Please use a different email.");
      } else {
        alert("An error occurred. Please try again later.");
      }
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
            <label htmlFor="name">Full Name:</label>
            <input
              className="input_form"
              type="text"
              name="name"
              placeholder="Your full name..."
              value={formData.name}
              onChange={handleInputChange}
              required
            />

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

            <label htmlFor="profession">Occupation:</label>
            <input
              className="input_form"
              id="profession"
              name="profession"
              value={formData.profession}
              placeholder="Enter occupation"
              onChange={handleInputChange}
              required
            ></input>

            <label htmlFor="city">City:</label>
            <select
              className="input_form"
              id="city"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a city</option>
              <option value="Abia">Abia</option>
              <option value="Adamawa">Adamawa</option>
              <option value="Akwa Ibom">Akwa Ibom</option>
              <option value="Anambra">Anambra</option>
              <option value="Bauchi">Bauchi</option>
              <option value="Bayelsa">Bayelsa</option>
              <option value="Benue">Benue</option>
              <option value="Borno">Borno</option>
              <option value="Cross River">Cross River</option>
              <option value="Delta">Delta</option>
              <option value="Ebonyi">Ebonyi</option>
              <option value="Edo">Edo</option>
              <option value="Ekiti">Ekiti</option>
              <option value="Enugu">Enugu</option>
              <option value="Gombe">Gombe</option>
              <option value="Imo">Imo</option>
              <option value="Jigawa">Jigawa</option>
              <option value="Kaduna">Kaduna</option>
              <option value="Kano">Kano</option>
              <option value="Katsina">Katsina</option>
              <option value="Kebbi">Kebbi</option>
              <option value="Kogi">Kogi</option>
              <option value="Kwara">Kwara</option>
              <option value="Lagos">Lagos</option>
              <option value="Nasarawa">Nasarawa</option>
              <option value="Niger">Niger</option>
              <option value="Ogun">Ogun</option>
              <option value="Ondo">Ondo</option>
              <option value="Osun">Osun</option>
              <option value="Oyo">Oyo</option>
              <option value="Plateau">Plateau</option>
              <option value="Rivers">Rivers</option>
              <option value="Sokoto">Sokoto</option>
              <option value="Taraba">Taraba</option>
              <option value="Yobe">Yobe</option>
              <option value="Zamfara">Zamfara</option>
            </select>

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="input_form"
              name="password"
              value={formData.password}
              placeholder="Enter your password"
              onChange={handleInputChange}
              autoComplete="current-password"
              required
            />
            {/* Add more form fields as needed */}
            <button className="signup_button" type="submit">
              {isLoading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                "Create account"
              )}
            </button>
          </form>
        </>
      </div>
    </div>
  );
};

export default SignUpModal;

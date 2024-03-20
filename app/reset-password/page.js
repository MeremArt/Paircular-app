"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react"; // Import useEffect
import axios from "axios";
import { useRouter } from "next/router";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const page = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Define handleConfirmPasswordChange function
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  useEffect(() => {
    // Ensure that the code related to useRouter is executed only in client-side context
    if (typeof window !== "undefined") {
      const token = router.query.token;
      if (token) {
        localStorage.setItem("passwordResetToken", token);
      }
      console.log(token);
    }
  }, [router.query.token]); // Add handleConfirmPasswordChange to dependency array

  const handleEmailChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    try {
      const token = localStorage.getItem("passwordResetToken");
      console.log(token);

      const response = await axios.patch(
        `https://paircular-app-git-main-meremart.vercel.app/api/v1/auth/reset-password/${token}`,
        { password: password }
      );

      if (response.status === 200) {
        toast.success("Password changed successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        console.log("success");
      }
    } catch (error) {
      toast.error("Error changing password. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <main>
      <div className="flex items-center justify-center min-h-screen ">
        <div className="bg-wizard w-full px-8 py-6 rounded shadow-md max-w-md">
          <center>
            <svg
              className="mb-4"
              width="50"
              height="53"
              viewBox="0 0 71 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.7037 12.1268L11.1618 46.4033H14.8021V47.3827V64.1711C14.8021 69.4315 17.8824 70.0005 19.4225 69.6274H31.1835C34.4318 70.0751 34.2171 73.8245 33.7037 75.6433L8.78159 82.4986C-0.291175 83.282 -0.599201 69.2077 0.380882 62.0726L4.72125 42.0663C5.72933 35.3509 7.84818 29.848 8.78159 27.936L21.1026 0.934523C26.4791 0.48683 23.3428 9.5153 21.1026 14.0855L15.7822 22.6196C18.6291 19.122 25.415 11.0076 29.7834 6.53067C34.1517 2.05374 34.2171 8.39605 33.7037 12.1268Z"
                fill="#F5F5DC"
              />
              <path
                d="M54.9855 47.3827V66.5495C54.5375 68.5641 52.932 69.4409 52.1853 69.6274H38.8841C34.6278 71.1943 35.5238 74.7572 36.5039 76.3428C40.7043 77.4154 51.4292 80.1202 60.726 82.3586C70.0228 84.5971 70.6668 69.8606 69.8268 62.2125L63.1062 31.9932L49.525 1.91385C46.0527 -2.45115 45.7447 3.73261 46.0247 7.37011L48.5449 14.0855L54.4254 22.6196L40.8443 7.37011C36.0279 1.32626 35.4772 7.83646 35.8039 11.847L46.8648 27.936L57.9257 44.7245C59.7179 46.6272 58.6725 46.9163 57.9257 46.823H54.9855V47.3827Z"
                fill="#F5F5DC"
              />
              <rect
                x="38.4336"
                y="34.8199"
                width="9.88295"
                height="10.432"
                rx="4.94148"
                fill="#F5F5DC"
              />
              <rect
                x="38.4336"
                y="47.9971"
                width="9.88295"
                height="10.432"
                rx="4.94148"
                fill="#F5F5DC"
              />
              <rect
                x="23.0605"
                y="34.8199"
                width="9.88295"
                height="10.432"
                rx="4.94148"
                fill="#F5F5DC"
              />
              <rect
                x="23.0605"
                y="47.9971"
                width="9.88295"
                height="10.432"
                rx="4.94148"
                fill="#F5F5DC"
              />
            </svg>
          </center>

          {/* <h2 className="text-2xl text-white text-center font-medium mb-4">
            Forgot Password ?
          </h2> */}
          <form>
            {" "}
            <div className="mb-6">
              {/* <label
                htmlFor="email"
                className="block text-white text-sm font-bold mb-2"
              >
                Email Address
              </label> */}
              <input
                type="email"
                id="password"
                name="password"
                value={password}
                autocomplete="current-password"
                onChange={handleEmailChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your new password"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Confirm your new password"
              />
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-hover  text-wizard font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Reset password
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
};

export default page;

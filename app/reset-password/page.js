"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Reset = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    // Ensure that the code related to useRouter is executed only in client-side context
    if (typeof window !== "undefined") {
      const token = router.query.token;
      if (token) {
        localStorage.setItem("passwordResetToken", token);
      }
      console.log(token);
    }
  }, [router.query.token]);

  const handleEmailChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
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
      if (!token) {
        throw new Error("Token not found");
      }

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
              {/* SVG path code */}
            </svg>
          </center>

          <form>
            {" "}
            <div className="mb-6">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                autoComplete="current-password"
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
              className="bg-hover text-wizard font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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

export default Reset;

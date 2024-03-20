"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router"; // Import useRouter from 'next/router' instead of 'next/navigation'

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Reset = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Ensure that the code related to useRouter is executed only in client-side context
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const token = searchParams.get("token");
      if (token) {
        setToken(token);
      }
    }
  }, []);

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
      if (!token) {
        throw new Error("Token not found");
      }

      const response = await axios.patch(
        `https://paircular-server-vdwt.onrender.com/api/v1/auth/reset-password/${resetToken}`,
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

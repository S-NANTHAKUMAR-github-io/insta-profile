import React, { useState, useEffect } from "react";
import CustomSnackBar from "../HOC/Snackbar";
import { useLoader } from "../context/LoaderContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [flag, setFlag] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //material ui popup states
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const { startLoading, stopLoading } = useLoader();

  // SignUp Api call
  const submitSignUp = async (e) => {
    e.preventDefault();
    startLoading();
    if (!name || !email || !password) {
      setSnackbar({
        open: true,
        message: "Please Fill all the Fields!",
        severity: "info",
      });
      console.log("fill all details");
      stopLoading();
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        { name, email, password },
        config
      );

      setSnackbar({
        open: true,
        message: "Registration Successful!",
        severity: "success",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      console.log("InsertedData", data);
      stopLoading();
      navigate("/layout");
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Error Occured!",
        severity: "error",
      });
      stopLoading();
    }
  };

  //login
  const submitLogin = async (e) => {
    e.preventDefault();
    startLoading();
    if (!email || !password) {
      setSnackbar({
        open: true,
        message: "Please Fill all the Fields!",
        severity: "info",
      });
      stopLoading();
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        { email, password },
        config
      );
      setSnackbar({
        open: true,
        message: "Login Successful!",
        severity: "success",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      console.log("LoggedInData", data);
      stopLoading();
      navigate("/layout");
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Error Occured!",
        severity: "error",
      });
      stopLoading();
    }
  };

  const login = (e) => {
    e.preventDefault();
    setFlag(false);
  };

  const signup = (e) => {
    e.preventDefault();
    setFlag(true);
  };

  const handleSnackbarClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar((prevSnackbar) => ({ ...prevSnackbar, open: false }));
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) {
      navigate("/layout");
    }
  }, [navigate]);

  return (
    <div className="top-[200px] relative">
      <div className="container max-w-md mx-auto xl:max-w-3xl h-full flex bg-white rounded-lg shadow overflow-hidden">
        <div className="relative hidden xl:block xl:w-1/2 h-full">
          <img
            className="absolute h-auto w-full object-cover  rounded-md"
            src="https://res.cloudinary.com/dlapfxsrz/image/upload/v1712215067/xadg31s0jt3bimtm1apj.png"
            alt="my zomato"
          />
        </div>
        <div className="w-full xl:w-1/2 p-8">
          {/* SignUp */}
          <form style={{ display: flag ? "block" : "none" }}>
            <h1 className="text-2xl font-bold font-poppins">
              Create new account
            </h1>
            <div>
              <span className="text-gray-600 text-sm">
                Already have an account
              </span>
              <button
                className="text-gray-700 text-sm font-semibold"
                onClick={login}
              >
                Sign In
              </button>
            </div>
            <div className="mb-4 mt-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2 font-poppins"
                htmlFor="email"
              >
                User name
              </label>
              <input
                className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4 mt-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2 font-poppins"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="email"
                type="text"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6 mt-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2 font-poppins"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="password"
                type="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex w-full mt-8">
              <button
                className="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10 font-poppins"
                type="button"
                onClick={submitSignUp}
              >
                Sign in
              </button>
            </div>
          </form>

          {/* Login */}
          <form style={{ display: !flag ? "block" : "none" }}>
            <h1 className="text-2xl font-bold font-poppins">
              Sign in to your account
            </h1>
            <div>
              <span className="text-gray-600 text-sm">
                Don't have an account?
              </span>
              <button
                className="text-gray-700 text-sm font-semibold"
                onClick={signup}
              >
                Sign up
              </button>
            </div>
            <div className="mb-4 mt-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2 font-poppins"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="email"
                type="text"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6 mt-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2 font-poppins"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="password"
                type="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex w-full mt-8">
              <button
                className="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10 font-poppins"
                type="button" onClick={submitLogin}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Notification props */}
      <CustomSnackBar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleSnackbarClose}
      />
    </div>
  );
};

export default SignIn;

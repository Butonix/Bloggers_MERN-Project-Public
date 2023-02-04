import React, { useState, useEffect } from "react";
import Input from "../components/Input";
import { signUpAction, signInAction, clearAuthStatus } from "../store/actions/authActions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { HOME } from "../constants/routes";
import MetaData from "../components/MetaData";

const initialState = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  image: "",
};

const DEFAULT_AVATAR =
  "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { success, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      if (
        formData.firstName !== "" &&
        formData.lastName !== "" &&
        formData.username !== "" &&
        formData.email !== "" &&
        formData.password !== "" &&
        formData.confirmPassword !== ""
      ) {
        if (formData.password === formData.confirmPassword) {
          const data = {
            fullName: `${formData.firstName} ${formData.lastName}`,
            username: formData.username,
            email: formData.email,
            password: formData.password,
            image: formData.image === "" ? DEFAULT_AVATAR : formData.image,
          };
          dispatch(signUpAction(data));
          setFormData(initialState);
        }
      }
    } else {
      if (formData.email !== "" && formData.password !== "") {
        const data = {
          enteredPassword: formData.password,
          email: formData.email,
        };
        dispatch(
          signInAction(data, () => {
            navigate(HOME, { replace: true });
          })
        );
      }
    }
  };

  const handleChange = ({ target: { name, value } }) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  useEffect(() => {
    if (success) {
      toast.success("Success!", { theme: "colored" });
      dispatch(clearAuthStatus());
      if (isSignUp) {
        setIsSignUp(false);
      }
    }

    if (error) {
      toast.error(error, { theme: "colored" });
      dispatch(clearAuthStatus());
    }
  }, [success, error, dispatch]);

  return (
    <>
      <MetaData title={isSignUp ? "Sign Up" : "Sign In"} />
      <div className="w-full md:h-[100vh] min-h-screen flex justify-center items-center bg-[#F4F9FF] dark:bg-[#20232A]">
        <div className="border-[15px] md:px-16 px-3 py-3 border-[#E5EDFA] rounded-xl bg-white w-[95%] md:w-2/4 text-center">
          <h1 className="font-semibold text-xl">
            {isSignUp ? "Join the community" : "Sign in to your account"}
          </h1>
          <p className="text-gray-400 mt-3 mb-5">
            Take your art to the next level. Get it seen by millions of people.
          </p>
          <form onSubmit={handleSubmit} className="mt-5 flex flex-col">
            {isSignUp && (
              <div className="flex gap-3 w-full justify-center">
                <Input
                  type="text"
                  placeholder="Enter your first name here"
                  name="firstName"
                  value={formData.firstName}
                  handleChange={handleChange}
                />
                <Input
                  type="text"
                  placeholder="Enter your last name here"
                  name="lastName"
                  value={formData.lastName}
                  handleChange={handleChange}
                />
              </div>
            )}
            {isSignUp && (
              <Input
                type="text"
                placeholder="Enter your username here"
                name="username"
                value={formData.username}
                handleChange={handleChange}
              />
            )}
            <Input
              type="email"
              placeholder="Enter your email here"
              name="email"
              value={formData.email}
              handleChange={handleChange}
            />
            <Input
              type="password"
              placeholder="Enter your password here"
              name="password"
              value={formData.password}
              handleChange={handleChange}
            />
            {isSignUp && (
              <Input
                type="password"
                placeholder="Confirm your password"
                name="confirmPassword"
                value={formData.confirmPassword}
                handleChange={handleChange}
              />
            )}

            <p className="text-sm float-right mb-5" onClick={() => setIsSignUp((prev) => !prev)}>
              {isSignUp ? "Already have an account?" : "Dont' have an account?"}{" "}
              <span className="text-blue-400 cursor-pointer">
                {isSignUp ? "Log in here" : "Register here"}
              </span>
            </p>
            {isSignUp && (
              <Input
                type="text"
                placeholder="Enter your Avatar's URL"
                name="image"
                value={formData.image}
                handleChange={handleChange}
              />
            )}
            <button
              className="bg-[#2D5CD0] text-white p-2 mt-2 mb-3 font-semibold shadow-md rounded hover:bg-blue-700"
              type="submit"
            >
              {isSignUp ? "Create New Account" : "Sign-in to your account"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Auth;

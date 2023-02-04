import React, { useState } from "react";
import Input from "../Input";

const initialState = {
  currentPassword: "",
  newPassword: "",
};

const ResetPassword = ({ handlePasswordReset }) => {
  const [passwords, setPasswords] = useState(initialState);
  const handleChange = ({ target: { name, value } }) =>
    setPasswords((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwords.currentPassword !== "" && passwords.newPassword !== "") {
      handlePasswordReset(passwords);
      setPasswords(initialState);
    }
  };
  return (
    <form
      className="w-full p-3 border-[1px] border-gray-200 flex flex-col items-center dark:border-gray-400"
      onSubmit={handleSubmit}
    >
      <Input
        handleChange={handleChange}
        placeholder="Enter your current password"
        value={passwords.currentPassword}
        type="password"
        name="currentPassword"
      />
      <Input
        handleChange={handleChange}
        placeholder="Choose a new password. Min length is 6 characters."
        value={passwords.newPassword}
        type="password"
        name="newPassword"
      />
      <button
        className="bg-[#2D5CD0] text-white py-2 px-4 mt-2 font-semibold shadow-md rounded hover:bg-blue-700"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default ResetPassword;

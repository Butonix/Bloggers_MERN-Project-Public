import React from "react";
import HashLoader from "react-spinners/HashLoader";

const Spinner = ({ size, color }) => {
  return <HashLoader size={size} color={color} />;
};

export default Spinner;

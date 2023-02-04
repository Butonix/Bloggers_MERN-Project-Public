import React, { useState } from "react";
import SocialImage from "../assets/social.svg";
import SearchBar from "./SearchBar";
import SocialIcon from "./SocialIcon";
import { BiEnvelope } from "react-icons/bi";
import { socialLinks } from "../constants/socialLinks";

const Footer = () => {
  const [newsletter, setNewsletter] = useState("");
  return (
    <div className="bg-[#2D5CD0] dark:bg-[#33373E] p-10 flex text-center md:text-left">
      <div className="hidden md:block select-none">
        <img className="w-[650px]" src={SocialImage} alt="socials" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl text-white">Sign up to our newsletter</h1>
        <p className="text-gray-300 mt-10 mb-5 ">
          Get most interesting information on your favorite topics
        </p>
        <SearchBar
          value={newsletter}
          handleChange={setNewsletter}
          placeholder="Enter your email"
          btnText="Subscribe"
        />
        <h3 className="text-white text-xl mt-10">Follow Us</h3>
        <div className="mt-5 flex items-center">
          {socialLinks.map((item) => (
            <SocialIcon key={item.name} href={item.href} icon={item.icon} />
          ))}
        </div>
        <a className="flex items-center mt-10 text-gray-300" href="mailto:contact@example.com">
          <BiEnvelope className="mr-3 text-2xl" />
          <p>contact@example.com</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;

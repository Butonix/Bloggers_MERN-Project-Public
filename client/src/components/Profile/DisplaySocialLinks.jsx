import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
const initialState = {
  url: "",
  name: "facebook",
};

const DisplaySocialLinks = ({ socials, handleSetSocials, authUser, isActiveUserProfile }) => {
  const [socialUrl, setSocialUrl] = useState(initialState);

  const handleSubmit = () => {
    handleSetSocials(socialUrl);
    setSocialUrl(initialState);
  };

  const handleChange = ({ target: { name, value } }) => {
    setSocialUrl((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="w-full">
      <div className="flex items-center gap-5 justify-center text-white text-xl">
        {socials?.facebook && (
          <a
            href={socials?.facebook}
            className="p-5 bg-[#4267B2] rounded-full"
            target="_blank"
            rel="noopener noreferrer external"
          >
            <FaFacebookF />
          </a>
        )}
        {socials?.twitter && (
          <a
            href={socials?.twitter}
            className="p-5 bg-[#00acee] rounded-full"
            target="_blank"
            rel="noopener noreferrer external"
          >
            <FaTwitter />
          </a>
        )}
        {socials?.linkedin && (
          <a
            href={socials?.linkedin}
            className="p-5 bg-[#0072b1] rounded-full"
            target="_blank"
            rel="noopener noreferrer external"
          >
            <FaLinkedinIn />
          </a>
        )}
      </div>
      {authUser?._id && isActiveUserProfile && (
        <div className="my-5">
          <div className="flex items-center flex-col lg:flex-row">
            <div className="flex items-center border-gray-300 border-2 w-full">
              <select
                name="name"
                value={socialUrl.name}
                onChange={handleChange}
                className="focus:outline-none rounded px-3 py-2 bg-[#FAFAFA]"
              >
                <option value="facebook">Facebook</option>
                <option value="twitter">Twitter</option>
                <option value="linkedin">Linkedin</option>
              </select>
              <input
                name="url"
                value={socialUrl.url}
                onChange={handleChange}
                placeholder="Enter URL or leave empty to unset"
                type="text"
                className="w-full focus:border-gray-400 focus:outline-none rounded px-3 py-2 bg-[#FAFAFA]"
              />
            </div>
            <button
              onClick={handleSubmit}
              type="button"
              className="bg-[#2D5CD0] border-[#2D5CD0] border-2 text-white px-3 py-2 mt-2 lg:mt-0 lg:ml-1 font-semibold rounded hover:bg-blue-700"
            >
              {/* set */}
              {!!socials[socialUrl.name] && socialUrl.url === "" ? "unset" : "set"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplaySocialLinks;

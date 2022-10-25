import React from "react";

const SocialMediaIcons = () => {
  return (
    <>
      <button
        className="bg-white text-blue-700 text-2xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
        type="button"
      >
        <i className="fab fa-facebook"></i>
      </button>
      <button
        className="bg-white text-red-600 text-2xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
        type="button"
      >
        <i className="fab fa-instagram"></i>
      </button>
      <button
        className="bg-white text-blue-500 text-2xl font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
        type="button"
      >
        <i className="fab fa-linkedin"></i>
      </button>
    </>
  );
};

export default SocialMediaIcons;

import React, { useContext } from "react";

import UserDropdown from "../Dropdowns/UserDropdown";
import Image from "next/image";
import { UserProps } from "../../scripts/UIConfigs.types";
import { UserContext } from "../../contexts/userContext";

export default function Navbar() {
  const user: UserProps = useContext(UserContext);

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            {`${
              user?.userType === "consumer" ? "Consumer" : "Enterprise"
            } Dashboard`}
          </a>

          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}

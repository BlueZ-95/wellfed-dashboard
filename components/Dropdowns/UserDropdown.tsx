import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";

const UserDropdown = () => {
  const { signOut } = useContext(UserContext);

  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);

  const openDropdownPopover = () => {
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const logOut = (e) => {
    e.preventDefault();
    closeDropdownPopover();
    signOut();
  };

  return (
    <div className="relative">
      <a
        className="text-blueGray-500 block"
        href="#pablo"
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src="/img/team-1-800x800.jpg"
            />
          </span>
        </div>
      </a>
      <div
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "absolute -right--100 bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Settings
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => logOut(e)}
        >
          Logout
        </a>
      </div>
    </div>
  );
};

export default UserDropdown;

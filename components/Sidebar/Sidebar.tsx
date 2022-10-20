import React from "react";

import UserDropdown from "../Dropdowns/UserDropdown";
import LinkCTA from "../Base/LinkCTA/LinkCTA";
import AgencyLink from "../Base/AgencyLink/AgencyLink";
import SocialMediaIcons from "../Base/SocialMediaIcons/SocialMediaIcons";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  return (
    <div className="mb-20 md:mb-0">
      <nav className="fixed top-0 w-full md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("left-0 bg-white py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link href="/">
            <Image
              src="/img/brand/well-fed-logo.png"
              height="30%"
              width="99%"
              layout="responsive"
              objectFit="fill"
              className="cursor-pointer"
            />
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-screen w-3/4 md:w-full items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Image
                    src="/img/brand/well-fed-logo.png"
                    height="18px"
                    width="50px"
                    layout="responsive"
                    objectFit="contain"
                  />
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Consumer
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link href="/admin/dashboard">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block pl-3 " +
                      (router.pathname.indexOf("/consumer") !== -1
                        ? "text-white bg-wellfedPrimaryBlue rounded"
                        : "text-gray-800 hover:text-gray-700")
                    }
                  >
                    <i
                      className={
                        "fas fa-tv mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/dashboard") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Dashboard
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/settings">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block pl-3 " +
                      (router.pathname.indexOf("/admin/settings") !== -1
                        ? "text-white bg-wellfedPrimaryBlue rounded"
                        : "text-gray-800 hover:text-gray-700")
                    }
                  >
                    <i
                      className={
                        "fas fa-qrcode mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/settings") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    QR (Offline Exam)
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/tables">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block pl-3 " +
                      (router.pathname.indexOf("/admin/tables") !== -1
                        ? "text-white bg-wellfedPrimaryBlue rounded pl-3"
                        : "text-gray-800 hover:text-gray-700")
                    }
                  >
                    <i
                      className={
                        "fas fa-table mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/tables") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Schedule Exam
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/maps">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block pl-3 " +
                      (router.pathname.indexOf("/admin/maps") !== -1
                        ? "text-white bg-wellfedPrimaryBlue rounded"
                        : "text-gray-800 hover:text-gray-700")
                    }
                  >
                    <i
                      className={
                        "fas fa-certificate mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/maps") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Final Certificates
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Contact
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <LinkCTA
                  ctaText="Chat With Us"
                  ctaLink="https://wa.me/18475718540"
                  target="_blank"
                  ctaStyles={{
                    bgColor: "bg-wellfedPrimaryBlue",
                    hoverBgColor: "hover:bg-wellfedPrimaryGreen",
                  }}
                />
              </li>

              <li className="items-center my-4">
                <SocialMediaIcons />
              </li>
            </ul>
            <span className="fixed bottom-0 my-4">
              Developed by <AgencyLink />
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

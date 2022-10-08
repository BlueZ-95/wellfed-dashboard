import React from "react";

export default function FooterAdmin() {
  return (
    <>
      <footer className="block py-4">
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-blueGray-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()} Well Fed Seminars, Inc. |{" "}
                <a
                  href="https://www.thermedia.in"
                  className="text-red-700 hover:text-blueGray-500 text-sm font-semibold py-1"
                >
                  R Media
                </a>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <a
                    href="https://www.creative-tim.com?ref=nnjs-footer-small"
                    className="text-blueGray-500 hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=nnjs-footer-small"
                    className="text-blueGray-500 hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                  >
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a
                    href="http://blog.creative-tim.com?ref=nnjs-footer-small"
                    className="text-blueGray-500 hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

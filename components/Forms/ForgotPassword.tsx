import { getCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { UserAuthentication } from "../../scripts/APIs/UserAuthenticationService";
import { AuthenticatedUserProps } from "../../scripts/UIConfigs.types";

export default function ForgotPassword() {
  const emailFieldRef = useRef(null);

  const [message, setMessage] = useState("");
  const [isApiCalled, setIsApiCalled] = useState(false);

  const initForgotPasswordAPI = () => {
    UserAuthentication.instance
      .forgotPassword(emailFieldRef.current.value)
      .then((data) => {
        setMessage("An email is sent to reset the password");
      })
      .catch((err) => {
        console.error("Something went wrong", err.message);
        setIsApiCalled(false);
        setMessage(err.message);
      });
  };

  return (
    <>
      <main>
        <section className="relative w-full h-full py-40">
          <div className="absolute top-0 w-full h-full bg-no-repeat bg-full"></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <Image
                  src="/img/brand/well-fed-logo.png"
                  width="50%"
                  height="10%"
                  layout="responsive"
                  objectFit="contain"
                />
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0 mt-10">
                  <div className="flex-auto px-4 lg:px-10 py-10">
                    <h2 className="block uppercase text-blueGray-600 text-l font-bold mb-2">
                      Forgot Password?
                    </h2>
                    <p className="mb-4">
                      Enter the email address you used when you joined.
                    </p>
                    <form>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          ref={emailFieldRef}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Enter your email"
                        />
                      </div>

                      <div className="text-center mt-6">
                        <button
                          onClick={initForgotPasswordAPI}
                          className={`${
                            isApiCalled
                              ? "bg-white text-wellfedPrimaryBlue border border-wellfedPrimaryBlue pointer-events-none"
                              : "bg-wellfedPrimaryBlue text-white"
                          }   active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150`}
                          type="button"
                        >
                          {isApiCalled ? (
                            <svg
                              className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                              viewBox="0 0 100 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                              />
                              <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="#0094A3"
                              />
                            </svg>
                          ) : (
                            "Send Email"
                          )}
                        </button>
                      </div>
                      {message && (
                        <div className="error-label">
                          <label className="text-red-700">{message}</label>
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

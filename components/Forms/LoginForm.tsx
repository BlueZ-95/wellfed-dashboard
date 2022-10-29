import Image from "next/image";
import { useContext, useRef, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { APIENDPOINTS } from "../../scripts/APIEndpoints.constants";
import { AuthenticatedUserProps } from "../../scripts/UIConfigs.types";

export default function LoginForm() {
  const { signIn } = useContext(UserContext);

  const emailFieldRef = useRef(null);
  const passwordFieldRef = useRef(null);
  const consumerRadioRef = useRef(null);
  const enterpriseRadioRef = useRef(null);

  const [errorMessage, setErrorMessage] = useState("");

  const initiateLogin = () => {
    console.log(emailFieldRef.current.value);
    console.log(passwordFieldRef.current.value);
    console.log(consumerRadioRef.current.checked);
    console.log(enterpriseRadioRef.current.checked);
    const _isEnterprise = enterpriseRadioRef.current.checked;

    fetch(APIENDPOINTS.AUTHENTICATEUSER, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        identifier: emailFieldRef.current.value,
        password: passwordFieldRef.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          if (data.error.name === "ValidationError") {
            setErrorMessage("Email/Username or Password is wrong");
            return false;
          }
        }

        if (data.user.isEnterprise !== _isEnterprise) {
          setErrorMessage("Invalid user type");
          return false;
        }

        const authenticatedUserdata: AuthenticatedUserProps = {
          token: data.jwt,
          details: {
            userName: data.user.username,
            email: data.user.email,
            userType: data.user.isEnterprise ? "enterprise" : "consumer",
          },
        };

        signIn(authenticatedUserdata);
      })
      .catch((err) => console.error("User not found"));
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
                    <form>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          name="email"
                          ref={emailFieldRef}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Email or Username"
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          ref={passwordFieldRef}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Password"
                        />
                      </div>
                      <div className="flex ">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="radio"
                            name="customerTypeOptions"
                            id="consumerRadio"
                            ref={consumerRadioRef}
                            value="consumer"
                          />
                          <label
                            className="form-check-label inline-block text-gray-800"
                            htmlFor="inlineRadio10"
                          >
                            Consumer
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 ml-3 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="radio"
                            name="customerTypeOptions"
                            id="enterpriseRadio"
                            ref={enterpriseRadioRef}
                            value="enterprise"
                          />
                          <label
                            className="form-check-label inline-block text-gray-800"
                            htmlFor="inlineRadio20"
                          >
                            Enterprise
                          </label>
                        </div>
                      </div>

                      <div className="text-center mt-6">
                        <button
                          onClick={initiateLogin}
                          className="bg-wellfedPrimaryBlue text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                          type="button"
                        >
                          Sign In
                        </button>
                      </div>

                      {errorMessage && (
                        <div className="error-label">
                          <label className="text-red-700">{errorMessage}</label>
                        </div>
                      )}
                    </form>
                  </div>
                </div>

                {/* <div className="flex flex-wrap mt-6 relative">
                  <div className="w-1/2">
                    <a
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      className="text-blueGray-200"
                    >
                      <small>Forgot password?</small>
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

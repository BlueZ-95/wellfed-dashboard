import { useState } from "react";

export default function ButtonWithModal({ showFileUpload, buttonText }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className=" bg-wellfedPrimaryBlue text-white hover:bg-wellfedPrimaryGreen text-xs font-bold uppercase px-4 py-4 md:px-6 md:py-3 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150 mr-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {buttonText}
      </button>

      {showModal ? (
        <>
          <div
            onClick={(e) => {
              if (
                !document
                  .getElementById("modalBox")
                  .contains(e.target as Element)
              ) {
                // Clicked in box
                setShowModal(false);
              }
            }}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div
              id="modalBox"
              className="relative flex w-auto flex-col min-w-0 break-words mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
            >
              <i
                className="absolute top-1 right-6 fa-solid fa-xmark mt-4 mr-4 text-xl cursor-pointer text-blueGray-600"
                onClick={() => {
                  setShowModal(false);
                }}
              ></i>

              <div className="flex px-4 lg:px-10 pt-14 pb-10">
                <form className="w-80">
                  <div className="relative mb-5">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      // ref={passwordFieldRef}
                      className="w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                      placeholder="Name"
                    />
                  </div>
                  <div className="relative mb-5">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      // ref={emailFieldRef}
                      className=" w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>

                  <div className=" justify-around mb-5">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Location
                    </label>
                    <select className="w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150 ">
                      <option value="">Please select a location</option>
                      <option value="dog">California</option>
                      <option value="cat">Texas</option>
                      <option value="hamster">Florida</option>
                      <option value="parrot">Hawaii</option>
                      <option value="spider">Chicago</option>
                      <option value="goldfish">Arizona</option>
                    </select>
                  </div>

                  {showFileUpload ? (
                    <div>
                      <div className="relative mb-5">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          File Upload
                        </label>
                        <input
                          type="file"
                          name="file"
                          // ref={emailFieldRef}
                          className=" w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                          
                        />
                      </div>
                    </div>
                  ) : null}

                  <div className="text-center mt-6">
                    <button
                      onClick={() => {
                        console.log("modal closed ");
                        close();
                      }}
                      className="button bg-wellfedPrimaryBlue text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

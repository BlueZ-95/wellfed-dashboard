import Image from "next/image";
import { useRef, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { ConsumerService } from "../../scripts/APIs/ConsumerService";

export default function Login() {
  // const emailFieldRef = useRef(null);
  // const passwordFieldRef = useRef(null);
  // const consumerRadioRef = useRef(null);
  // const enterpriseRadioRef = useRef(null);

  // function initiateLogin(){
  //   console.log(emailFieldRef.current.value);
  //   console.log(passwordFieldRef.current.value);
  //   console.log(consumerRadioRef.current.checked);
  //   console.log(enterpriseRadioRef.current.checked);
  // }

  const [errorMessage, setErrorMessage] = useState("");

  const courseRef = useRef(null);
  const examDateRef = useRef(null);
  const locationRef = useRef(null);
  const checkBoxRef = useRef(null);

  function scheduleOfflineExam() {
    setErrorMessage("");

    if (
      !courseRef.current.value ||
      !examDateRef.current.value ||
      !locationRef.current.value ||
      !checkBoxRef.current.checked
    ) {
      return setErrorMessage("Please fill all data");
    }

    ConsumerService.instance.scheduleOfflineExam(
      courseRef.current.value,
      examDateRef.current.value,
      locationRef.current.value,
    ).then((data) => {
        console.log("In then");
         
    });
  }

  return (
    <>
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div className="absolute top-0 w-full h-full bg-no-repeat bg-full"></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <h1 className="text-4xl font-semibold text-center mb-10">
                  Schedule Offline Exam
                </h1>
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                  <div className="flex-auto px-4 lg:px-10 py-10">
                    <form>
                      <div className="flex justify-around mb-5">
                        <label className="w-1/3">Course : </label>
                        <select
                          ref={courseRef}
                          className="text-sm border-2 rounded p-1 border-solid  focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
                        >
                          <option value="">Please select a course</option>
                          <option value="dog">Dog</option>
                          <option value="cat">Cat</option>
                          <option value="hamster">Hamster</option>
                          <option value="parrot">Parrot</option>
                          <option value="spider">Spider</option>
                          <option value="goldfish">Goldfish</option>
                        </select>
                      </div>

                      <div className="flex justify-around mb-5 ">
                        <label className="w-1/3 ">Exam Date : </label>

                        <input
                          ref={examDateRef}
                          type="date"
                          className="
                           border
                           focus:outline-none focus:ring w-full ease-linear transition-all duration-150
                           drop-shadow-sm
                             sm:text-sm 
                             rounded
                             text-sm 
                                  p-1
                                    datepicker-input
                                    "
                          placeholder="Select date"
                        />
                      </div>

                      <div className="flex justify-around mb-5">
                        <label className="w-1/3">Location : </label>
                        <select
                          ref={locationRef}
                          className="text-sm border-2 rounded p-1 border-solid  focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
                        >
                          <option value="">Please select a location</option>
                          <option value="dog">Dog</option>
                          <option value="cat">Cat</option>
                          <option value="hamster">Hamster</option>
                          <option value="parrot">Parrot</option>
                          <option value="spider">Spider</option>
                          <option value="goldfish">Goldfish</option>
                        </select>
                      </div>

                      <div className="flex form-check">
                        <input
                          ref={checkBoxRef}
                          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="text-sm form-check-label inline-block text-gray-800 w-full"
                          htmlFor="flexCheckDefault"
                        >
                          I hereby confirm the offline exam date for the
                          enrolled course and agree to bring a print of QR
                          Certificate at the time of exam.
                        </label>
                      </div>

                      <div className="text-center mt-6">
                        <button
                          onClick={scheduleOfflineExam}
                          className="bg-wellfedPrimaryBlue text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                          type="button"
                        >
                          Schedule
                        </button>
                      </div>
                    </form>

                    {errorMessage && (
                      <div className="error-label">
                        <label className="text-red-700">{errorMessage}</label>
                      </div>
                    )}
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

import Image from "next/image";
import React from "react";
import LinkCTA from "../Base/LinkCTA/LinkCTA";

const Card = ({ data }) => {
  return (
    <>
      <div className="w-full lg:w-6/12 xl:w-4/12 px-4 my-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 pb-4 xl:mb-0 shadow-lg">
          <Image
            src="/img/course-fallback-image.png"
            width="100px"
            height="50px"
            layout="responsive"
            objectFit="contain"
          />
          <div className="flex-auto p-4">
            <div className="flex flex-wrap pl-4">
              <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                <h5 className="text-blueGray-700 uppercase text-xl font-bold">
                  {data.Title}
                </h5>
                <span className=" text-blueGray-400">{data.Label}</span>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-items-center group">
            <LinkCTA
              ctaText="View Course"
              ctaLink="https://google.com"
              variant="primary"
              customClasses="mx-auto text-center w-3/5 border border-wellfedPrimaryBlue group-hover:text-white"
              isArrowEnabled={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

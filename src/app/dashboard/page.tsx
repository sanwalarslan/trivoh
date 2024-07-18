import Button from "@/Components/Button/button";
import CardBasic from "@/Components/Cards";
import Meating from "@/Components/Meating";
import MeatingCard from "@/Components/MeatingCard";
import React from "react";
import icon from "../../../public/assest/icon/Icon (1).svg";
import icon2 from "../../../public/assest/icon/Icon (2).svg";
import icon3 from "../../../public/assest/icon/Icon (3).svg";
import left from "../../../public/assest/icon/chevron-left.svg";
import right from "../../../public/assest/icon/chevron-right.svg";

import video from "../../../public/assest/icon/video.svg";
import Image from "next/image";
import Navbar from "@/Components/Navbar";
const Dashboard = () => {
  const contentText =
    "This is a history of all the meetings you have joined. Click on ‘Start’ to easily jump back into the back of a meetings ";

  return (
    <>
      <div>
        <Navbar name={"Dashboard"} />
      </div>
      <div className="bg-[#F8F9FA]">
        <div className="flex flex-col pb-3 w-[95%] m-auto ">
          <section>
            <div className="py-6 mb-1">
              <div className="bg-white  font-[poppins] font-normal text-lg  md:text-xl">
                <div className="flex flex-col py-4 md:flex-row md:justify-between w-[95%] m-auto">
                  <div className="flex lg:items-center items-start flex-col md:gap-y-0 gap-y-2 md:flex-row md:gap-x-2 ">
                    <div>Upcoming Meeting:</div>
                    <div className="opacity-[50%]  ">
                      Qatar Business Discussion | Tuesday, April - 2pm
                    </div>
                  </div>
                  <div className="flex  justify-between md:flex-row gap-x-6 gap-y-4 md:gap-y-0">
                    <button className="flex justify-center items-center text-center flex-row gap-x-2 px-2  text-white bg-[#CFD2D2] ">
                      <div className="flex justify-center items-center text-center">
                        <Image
                          width={20}
                          height={16}
                          className="invert brightness-0"
                          src={video}
                          alt={""}
                        />
                      </div>
                      <div className="text-lg font-[poppins] font-normal">
                        Join Now
                      </div>
                    </button>
                    <div className="flex flex-row justify-center text-center items-center gap-x-1">
                      <div className="hover:bg-[#CFD2D2] p-3 rounded-full flex justify-center text-center items-center">
                        <Image src={left} alt={""} className="" />
                      </div>
                      <div className="hover:bg-[#CFD2D2] p-3 rounded-full flex justify-center text-center items-center">
                        <Image src={right} alt={""} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div>
            <MeatingCard />
          </div>
          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <Meating
                meetingId={10}
                iconSrc={icon}
                meatingname={"Meeting Scheduled"}
              />
            </div>
            <div>
              <Meating
                meetingId={10}
                iconSrc={icon2}
                meatingname={"Meeting Scheduled"}
              />
            </div>
            <div>
              <Meating
                meetingId={10}
                iconSrc={icon3}
                meatingname={"Meeting Scheduled"}
              />
            </div>
            <div>
              <Meating
                meetingId={10}
                iconSrc={icon}
                meatingname={"Meeting Scheduled"}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-6">
            <div>
              <CardBasic content={contentText}>
                <div className="pt-3">
                  <Button name={"Meeting History"} />
                </div>
              </CardBasic>
            </div>
            <div>
              <CardBasic content={contentText}>
                <div className="pt-3">
                  <Button name={"Meeting History"} />
                </div>{" "}
              </CardBasic>
            </div>
            <div>
              <CardBasic content={contentText}>
                <div className="pt-3">
                  <Button name={"Meeting History"} />
                </div>{" "}
              </CardBasic>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

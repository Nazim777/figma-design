"use client";
import { Card } from "@/components/ui/card";
import BaseTemplate from "../../components/BaseTemplate";
import { motion } from "framer-motion";

import {
  Moon,
  Bell,
  MessageSquareText,
  ChevronDown,
  ChevronsRight,
  BadgeCent,
  Home,
  CalendarCheck,
  ShieldHalf,
  CircleSlash,
  ArrowLeft,
  Activity,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import Timer from "@/components/Timer";

const Dashboard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className="bg-[#0B0E14] min-h-screen text-white p-6 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mx-10 mb-6 border-b border-gray-700 pb-4">
        <h1 className="text-xl font-bold">Empower Quest</h1>
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full border-2 border-gray-400 cursor-pointer">
            <Moon className="h-5 w-5 text-gray-400" />
          </div>
          <div className="p-2 rounded-full border-2 border-gray-400 cursor-pointer">
            <MessageSquareText className="h-5 w-5 text-gray-400" />
          </div>
          <div className="p-2 rounded-full border-2 border-gray-400 cursor-pointer">
            <Bell className="h-5 w-5 text-gray-400" />
          </div>
          <div className="  cursor-pointer">
            <Switch className="bg-black border-2 border-white" />
          </div>
        </div>
      </div>

      {/* welcome */}
      <div className="flex justify-start mx-10 my-10">
        <div>
          <h4 className="text-blue-500">Welcome Liam</h4>
          <span>Ready to complete your task?</span>
        </div>
      </div>

      {/* 2 section */}

      <div className="flex flex-row ">
        {/* left section  */}
        <div className="bg-[#1E222A] py-5 px-5 mx-10 basis-2/3">
          <div className="mb flex justify-between ">
            <h6 className="text-gray-500">Your Task</h6>
            <span className="text-gray-500 flex">
              <ChevronDown /> Filter | All tasks <ChevronsRight />
            </span>
          </div>
          <div className="space-y-4 mt-6">
            <BaseTemplate />
          </div>
        </div>

        {/* right section */}
        <div className="basis-1/3 mx-10">
          <div className="space-y-4 ">
            <Card className="bg-[#1E222A] p-4 mb-3 rounded-lg shadow-lg border-none flex flex-col justify-between items-center">
              <div className="flex justify-between w-full mb-3">
                <div className="flex items-center">
                  <div className="p-2 rounded-full border-2 border-gray-400 cursor-pointer bg-yellow-500"></div>
                  <h3 className="text-white ml-2">Child Progress</h3>
                </div>
                <div className="flex items-center">
                  <h4 className="text-gray-500 ml-2">Weekly</h4>
                  <ChevronDown className="text-gray-500" />
                </div>
              </div>

              {/* Progress Bar Section */}
              <div className="w-full mb-4 mt-16">
                <div className="flex justify-between mb-2">
                  <span className="text-white text-[20px]">Task Completed</span>
                  <span className=" text-white text-[30px]">81%</span>
                </div>
                <div className="relative w-full h-2 bg-gray-300 rounded-full">
                  <div
                    className="absolute top-0 left-0 h-full bg-white rounded-full"
                    style={{ width: "81%" }}
                  ></div>
                </div>
              </div>
            </Card>
          </div>

          <div
            className="absolute right-10 z-10 bottom-[-10px] cursor-pointer p-2 rounded-full  bg-[#041A43] hover:bg-[rgba(4, 26, 67, 1)] transition-colors"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <Activity />
          </div>

          {isDrawerOpen && (
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 w-64 h-full bg-[#1E222A] shadow-lg p-5 z-50"
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-600">
                <h2 className="text-lg text-blue-400 font-bold">Quick Nav</h2>
              </div>

              <ul className="text-white space-y-4 absolute bottom-20">
                <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded-md">
                  <Home className="h-5 w-5 text-gray-300" />
                  <span>Home</span>
                </li>
                <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded-md">
                  <Bell className="h-5 w-5 text-gray-300" />
                  <span>Notification</span>
                </li>
                <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded-md">
                  <CalendarCheck className="h-5 w-5 text-gray-300" />
                  <span>All tasks</span>
                </li>
                <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded-md">
                  <ShieldHalf className="h-5 w-5 text-gray-300" />
                  <span>Rank</span>
                </li>
                <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded-md">
                  <CircleSlash className="h-5 w-5 text-gray-300" />
                  <span>Profile</span>
                </li>
              </ul>
              <hr className="border-gray-600 absolute bottom-16 w-[220px] overflow-hidden" />

              <div
                className="text-white flex gap-4 text-lg mb-4 absolute bottom-4"
                onClick={() => setIsDrawerOpen(false)}
              >
                <ArrowLeft className="cursor-pointer" />
                <button>Back</button>
              </div>
            </motion.div>
          )}

          <div className="space-y-4 mb-4 ">
            <Timer />
          </div>

          <div className="space-y-4">
            <Card
              className="relative bg-cover bg-center p-4 mb-3 rounded-lg shadow-2xl border-none flex flex-col justify-between items-center"
              style={{
                backgroundImage: "url('/figma.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex justify-between w-full mb-3">
                <div className="flex items-center">
                  <h3 className="text-white mr-2">Point History</h3>
                </div>
                <div className="flex items-center">
                  <h3 className="text-white mr-2">54</h3>
                  <BadgeCent className="text-yellow-500" />
                </div>
              </div>

              <div className="flex justify-center w-full mb-4 mt-10">
                <h1 className="text-white font-bold leading-none shadow-lg text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Delectus porro ut ratione veniam illum laudantium eius
                  commodi.
                </h1>
              </div>

              <button className="bg-[#2B416B] cursor-pointer text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
                Play Now
              </button>

              <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

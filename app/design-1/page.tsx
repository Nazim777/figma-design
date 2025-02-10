"use client";
import CustomCard from "@/components/CustomCard";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Moon,
  Bell,
  MessageSquareText,
  ChevronDown,
  ChevronsRight,
  FlaskConical,
  Calculator,
  Paintbrush,
  SquarePen,
  ArrowLeft,
  Home,
  CalendarCheck,
  ShieldHalf,
  CircleSlash,
  Activity,
} from "lucide-react";
import { Book, Globe, Dumbbell, Briefcase, Leaf } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import ChildCard from "@/components/ChildCard";

const Dashboard = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClick = (title: string) => {
    setExpandedCard(expandedCard === title ? null : title);
  };

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
          <div className="cursor-pointer">
            <Switch className="bg-black border-2 border-white" />
          </div>
        </div>
      </div>

      <div className="bg-[#1E222A] py-5 px-5 mx-10">
        {/* Intro */}
        <div className="mb flex justify-between ">
          <h6 className="text-gray-500">Your Task</h6>
          <span className="text-gray-500 flex">
            <ChevronDown /> Filter | Move to Dashboard <ChevronsRight />
          </span>
        </div>

        {/* Drawer Toggle Button */}
        <div
          className="absolute right-12 top-96 cursor-pointer p-2 rounded-full bg-[#041A43] hover:bg-[rgba(4, 26, 67, 1)] transition-colors"
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

        {/* Task List */}
        <div className="space-y-4 mt-6">
          {[
            {
              title: "Math Problem",
              description: "Solve algebra problem 1-5",
              icon: <Calculator className="h-4 w-4 " />,
              buttonText: "Details",
              iconColor: "text-yellow-500",
              dateColor: "text-gray-500",
              buttonBg: true,
            },
            {
              title: "Vocabulary Quiz",
              description: "Study and take quiz",
              icon: <Book className="h-4 w-4 text-white" />,
              buttonText: "Details",
              iconColor: "text-yellow-500",
              dateColor: "text-gray-500",
              buttonBg: true,
            },
            {
              title: "Science Lab Report",
              description: "Write a lab project for the experiment",
              icon: <FlaskConical className="h-4 w-4 " />,
              buttonText: "Details",
              iconColor: "text-yellow-500",
              dateColor: "text-gray-500",
              buttonBg: true,
            },
            {
              title: "Programming Challenge",
              description: "Solve coding problems",
              icon: <SquarePen className="h-4 w-4 " />,
              buttonText: "details",
              iconColor: "text-red-500",
              dateColor: "text-red-500",
              buttonBg: true,
            },
            {
              title: "Art Project",
              description: "Create a digital painting",
              icon: <Paintbrush className="h-4 w-4 " />,
              buttonText: "details",
              iconColor: "text-red-500",
              dateColor: "text-red-500",
              buttonBg: true,
            },
            {
              title: "Geography Assignment",
              description: "Research world capitals",
              icon: <Globe className="h-4 w-4 " />,
              buttonText: "Completed",
              iconColor: "text-green-500",
              dateColor: "text-green-500",
              buttonBg: false,
            },
            {
              title: "Physical Exercise",
              description: "Complete a workout session",
              icon: <Dumbbell className="h-4 w-4 text-white" />,
              buttonText: "Completed",
              iconColor: "text-green-500",
              dateColor: "text-green-500",
              buttonBg: false,
            },
            {
              title: "Career Research",
              description: "Explore different job opportunities",
              icon: <Briefcase className="h-4 w-4 " />,
              buttonText: "Completed",
              iconColor: "text-green-500",
              dateColor: "text-green-500",
              buttonBg: false,
            },
            {
              title: "Environmental Study",
              description: "Learn about climate change",
              icon: <Leaf className="h-4 w-4 " />,
              buttonText: "Completed",
              iconColor: "text-green-500",
              dateColor: "text-green-500",
              buttonBg: false,
            },
          ].map((task) => (
            <div
              key={task.title}
              onClick={() => handleClick(task.title)}
              className="cursor-pointer"
            >
              <CustomCard
                backgroundColor="bg-[#0B0E14]"
                title={task.title}
                description={task.description}
                dueDate="10/14/2023 | 12:00 PM"
                coinValue="3"
                icon={task.icon}
                buttonText={task.buttonText}
                iconColor={task.iconColor}
                dateColor={task.dateColor}
                buttonBg={task.buttonBg}
              />
              {expandedCard === task.title && (
                <ChildCard title={task.title} isBorder={false} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

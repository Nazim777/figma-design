"use client";
import { useState } from "react";
import { FlaskConical, Calculator, Paintbrush, SquarePen } from "lucide-react";
import { Book, Dumbbell, Briefcase, Leaf } from "lucide-react";
import ChildCard from "@/components/ChildCard";
import CustomCard from "./CustomCardDiff";

const Dashboard = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const handleClick = (title: string) => {
    setExpandedCard(expandedCard === title ? null : title);
  };

  return (
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
            <ChildCard title={task.title} isBorder={true} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;

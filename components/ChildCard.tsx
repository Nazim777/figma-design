import React from "react";
import { Card } from "./ui/card";
import { SquarePen } from "lucide-react";
import { Button } from "./ui/button";

interface CardProps {
  title: string;
  isBorder: boolean;
}

const ChildCard = ({ title, isBorder }: CardProps) => {
  return (
    <Card
      className={`bg-[#0B0E14] p-5 rounded-lg shadow-lg ${
        isBorder ? "" : "border-none"
      } cursor-pointer`}
    >
      <div className="relative flex flex-col items-start p-4 mb-3">
        <div className="absolute top-6 left-0 p-2 rounded-full border-2 border-gray-400 cursor-pointer bg-white">
          <SquarePen className="h-4 w-4 text-gray-500" />
        </div>
        <ul className="text-sm text-gray-400 list-disc list-inside text-left ml-8">
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          <p className="text-sm text-gray-300 mb-3">
            Write an essay about the topic of your choice. Include at least
            three paragraphs with references in MLA format.
          </p>
          <li>At least 500 words</li>
          <li>Must include three references</li>
          <li>Use MLA format</li>
        </ul>
      </div>
      <div className="flex justify-center">
        <Button className="bg-blue-600 hover:bg-blue-500 text-white">
          Start the task
        </Button>
      </div>
    </Card>
  );
};

export default ChildCard;

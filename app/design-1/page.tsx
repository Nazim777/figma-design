import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CustomCard from "@/components/CustomCard";

import {
  Moon,
  Bell,
  MessageSquareText,
  ChevronDown,
  ChevronsRight,
  FlaskConical,
  CalendarRange,
  CircleChevronRight,
  SquarePen,
  Calculator,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";

const Dashboard = () => {
  return (
    <div className="bg-[#1E1E1E] min-h-screen text-white p-6 font-sans">
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

      <div className="bg-[#1E293B] py-5 px-5 mx-10">
        {/* // intro */}
        <div className="mb flex justify-between ">
          <h6 className="text-gray-500">Your Task</h6>
          <span className="text-gray-500 flex">
            <ChevronDown /> Filter | Move to Dashboard <ChevronsRight />
          </span>
        </div>

        <div className="space-y-4 mt-6">
          <Card className="bg-[#1E1E1E] p-4 mb-3 rounded-lg shadow-none border-none flex justify-between items-center">
            {/* 1 */}
            <div className="flex gap-3 items-center">
              <div className="p-2 rounded-full border-2 border-gray-400 cursor-pointer bg-white">
                <FlaskConical className="h-4 w-4  bg-white" />
              </div>
              <div>
                <div className="flex gap-2">
                  <h2 className="text-lg font-semibold text-white">
                    Science Lab Report
                  </h2>
                  <CircleChevronRight className="text-yellow-500" />
                </div>
                <p className="text-sm text-white">
                  write a lab report for the experiment
                </p>
              </div>
            </div>

            {/* 2 */}

            <div className="flex gap-3 items-center">
              <div className="p-2 rounded-full border-2 border-gray-400 cursor-pointer bg-yellow-500"></div>
              <div>
                <p className="text-sm text-white">1 coin</p>
              </div>
            </div>

            {/* 3 */}
            <div className="flex gap-3 items-center">
              <CalendarRange className="text-white" />
              <div>
                <p className="text-sm text-white">Due: 10/14/2023 | 12:00 PM</p>
              </div>
            </div>

            {/* 4 */}
            <div className="flex gap-3 items-center">
              <CircleChevronRight className="text-yellow-500" />
            </div>

            {/* 5 */}
            <div className="flex items-center gap-2">
              <Button className="bg-white  text-gray-500 px-4 py-2 text-sm">
                Details
              </Button>
            </div>
          </Card>
        </div>

        {/* Main Assignment */}
        <Card className="bg-[#1E1E1E] p-5 rounded-lg shadow-none border-none">
          <div className="flex justify-start gap-4 items-center mb-3">
            <div className="p-2 rounded-full border-2 border-gray-400 cursor-pointer bg-white">
              <SquarePen className="h-4 w-4 text-gray-500" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white">
                Write an Essay
              </h2>
              <p className="text-sm text-gray-300 mb-3">
                Write an essay about the topic of your choice. Include at least
                three paragraphs with references in MLA format.
              </p>
            </div>
          </div>

          <ul className="text-sm text-gray-400 list-disc list-inside mb-4">
            <li>At least 500 words</li>
            <li>Must include three references</li>
            <li>Use MLA format</li>
          </ul>
          <div className="flex justify-center">
            <Button className="bg-blue-600 hover:bg-blue-500 text-white">
              Start the task
            </Button>
          </div>
        </Card>

        {/* Assignment list */}

        <div className="space-y-4 mt-6">
          <CustomCard
            backgroundColor="bg-[#1E1E1E]"
            title="Math Problem"
            description="solve algebra problem 1-5"
            dueDate="10/14/2023 | 12:00 PM"
            coinValue="3"
            icon={<Calculator h-4 w-4 bg-white />}
            buttonText="Details"
            iconColor="text-yellow-500"
            dateColor="text-gray-500"
            buttonBg={true}
          />
        </div>

        <div className="space-y-4 mt-6">
          <CustomCard
            backgroundColor="bg-[#1E1E1E]"
            title="Vocabulary Quiz"
            description="study and take quiz"
            dueDate="10/14/2023 | 12:00 PM"
            coinValue="2"
            buttonText="Details"
            iconColor="text-yellow-500"
            dateColor="text-gray-500"
            buttonBg={true}
          />
        </div>

        <div className="space-y-4 mt-6">
          <CustomCard
            backgroundColor="bg-[#1E1E1E]"
            title="Science Lab Report"
            description="Write a lab project for the experiment"
            dueDate="10/14/2023 | 12:00 PM"
            coinValue="1"
            icon={<FlaskConical className="h-4 w-4 bg-white" />}
            buttonText="Details"
            iconColor="text-red-500"
            dateColor="text-gray-500"
            buttonBg={true}
          />
        </div>
        <div className="space-y-4 mt-6">
          <CustomCard
            backgroundColor="bg-[#1E1E1E]"
            title="Write an Essay"
            description="Write a 500 word essay"
            dueDate="10/14/2023 | 12:00 PM"
            coinValue="1"
            icon={<SquarePen className="h-4 w-4 bg-white" />}
            buttonText="Details"
            iconColor="text-red-500"
            dateColor="text-red-500"
            buttonBg={true}
          />
        </div>
        <div className="space-y-4 mt-6">
          <CustomCard
            backgroundColor="bg-[#1E1E1E]"
            title="Math Problem"
            description="solve algebra problem 1-5"
            dueDate="10/14/2023 | 12:00 PM"
            coinValue="3"
            icon={<Calculator className="h-4 w-4 bg-white" />}
            buttonText="Details"
            iconColor="text-red-500"
            dateColor="text-red-500"
            buttonBg={true}
          />
        </div>
        <div className="space-y-4 mt-6">
          <CustomCard
            backgroundColor="bg-[#1E1E1E]"
            title="Vocabulary Quiz"
            description="study and take quiz"
            dueDate="10/14/2023 | 12:00 PM"
            coinValue="1"
            buttonText="completed"
          />
        </div>
        <div className="space-y-4 mt-6">
          <CustomCard
            backgroundColor="bg-[#1E1E1E]"
            title="Vocabulary Quiz"
            description="Write a lab report for the experiment"
            dueDate="10/14/2023 | 12:00 PM"
            coinValue="1"
            icon={<FlaskConical className="h-4 w-4 bg-white" />}
            buttonText="completed"
          />
        </div>
        <div className="space-y-4 mt-6">
          <CustomCard
            backgroundColor="bg-[#1E1E1E]"
            title="Science Lab Report"
            description="Write a lab report for the experiment"
            dueDate="10/14/2023 | 12:00 PM"
            coinValue="1"
            icon={<FlaskConical className="h-4 w-4 bg-white" />}
            buttonText="completed"
          />
        </div>
        <div className="space-y-4 mt-6">
          <CustomCard
            backgroundColor="bg-[#1E1E1E]"
            title="Science Lab Report"
            description="Write a lab report for the experiment"
            dueDate="10/14/2023 | 12:00 PM"
            coinValue="1"
            icon={<FlaskConical className="h-4 w-4 bg-white" />}
            buttonText="completed"
          />
        </div>
        <div className="space-y-4 mt-6">
          <CustomCard
            backgroundColor="bg-[#1E1E1E]"
            title="Science Lab Report"
            description="Write a lab report for the experiment"
            dueDate="10/14/2023 | 12:00 PM"
            coinValue="1"
            icon={<FlaskConical className="h-4 w-4 bg-white" />}
            buttonText="completed"
          />
        </div>
        <div className="space-y-4 mt-6">
          <CustomCard
            backgroundColor="bg-[#1E1E1E]"
            title="Science Lab Report"
            description="Write a lab report for the experiment"
            dueDate="10/14/2023 | 12:00 PM"
            coinValue="1"
            icon={<FlaskConical className="h-4 w-4 bg-white" />}
            buttonText="completed"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

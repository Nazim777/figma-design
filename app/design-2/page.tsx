import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CustomCardDiff from "@/components/CustomCardDiff";

import {
  Moon,
  Bell,
  MessageSquareText,
  ChevronDown,
  ChevronsRight,
  FlaskConical,
  SquarePen,
  Calculator,
  BadgeCent,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";

const Dashboard = () => {
  return (
    <div className="bg-[#1E1E1E] min-h-screen text-white p-6 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mx-10 mb-6 border-b border-gray-700 pb-4">
        <div className="flex items-center gap-4">
          <div className="cursor-pointer">
            <Switch className="bg-black border-2 border-white" />
          </div>
          <div className="p-2 rounded-full border-2 border-gray-400 cursor-pointer">
            <Bell className="h-5 w-5 text-gray-400" />
          </div>
          <div className="p-2 rounded-full border-2 border-gray-400 cursor-pointer">
            <MessageSquareText className="h-5 w-5 text-gray-400" />
          </div>
          <div className="p-2 rounded-full border-2 border-gray-400 cursor-pointer">
            <Moon className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        <h1 className="text-xl font-bold">Empower Quest</h1>
      </div>

      {/* welcome */}
      <div className="flex justify-end mx-10 my-10">
        <div>
          <h4 className="text-blue-500">Welcome Liam</h4>
          <span>Ready to complete your task?</span>
        </div>
      </div>

      {/* 2 section */}

      <div className="flex flex-row ">
        {/* left section */}
        <div className="basis-1/3 mx-10">
          <div className="space-y-4 ">
            <Card className="bg-[#1E293B] p-4 mb-3 rounded-lg shadow-lg border-none flex flex-col justify-between items-center">
              <div className="flex justify-between w-full mb-3">
                <div className="flex items-center">
                  <ChevronDown />
                  <h4 className="text-gray-500 ml-2">Weekly</h4>
                </div>

                <div className="flex items-center">
                  <h3 className="text-white mr-2">Child Progress</h3>
                  <div className="p-2 rounded-full border-2 border-gray-400 cursor-pointer bg-yellow-500"></div>
                </div>
              </div>

              {/* Progress Bar Section */}
              <div className="w-full mb-4 mt-16">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-400">Ask Completed</span>
                  <span className="text-sm text-gray-400">81%</span>
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

          <div className="space-y-4 ">
            <Card className="bg-[#0c0b0b] p-4 mb-3 rounded-lg shadow-2xl border-none flex flex-col justify-between items-center">
              <div className="flex justify-end w-full mb-3">
                <div className="flex items-center">
                  <h3 className="text-white mr-2">Time</h3>
                </div>
              </div>
              <div className="flex justify-center w-full mb-4">
                <h1 className="text-gray-500 font-bold text-[120px] leading-none shadow-lg">
                  11:59:50
                </h1>
              </div>
            </Card>
          </div>





<div className="space-y-4">
  <Card
    className="relative bg-cover bg-center p-4 mb-3 rounded-lg shadow-2xl border-none flex flex-col justify-between items-center"
    style={{
      backgroundImage: "url('/figma.jpg')", // Replace with the actual image path
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
      <h1 className="text-gray-100 font-bold leading-none shadow-lg text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus porro ut ratione veniam illum laudantium eius commodi.
      </h1>
    </div>

    <button className="bg-blue-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
      Play Now
    </button>

    <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
  </Card>
</div>











        </div>

        {/* right section */}

        <div className="bg-[#1E293B] py-5 px-5 mx-10 basis-2/3">
          <div className="mb flex justify-between ">
            <span className="text-gray-500 flex">
              <ChevronDown /> Filter | Move to Dashboard <ChevronsRight />
            </span>
            <h6 className="text-gray-500">Your Task</h6>
          </div>

          <div className="space-y-4 mt-6">
            <Card className="bg-[#1E1E1E] p-4 mb-3 rounded-lg shadow-lg flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Button className="bg-white  text-gray-500 px-4 py-2 text-sm">
                  Details
                </Button>
              </div>

              <div className="flex gap-3 items-center">
                <div>
                  <p className="text-sm text-white">10/14/2023 | 12:00 PM</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div>
                  <p className="text-sm text-white">1 coin</p>
                </div>
                <div className="p-2 rounded-full border-2 border-gray-400 cursor-pointer bg-yellow-500"></div>
              </div>

              <div className="flex gap-3 items-center">
                <div>
                  <div className="flex gap-2">
                    <h2 className="text-lg font-semibold text-white">
                      Science Lab Report
                    </h2>
                  </div>
                  <p className="text-sm text-white">
                    write a lab report for the experiment
                  </p>
                </div>
                <div className="p-2 rounded-full border-2 border-gray-400 cursor-pointer bg-white">
                  <FlaskConical className="h-4 w-4  bg-white" />
                </div>
              </div>
            </Card>
          </div>

          <Card className="bg-[#1E1E1E] p-5 rounded-lg shadow-lg ">
            <div className="flex justify-end gap-4 items-center mb-3">
              <div>
                <h2 className="text-lg font-semibold text-white">
                  Write an Essay
                </h2>
                <p className="text-sm text-gray-300 mb-3">
                  Write an essay about the topic of your choice. Include at
                  least three paragraphs with references in MLA format.
                </p>
              </div>

              <ul className="text-sm text-gray-400 list-disc list-inside mb-4">
                <li>At least 500 words</li>
                <li>Must include three references</li>
                <li>Use MLA format</li>
              </ul>

              <div className="p-2 rounded-full border-2 border-gray-400 cursor-pointer bg-white">
                <SquarePen className="h-4 w-4 text-gray-500" />
              </div>
            </div>

            <div className="flex justify-center">
              <Button className="bg-blue-600 hover:bg-blue-500 text-white">
                Start the task
              </Button>
            </div>
          </Card>

          <div className="space-y-4 mt-6">
            <CustomCardDiff
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
            <CustomCardDiff
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
            <CustomCardDiff
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
            <CustomCardDiff
              backgroundColor="bg-[#1E1E1E]"
              title="Vocabulary Quiz"
              description="study and take quiz"
              dueDate="10/14/2023 | 12:00 PM"
              coinValue="1"
              buttonText="completed"
            />
          </div>
          <div className="space-y-4 mt-6">
            <CustomCardDiff
              backgroundColor="bg-[#1E1E1E]"
              title="Vocabulary Quiz"
              description="Write a lab report for the experiment"
              dueDate="10/14/2023 | 12:00 PM"
              coinValue="1"
              icon={<FlaskConical className="h-4 w-4 bg-white" />}
              buttonText="completed"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import { FC } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CircleChevronRight, CalendarRange } from "lucide-react";

interface CardProps {
  backgroundColor: string;
  title: string;
  description: string;
  dueDate: string;
  coinValue: string;
  icon?: React.ReactNode;
  buttonText: string;
  iconColor?: string;
  dateColor?: string;
  buttonBg?: boolean;
}

const CustomCard: FC<CardProps> = ({
  backgroundColor,
  title,
  description,
  dueDate,
  coinValue,
  icon,
  buttonText,
  iconColor,
  dateColor,
  buttonBg,
}) => {
  return (
    <Card
      className={`p-4 mb-3 rounded-lg shadow-none border-none flex justify-between items-center ${backgroundColor}`}
    >
      <div className="flex gap-3 items-center">
        <div className="p-2 rounded-full border-2 border-gray-400 cursor-pointer bg-white">
          {icon ? (
            icon
          ) : (
            <div className="p-3 rounded-full border-3 border-gray-400 cursor-pointer bg-white"></div>
          )}
        </div>
        <div>
          <div className="flex gap-2">
            <h2 className="text-lg font-semibold text-white">{title}</h2>
            <CircleChevronRight className={`${iconColor}`} />
          </div>
          <p className="text-sm text-white">{description}</p>
        </div>
      </div>

      <div className="flex gap-3 items-center">
        <div className="p-2 rounded-full border-2 border-gray-400 cursor-pointer bg-yellow-500"></div>
        <div>
          <p className="text-sm text-white">{coinValue} coin</p>
        </div>
      </div>

      <div className="flex gap-3 items-center">
        <CalendarRange
          className={`${dateColor ? dateColor : "text-green-500"}`}
        />
        <div>
          <p className={`text-sm ${dateColor ? dateColor : "text-green-500"}`}>
            {buttonBg ? "Due" : "Submitted"}: {dueDate}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          className={`px-4 py-2 text-sm ${
            buttonBg ? "bg-white text-gray-500" : "bg-blue-500 text-white"
          }`}
        >
          {buttonText}
        </Button>
      </div>
    </Card>
  );
};

export default CustomCard;

import { Card } from "@/components/ui/card";

export default function Timer() {
  return (
    <Card
      className="relative p-6 mb-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-none flex flex-col justify-between items-center 
      bg-gradient-to-br from-[#26252C] to-[#040404]"
    >
      <div className="flex justify-start w-full mb-3">
        <h3 className="text-gray-400 text-lg">Timer</h3>
      </div>
      <div className="flex justify-center w-full mb-4">
        <h1 className="text-white font-extrabold text-[100px] leading-none tracking-wider shadow-lg">
          11:59:50
        </h1>
      </div>
    </Card>
  );
}

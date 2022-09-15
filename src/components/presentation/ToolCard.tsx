import { FC } from "react";

interface ToolCardProps {
  text: string;
  logo: string;
}

const ToolCard: FC<ToolCardProps> = ({ text, logo }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-4 rounded border border-gray-600 bg-gray-50 p-2 px-8 shadow-sm">
      <img src={logo} alt={`${text}-logo`} className="w-[64px] rounded " />
      <h4 className="flex-grow text-center text-4xl font-semibold text-gray-900 ">
        {text}
      </h4>
    </div>
  );
};

export default ToolCard;

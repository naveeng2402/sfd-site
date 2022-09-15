import { FC } from "react";

interface ToolCardProps {
  tool: string;
  logo: string;
}

const ToolCard: FC<ToolCardProps> = ({ tool, logo }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-4 rounded border border-gray-600 bg-gray-50 p-2 px-8 shadow-md transition-all hover:scale-[101%]">
      <img src={logo} alt={`${tool}-logo`} className="w-[64px] rounded " />
      <h4 className="flex-grow text-center text-4xl font-semibold text-gray-900 ">
        {tool}
      </h4>
    </div>
  );
};

export default ToolCard;
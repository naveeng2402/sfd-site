import { FC } from "react";

interface ToolCardProps {
  tool: string;
  logo: string;
  link: string;
}

const ToolCard: FC<ToolCardProps> = ({ tool, logo, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="flex flex-row items-center justify-center gap-4 rounded border border-gray-600 bg-gray-50 p-2 px-8 shadow-md transition-all hover:scale-[101%]"
    >
      <img
        src={logo}
        alt={`${tool}-logo`}
        className="aspect-square w-[64px] rounded "
      />
      <h4 className="flex-grow text-center text-4xl font-semibold text-gray-900 ">
        {tool}
      </h4>
    </a>
  );
};

export default ToolCard;

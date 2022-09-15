import { FC } from "react";

interface EventCardProps {
  title: string;
  desc: string;
  regLink: string;
  rulesLink: string;
  poster: string;
}

const EventCard: FC<EventCardProps> = ({
  poster,
  title,
  desc,
  regLink,
  rulesLink,
}) => {
  return (
    <div className="flex w-full flex-col gap-2 rounded border border-slate-400 bg-slate-50 p-4 shadow-md transition-all hover:scale-[101%] hover:shadow-lg">
      <img src={poster} alt={`${title} poster`} className="rounded" />
      <h3 className="text-3xl font-semibold text-gray-800">{title}</h3>
      <p className="flex-grow text-gray-500">{desc}</p>
      <a
        className="w-full rounded border-2 border-blue-600 p-2 text-center font-semibold text-blue-600 transition-all hover:bg-blue-600 hover:text-gray-50"
        href={rulesLink}
        target="_blank"
      >
        View Rules
      </a>
      <a
        className="w-full rounded bg-blue-600 p-2 text-center font-semibold text-gray-50 transition-all hover:bg-blue-500"
        href={regLink}
        target="_blank"
      >
        Register Here
      </a>
    </div>
  );
};

export default EventCard;

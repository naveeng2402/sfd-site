import { FC } from "react";

interface PeopleCardProps {
  name: string;
  desc: string;
  image: string;
}

const PeopleCard: FC<PeopleCardProps> = ({ name, desc, image }) => {
  return (
    <div className="flex  flex-col items-center justify-center gap-2 rounded-md bg-gray-100 p-2 shadow-md">
      <img className="aspect-square w-full rounded" src={image} alt={name} />
      <div className="flex flex-grow flex-col gap-2">
        <h3 className="text-center text-2xl font-semibold text-gray-700">
          {name}
        </h3>
        <p className="flex-grow text-gray-500">{desc}</p>
      </div>
    </div>
  );
};

export default PeopleCard;

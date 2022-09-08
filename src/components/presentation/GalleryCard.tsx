import { FC } from "react";
import { Link } from "react-router-dom";

interface GalleryCardProps {
  year: number;
  cover: string;
}

const GalleryCard: FC<GalleryCardProps> = ({ year, cover }) => {
  return (
    <div className="flex flex-col items-center gap-4 lg:flex-row">
      <img src={cover} alt={`SFD-${year}`} className="rounded lg:max-w-xl" />
      <div className="flex h-full w-full flex-col items-center justify-center gap-2">
        <h2 className="items-center justify-around text-center text-3xl font-semibold">
          Software Freedom Day {year}
        </h2>
        <Link
          to={`/gallery/${year}`}
          className="flex w-full  items-center justify-center  gap-1 rounded border-2 bg-blue-600 stroke-inherit px-6 py-2 text-xl font-semibold text-gray-100 transition-all hover:gap-3 md:w-1/2 lg:w-fit"
        >
          View{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default GalleryCard;

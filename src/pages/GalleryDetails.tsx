import { FC } from "react";
import { useParams } from "react-router-dom";
import galleryData from "../data/galleryData";

const GalleryDetails: FC = () => {
  const params = useParams();
  const year: number = parseInt(params.year as string);
  //   const year: number = 2014;
  const data = galleryData.filter((obj) => obj.year === year)[0];
  return (
    <div className="my-10 flex flex-col gap-8 px-4">
      <h2 className="text-center text-3xl font-bold text-gray-800 lg:text-4xl">
        Software Freedom Day {data.year}
      </h2>
      <div className="mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:px-12 xl:grid-cols-4">
        {data.pictures.map((img, index) => (
          <img
            src={img}
            key={index}
            alt={`sfd-${year}-${index + 1}`}
            className="aspect-[4/3] w-full rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryDetails;

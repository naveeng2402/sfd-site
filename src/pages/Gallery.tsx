import { FC } from "react";
import { GalleryCard } from "../components/presentation";
import galleryData from "../data/galleryData";

const Gallery: FC = () => {
  return (
    <div className="my-10 mx-auto grid max-w-7xl gap-4 px-4">
      {galleryData.map((gal, index) => (
        <GalleryCard key={index} {...gal} />
      ))}
    </div>
  );
};

export default Gallery;

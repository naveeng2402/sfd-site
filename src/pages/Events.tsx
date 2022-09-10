import { FC } from "react";
import { EventCard } from "../components/presentation";
import eventsData from "../data/eventsData";

const Events: FC = () => {
  return (
    <section className="mx-auto my-10 grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
      {eventsData.map((event, index) => (
        <EventCard key={index} {...event} />
      ))}
    </section>
  );
};

export default Events;

import { FC } from "react";
import { ContactCard, EventCoordinatorsCard } from "../components/presentation";
import contactData from "../data/ContactData";
import eventCoordinatorsData from "../data/eventCoordinatorsData.json";

const Contact: FC = () => {
  return (
    <div className="my-10 grid gap-8 px-4">
      <div className=" mx-auto flex flex-col gap-8">
        <h2 className="text-center text-3xl font-bold text-gray-800 lg:text-4xl">
          Event Coordinators
        </h2>
        <div className="grid items-center justify-center gap-4 lg:grid-cols-2">
          {eventCoordinatorsData.map((event, index) => (
            <ContactCard key={index} {...event} />
          ))}
        </div>
      </div>
      <div className=" mx-auto flex max-w-5xl flex-col gap-8">
        <h2 className="text-center text-3xl font-bold text-gray-800 lg:text-4xl">
          Website Contact
        </h2>
        <div className="grid gap-4 lg:grid-cols-3">
          {contactData.map((contact, index) => (
            <ContactCard {...contact} layout={index} key={index} />
          ))}
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15541.7048618923!2d80.03654823857865!3d13.13549374829003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5289b72cf8bb8f%3A0xd5fed379d9b04ecc!2sJaya%20Engineering%20College!5e0!3m2!1sen!2sin!4v1662571205650!5m2!1sen!2sin"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="mx-auto aspect-video max-h-[33vh] w-full rounded lg:px-12"
      ></iframe>
    </div>
  );
};

export default Contact;

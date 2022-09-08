import { FC } from "react";
import { ContactCard } from "../components/presentation";
import contactData from "../data/ContactData";

const Contact: FC = () => {
  return (
    <div className="my-10 grid gap-4 px-4">
      <div className="grid gap-4">
        {contactData.map((contact, index) => (
          <ContactCard {...contact} layout={index} />
        ))}
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15541.7048618923!2d80.03654823857865!3d13.13549374829003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5289b72cf8bb8f%3A0xd5fed379d9b04ecc!2sJaya%20Engineering%20College!5e0!3m2!1sen!2sin!4v1662571205650!5m2!1sen!2sin"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="mx-auto aspect-square w-full max-w-5xl rounded sm:aspect-[16/5]"
      ></iframe>
    </div>
  );
};

export default Contact;
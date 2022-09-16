import { FC } from "react";

interface ContactCardProps {
  title: string;
  name: string[];
  position: string;
  mail: string;
  mobile: string;
  layout: number;
}

const ContactCard: FC<ContactCardProps> = ({
  mail,
  mobile,
  name,
  position,
  title,
  layout,
}) => {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-grow flex-col items-center justify-center gap-2 rounded-md border border-gray-600 bg-gray-100 p-4">
      <h2 className="text-xl font-semibold text-gray-600">{title}</h2>
      {name.map((name, index) => (
        <h3 key={index} className="text-3xl font-bold">
          {name}
        </h3>
      ))}
      <h4 className="text-center text-gray-500">{position}</h4>
      <div className="flex gap-4">
        <a
          href={`mailto:${mail}`}
          className="flex gap-2 rounded border-2 border-blue-600 stroke-inherit px-4 py-2 font-semibold text-blue-600"
        >
          Email
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </a>
        <a
          href={`tel:${mobile}`}
          className="flex gap-2 rounded bg-blue-600 stroke-inherit px-4 py-2 font-semibold text-gray-100 "
        >
          Phone
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ContactCard;

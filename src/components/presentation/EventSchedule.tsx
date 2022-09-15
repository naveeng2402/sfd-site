import { FC } from "react";
import eventSchedule from "../../data/event_schedule.json";

const EventSchedule: FC = () => {
  return (
    <div className="">
      <h2 className="mb-4 text-center text-3xl font-semibold text-gray-800">
        Event Schedule
      </h2>
      <div className="rounded border-2 border-gray-700">
        <table className="min-w-full">
          <thead className="border-b bg-white font-semibold">
            <tr>
              <th
                scope="col"
                className="px-6 py-4 text-left text-sm text-gray-900"
              >
                Event
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left text-sm text-gray-900"
              >
                Timing
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left text-sm text-gray-900"
              >
                Venue
              </th>
            </tr>
          </thead>
          <tbody>
            {eventSchedule.map((event, index) => (
              <tr className="border-b bg-gray-100">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                  {event.event}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                  {event.timing}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                  {event.venue}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-center">
        <span className="font-black text-red-500">*</span> Lunch break is
        between <strong>1:00PM-1:30PM</strong>
      </p>
    </div>
  );
};

export default EventSchedule;

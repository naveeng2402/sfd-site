import React, { FC } from "react";
import activityData from "../data/activityData.json";

const Activity: FC = () => {
  return (
    <div className="my-10 mx-auto flex max-w-xl flex-col gap-6 px-8">
      <h2 className="text-center text-3xl font-bold text-gray-800 lg:text-4xl">
        Our Activities
      </h2>
      <ol className="relative border-l border-gray-500">
        {activityData.map((activity, index) => (
          <li className="mb-10 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ">
              <svg
                aria-hidden="true"
                className="h-3 w-3 text-blue-600 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="font-semibold text-blue-800">{activity.content}</h3>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Activity;

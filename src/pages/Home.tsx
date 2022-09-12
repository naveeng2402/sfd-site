import { FC } from "react";
import { NavLink } from "react-router-dom";
import banner from "../assets/imgs/banner.jpg";
import poster from "../assets/imgs/poster.jpg";
import posterMobile from "../assets/imgs/poster_mobile.jpg";
import { PeopleCard } from "../components/presentation";
import peopleData from "../data/peopleData";
// import tailwindData from "../data/tailwind.json";

const Home: FC = () => {
  const vw = visualViewport?.width as number;
  const vh = visualViewport?.height as number;
  const isMobile = vw <= vh ? true : false;

  return (
    <main className="my-12 flex flex-col gap-8">
      <img src={banner} alt="banner" className="aspect-auto max-h-[25vh]" />
      <section className="my-4 flex flex-col gap-4 md:flex-row md:px-4">
        <div className="flex flex-col gap-4 px-4 md:px-0">
          <h2 className="text-3xl text-gray-800">What We Do ?</h2>
          <div className="flex flex-col px-4 text-gray-600">
            <p>
              Jaya Engineering College Linux User Group (JECLUG) is a student
              governing body. It celebrates Software Freedom Day, a mega event
              in the eye of Free and Open Source Software encompassing 4000
              participants
            </p>
            <p>
              We create awareness and importance of Free and Open Source
              Software among student and industry people.
            </p>
          </div>
          <a
            className="ml-4 w-fit rounded border border-gray-600 px-4 py-2"
            href="http://softwarefreedomday.org/"
            target="_blank"
          >
            Software Freedom Day »
          </a>
        </div>
        <div className="flex flex-col gap-4 px-4 md:px-0">
          <h2 className="text-3xl text-gray-800">Philosophy</h2>
          <div className="flex flex-col px-4 text-gray-600">
            <ul className="list-disc px-4">
              <li>To Run the Program</li>
              <li>To Study and Change the Program in Source Code Form</li>
              <li>To Redistribute Exact Copies</li>
              <li>To Distribute Modified Versions</li>
            </ul>
            <p>
              We create awareness and importance of Free and Open Source
              Software among student and industry people.
            </p>
          </div>
          <div className="flex gap-4 text-blue-600 underline">
            <a
              href="https://www.gnu.org/philosophy/philosophy.html"
              target="_blank"
            >
              GNU
            </a>
            <NavLink to="/contact">Ping Us</NavLink>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 shadow-lg">
        <img
          src={isMobile ? posterMobile : poster}
          alt="poster"
          className="w-full rounded-md"
        />
      </section>
      <section className="grid gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {peopleData.map((people, index) => (
          <PeopleCard key={index} {...people} />
        ))}
      </section>
    </main>
  );
};

export default Home;

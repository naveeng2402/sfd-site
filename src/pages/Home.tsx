import { FC } from "react";
import { NavLink } from "react-router-dom";
import banner from "../assets/imgs/banner.jpg";
import poster from "../assets/imgs/poster.jpeg";
import rms from "../assets/imgs/rms.jpeg";
import gvr from "../assets/imgs/gvr.jpeg";
import linus from "../assets/imgs/linus.jpg";

const Home: FC = () => {
  return (
    <div className="my-12 flex flex-col gap-8">
      <img src={banner} alt="banner" />
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
            Softawre Freedom Day »
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
            <NavLink to="http://softwarefreedomday.org/" target="_blank">
              Ping Us
            </NavLink>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-xl px-4 ">
        <img src={poster} alt="poster" className="w-full" />
      </section>
      <section className="flex flex-col  gap-4 px-4 sm:flex-row">
        <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-gray-100 p-2 shadow-md">
          <img
            className="aspect-square w-full"
            src={rms}
            alt="Richard Stallman"
          />
          <h3 className="text-xl font-semibold text-gray-700">
            Richard Stallman
          </h3>
          <p className="text-gray-500 ">
            These marketing boxes are a great place to put some information.
            These can contain summaries of what the company does, promotional
            information, or anything else that is relevant to the company. These
            will usually be below-the-fold.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-gray-100 p-2 shadow-md">
          <img
            className="aspect-square w-full"
            src={linus}
            alt="Linus Torvalds"
          />
          <h3 className="text-xl font-semibold text-gray-700">
            Linus Torvalds
          </h3>
          <p className="text-gray-500 ">
            The images are set to be circular and responsive. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Donec sed odio dui.
          </p>
        </div>
        <div className="rounded-m flex flex-col items-center justify-center gap-2 bg-gray-100 p-2 shadow-md">
          <img
            className="aspect-square w-full"
            src={gvr}
            alt="Guido Van Rossum"
          />
          <h3 className="text-xl font-semibold text-gray-700">
            Guido Van Rossum
          </h3>
          <p className="text-gray-500 ">
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Donec sed odio dui.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;

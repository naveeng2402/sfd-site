import codeTestRules from "../assets/rules/Code_Test.pdf";
import connectingThoughtsRules from "../assets/rules/Connecting_Thoughts.pdf";
import demoStallRules from "../assets/rules/Demo_stall.pdf";
import techDebateRules from "../assets/rules/debate.pdf";
import instaPostRules from "../assets/rules/INSTA_POST.pdf";
import projectExpoRules from "../assets/rules/Project Expo.pdf";
import shortFilmRules from "../assets/rules/ShortFilm.pdf";
import techQuizRules from "../assets/rules/TechQuiz.pdf";
import websiteCreationRules from "../assets/rules/Website_Creation.pdf";

import codeTestPoster from "../assets/event-posters/code_test.jpg";
import connectingThoughtsPoster from "../assets/event-posters/connecting_thoughts.jpg";
import demoStallPoster from "../assets/event-posters/demo_stall.jpg";
import techDebatePoster from "../assets/event-posters/debate.jpg";
import instaPostPoster from "../assets/event-posters/insta_post.jpg";
import projectExpoPoster from "../assets/event-posters/project_expo.jpg";
import shortFilmPoster from "../assets/event-posters/short_film.jpg";
import techQuizPoster from "../assets/event-posters/quiz.jpg";
import websiteCreationPoster from "../assets/event-posters/website_creation.jpg";

const teamLink = "https://forms.gle/zzKJSxQkScY3LfnLA";
const individualLink = "https://forms.gle/HbggeZiG1Gwv2yLn7";

const eventsData = [
  {
    title: "Code Test",
    desc: "This is hereby informed that the Code Test will be held on 17-09-2022.The participants should register Name, Register Number, Department, Year by scanning the QR code given below before 14-09-2022.The winners will be selected based upon their performance. The final decision will be taken by the Judging Panel. The participants are requested to prepare extremely well for the event.",
    regLink: individualLink,
    rulesLink: codeTestRules,
    poster: codeTestPoster,
  },
  {
    title: "Connecting Thoughts",
    desc: "This is hereby informed that the Connecting Thoughts will be held on 17-09-2022. The participants should register Name, Register Number, Department, Year by scanning the QR code given below before 14-09-2022.The winners will be selected based upon their performance. The final decision will be taken by the Judging Panel. The participants are requested to prepare extremely well for the event.",
    regLink: individualLink,
    rulesLink: connectingThoughtsRules,
    poster: connectingThoughtsPoster,
  },
  {
    title: "Demo Stall",
    desc: "This is hereby informed that the Demo Stall competition will be held on 17-09-2022. The participants should register Name, Register Number, Department, Year by scanning the QR code given below before 14-09-2022. The winners will be selected based upon their performance and creativity. The final decision will be taken by the Judging Panel. The participants are requested to prepare extremely well for the event.",
    regLink: teamLink,
    rulesLink: demoStallRules,
    poster: demoStallPoster,
  },
  {
    title: "Tech Debate",
    desc: "This is hereby informed that the Debate will be held on 17-09-2022. The participants should send their mail along with the details such as the Name, Department, Year ,College of the participants by scanning the QR code on or before 14-09-2022.The winners will be selected based upon their speaking skill. The final decision will be taken by the Judging Panel.",
    regLink: individualLink,
    rulesLink: techDebateRules,
    poster: techDebatePoster,
  },
  {
    title: "Insta Post",
    desc: "This is hereby informed that the INSTA POST competition will be held on 17-09-2022. The participants should register Name, Register Number, Department, Year by scanning the QR code given below before 14-09-2022. The winners will be selected based upon their performance. The final decision will be taken by the Judging Panel. The participants are requested to prepare extremely well for the event.",
    regLink: individualLink,
    rulesLink: instaPostRules,
    poster: instaPostPoster,
  },
  {
    title: "Project Expo",
    desc: "This is hereby informed that the Project Expo will be held on 17-09-2022.The participants should register Name, Register Number, Department, Year by scanning the QR code given below before 12-09-2022. The winners will be selected based upon their performance and Creativity. The final decision will be taken by the Judging Panel. The participants are requested to prepare extremely well for the event.",
    regLink: teamLink,
    rulesLink: projectExpoRules,
    poster: projectExpoPoster,
  },
  {
    title: "Short Film",
    desc: "This is hereby informed that the Short Film will be held on 17-09-2022. The participants should register Name, Register Number, Department, Year by scanning the QR code given below before 14-09-2022. The winners will be selected based upon their performance & creativity. The final decision will be taken by the Judging Panel. The participants are requested to prepare extremely well for the event.",
    regLink: individualLink,
    rulesLink: shortFilmRules,
    poster: shortFilmPoster,
  },
  {
    title: "Tech Quiz",
    desc: "This is hereby informed that the TechQuiz will be held on 17-09-2022. The participants should register Name, Register Number, Department, Year by scanning the QR code given below before 14-09-2022.The winners will be selected based upon their performance. The final decision will be taken by the Judging Panel. The participants are requested to prepare well for the event.",
    regLink: individualLink,
    rulesLink: techQuizRules,
    poster: techQuizPoster,
  },
  {
    title: "Website Creation",
    desc: "This is hereby informed that the Website Creation competition will be held on 17-09-2022. . The participants should register Name, Register Number, Department, Year by scanning the QR code given below before 12-09-2022. The winners will be selected based upon their performance and creativity. The final decision will be taken by the Judging Panel. The participants are requested to prepare extremely well for the event.",
    regLink: individualLink,
    rulesLink: websiteCreationRules,
    poster: websiteCreationPoster,
  },
];

export default eventsData;

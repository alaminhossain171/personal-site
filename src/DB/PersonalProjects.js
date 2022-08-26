import ecommerce from "../assets/projects/ecommerce.png";
import quiz from "../assets/projects/quiz.png"
import Sentence from '../assets/projects/Sentence.png'
import cofee from '../assets/projects/Coffee.png'
import profilefind from '../assets/projects/ProgileFinder.png'
import Resturant from '../assets/projects/Restarunt.png'
const data = [
  {
    id: 0,
    name: "Quiz App",
    img: quiz,
    brief:
      "A Quiz app which takes quiz on basic javascript question. (Ref: Learn with sumit yt)",
    tech: ["HTML", "CSS", "Vanila JS", "Bootstrap"],
    live: "https://alaminhossain171.github.io/JS--Sentence-detector/",
    git: "https://github.com/alaminhossain171/JS--Sentence-detector",
  },
  {
    id: 1,
    name: "Sentence Detector App",
    img:Sentence,
    brief:
      "This is Javascript project. This project can detect your voice and it calculate how many article, vowel, consonant, preparation, interjection, digit, space in a sentence. It also able to support manual input.",
    tech: ["HTML", "CSS", "Vanila JS", "Bootstrap"],
    live: "https://alaminhossain171.github.io/JS--Sentence-detector/",
    git: "https://github.com/alaminhossain171/JS--Sentence-detector",
  },
  {
    id: 2,
    name: 'Git Profile Finder App',
    img: profilefind,

    brief:
      "This Project Created by ReactJs which able to find out git user profile by there userName",
    tech: ["HTML", "CSS", "JSX", "Bootstrap", "API"],
    live: "https://git-profile-finder-app.netlify.app/",
    git: "https://github.com/alaminhossain171/git__profile_finder",
  },
  {
    id: 3,
    img:Resturant,
    name: "Resturant Web Template",
    brief: "Responsive Landing page Resturant",
    tech: ["HTML", "CSS", "Vanila JS", "Bootstrap"],
    live: "https://tastyfoods9.netlify.app/",
    git: "https://github.com/alaminhossain171/TastyFoods-responsive-design",
  },
  {
    id: 4,
    img: cofee,
    name: "Coffee Shop Responsive Design",
    brief:
      "Simple Design project. Basically this site based on a coffee shop webpage. ",
    tech: ["HTML", "CSS", "Vanila JS", "Bootstrap", "Jquery"],
    live: "https://alaminhossain171.github.io/Design-A-coffee-shop/",
    git: "https://github.com/alaminhossain171/Design-A-coffee-shop",
  },
  {
    id: 5,
    img: "https://alamin-cse.netlify.app/img/portfolio/large/project-6/1.png",
    name: "Banking Management System",
    brief:
      "This is a C project. In this project there are two pannel(admin and user). So, admin can manage the whole system. And User have some limitation, they can save money, window money, change password etc. ",
    tech: ["C Programming"],
    live: "",
    git: "https://github.com/alaminhossain171/banking-management-system-using-c",
  },
  {
    id: 6,
    img: ecommerce,
    name: "Ecommerce Cart Operatiom",
    brief:
      "Ecommerce site with filter search product, select product category, product add to cart, cart calculation, form vaildation, React tostify functionality ",
    tech: ["React,Context,Html,React Bootstarp, API"],
    live: "https://onlineshop00.netlify.app/",
    git: "https://github.com/alaminhossain171/E-Commerce-Reactjs",
  },
];
export default data;

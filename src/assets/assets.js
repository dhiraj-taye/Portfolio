import cross_icon from "./cross_icon.png";
import menu_icon from "./menu_icon.svg";
import logo from "./logo.png";

export const assets = {
  menu_icon,
  cross_icon,
  logo,
};

export const projects = [
  {
    title: "HealthHuddle",
    description:
      "Health Huddle is a health and wellness platform that empowers users to manage their health journeys. It offers personalized health assessments, fitness goal tracking, and resources on nutrition and exercise. With a user-friendly interface, Health Huddle encourages healthy habits and informed decision-making, making it a companion for anyone looking to improve their health.",
    imageUrl: "./images/healthhuddle.png", // Replace with actual image path
    technologies: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
    url: "https://health-huddle-two.vercel.app/",
  },
  {
    title: "ShopEase",
    description:
      "ShopEase is a robust e-commerce platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This application provides a seamless shopping experience with features such as product browsing, a shopping cart, and a secure checkout process. It also includes an admin dashboard for managing orders and inventory efficiently.",
    imageUrl: "./images/shopease.png", // Replace with actual image path
    technologies: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
    url: "https://ecommerce2-frontend.vercel.app/", // Replace with actual URL
  },
  {
    title: "Sustainability Tracker",
    description:
      "A platform that helps users track and reduce their carbon footprint through personalized AI recommendations and API integration for real-time data.",
    imageUrl: "./sustainability-tracker.png", // Replace with actual image path
    technologies: ["React", "Node.js", "Express", "MongoDB", "Carbon APIs"],
    url: "https://github.com/dhiraj-taye/Sustainability-Tracker", // Replace with actual URL
  },
  // Add more projects here
];

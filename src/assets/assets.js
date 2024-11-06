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
    imageUrl: "./images/healthhuddle.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
    url: "https://health-huddle-two.vercel.app/",
  },
  {
    title: "ShopEase",
    description:
      "ShopEase is a robust e-commerce platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This application provides a seamless shopping experience with features such as product browsing, a shopping cart, and a secure checkout process. It also includes an admin dashboard for managing orders and inventory efficiently.",
    imageUrl: "./images/shopease.png", 
    technologies: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
    url: "https://ecommerce2-frontend.vercel.app/", 
  },
  {
    title: "Travel Wise",
    description:
      "**TravelWise** is a trip planning app that helps users create itineraries by suggesting tourist spots, restaurants, and hotels based on their destination and travel duration. It uses AI-powered recommendations and integrates Google Maps for accurate location data. Built with React.js, Node.js, and MongoDB, TravelWise offers a modern, user-friendly interface.",
    imageUrl: "./images/travelwise.png", 
    technologies: ["React", "Node.js", "Express", "MongoDB", "Hugging Face API"],
    url: "https://travel-wise-frontend-knq8ppr5b-dhiraj-tayes-projects.vercel.app/", 
  },

];

export const smallProjects = [
  {
    title: "Weather App",
    imageUrl: "./images/weatherapp.png", 
    url: "https://dhiraj-taye.github.io/Weather-App/",
  },
  {
    title: "Library App",
    imageUrl: "./images/libraryapp.png", 
    url: "https://dt-library-app.netlify.app/", 
  },
  {
    title: "YouTube Clone app",
    imageUrl: "./images/ytclone.png", 
    url: "https://youtube-clone-dt.netlify.app/", 
  },

];

import azan from "../../assets/img/azan.jpg";
import commerce from "../../assets/img/commerce.jpg";
import travel from "../../assets/img/travel.jpg";
import dashboard from "../../assets/img/dashboard.jpg";
import services from "../../assets/img/servicies.jpg";
import SefAcadamy from "../../assets/img/Sef-Acadamy.png";

export const tabs = [
  { label: "projects", path: "/tab1", id: "tab1" },
  { label: "2nd Section", path: "/tab2", id: "tab2" },
  { label: "3rd Sectoin", path: "/tab3", id: "tab3" },
];
export const data = [
  {
    id: 1,
    title: "azan timing",
    description: "Design & Development",
    imgUrl: azan,
    repoLink: "https://github.com/Ahmedabuseta/AzanTiming",
    liveLink: "https://ahmedabuseta.github.io/AzanTiming/",
    previewImgSrc: azan,
    features: {
      feature1: {
        title: "",
        explanation: [],
      },
    },
  },
  {
    id: 2,
    title: "e-commerce app js",
    description: "Design & Development",
    imgUrl: commerce,
    repoLink: "https://github.com/Ahmedabuseta/e-commerce",
    liveLink: "https://abuseta-commrce.netlify.app",
    previewImgSrc: commerce,
    features: {
      feature1: {
        title: "",
        explanation: [],
      },
    },
  },
  {
    id: 3,
    title: "react crud ts (in progress) ",
    description: "Design & Development",
    imgUrl: travel,
    repoLink: "https://github.com/Ahmedabuseta/E_Commerce_React_tailwindCss",
    liveLink: "",
    previewImgSrc: dashboard,
    features: {
      feature1: {
        title: "",
        explanation: [],
      },
    },
  },
  {
    id: 9,
    title: "tax site ",
    description: "Design & Development",
    imgUrl: dashboard,
    repoLink: "https://github.com/Ahmedabuseta/taxHub",
    liveLink: "",
    previewImgSrc: services,
    features: {
      feature1: {
        title: "",
        explanation: [],
      },
    },
  },
  {
    id: 5,
    title: "SEF academy e-learning site ",
    description: "Design & Development",
    imgUrl: services,
    repoLink: "https://github.com/Ahmedabuseta/traning",
    liveLink: "https://admirable-maamoul-c8b5c9.netlify.app",
    previewImgSrc: SefAcadamy,
    features: {
      feature1: {
        title: "Admin Features :",
        explanation: [
          "Manage (add ,remove ,edit) courses.",
          "Manage (add ,remove ,edit) job offers.",
          "Manage (add ,remove ,edit) articles.",
          "Manage user accounts (students).",
        ],
      },
      feature2: {
        title: "User (Student) Features :",
        explanation: [
          "Access articles (for all visitors).",
          "Edit profile information.",
          "Login with data from the admin.",
          "Filter courses and job offers by various criteria (e.g., remote/onsite, part/full-time, salary).",
          "Apply for courses and job offers directly on the site.",
          "Create a CV in the dedicated section.",
          "Download the created CV.",
        ],
      },
    },
  },
  {
    id: 4,
    title: "react crud at commerce",
    description: "Design & Development",
    imgUrl: SefAcadamy,
    repoLink: "https://github.com/Ahmedabuseta/React-commrece",
    liveLink: "https://react-commerce-seta.netlify.app",
    previewImgSrc: SefAcadamy,
    features: {
      feature1: {
        title: "",
        explanation: [],
      },
    },
  },
];

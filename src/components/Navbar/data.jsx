import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/grocery",
    text: "grocery",
  },
  {
    id: 3,
    url: "/tictactoe",
    text: "tictactoe",
  },
  {
    id: 4,
    url: "/contact",
    text: "contact",
  },
  {
    id: 5,
    url: "https://www.linkedin.com/in/keshav-sharma95/",
    text: "profile",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.facebook.com/K3ShaV.ShArMa",
    icon: <FontAwesomeIcon icon={faFacebook} />,
  },
  {
    id: 2,
    url: "https://github.com/95keshav",
    icon: <FontAwesomeIcon icon={faGithub} />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com/in/keshav-sharma95/",
    icon: <FontAwesomeIcon icon={faLinkedin} />,
  },
];

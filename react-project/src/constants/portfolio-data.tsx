import travelBlogImage from "@assets/images/porfolioScreens/travel-blog.png";
import oasisImage from "@assets/images/porfolioScreens/oasis.png";
import weatherImage from "@assets/images/porfolioScreens/weather.png";
import rickMortyImage from "@assets/images/porfolioScreens/rick-morty.png";
import contactsImage from "@assets/images/porfolioScreens/contacts.png";
import pulseImage from "@assets/images/porfolioScreens/pulse.png";
import todoImage from "@assets/images/porfolioScreens/todo.png";
import notesImage from "@assets/images/porfolioScreens/notes.png";
import eventsImage from "@assets/images/porfolioScreens/events.png";

export interface PortfolioDataType {
  id: number;
  title: string;
  image: string;
  link: string;
}

export const PORTFOLIO_DATA: PortfolioDataType[] = [
  {
    id: 1,
    title: "Pulse",
    image: pulseImage,
    link: "https://github.com/IbragimovaN/Pulse/blob/main/README.md",
  },
  {
    id: 2,
    title: "Travel Blog",
    image: travelBlogImage,
    link: "https://github.com/IbragimovaN/Travel-Blog/blob/main/README.md",
  },
  {
    id: 3,
    title: "Oasis Store",
    image: oasisImage,
    link: "https://github.com/IbragimovaN/OasisStore/blob/main/README.md",
  },
  {
    id: 4,
    title: "Weather Sounds",
    image: weatherImage,
    link: "https://github.com/IbragimovaN/Weather-sounds/blob/main/README.md",
  },
  {
    id: 5,
    title: "Rick&Morty",
    image: rickMortyImage,
    link: "https://github.com/IbragimovaN/Rick-Morty/blob/main/README.md",
  },
  {
    id: 6,
    title: "Contacts",
    image: contactsImage,
    link: "https://github.com/IbragimovaN/Contacts/blob/main/README.md",
  },
  {
    id: 7,
    title: "Todos App",
    image: todoImage,
    link: "https://github.com/IbragimovaN/todosApp-with-tests/blob/main/README.md",
  },
  {
    id: 8,
    title: "Notes App",
    image: notesImage,
    link: "https://github.com/IbragimovaN/Notes-app2/blob/main/README.md",
  },
  {
    id: 9,
    title: "Events",
    image: eventsImage,
    link: "https://github.com/IbragimovaN/Events/blob/main/README.md",
  },
];

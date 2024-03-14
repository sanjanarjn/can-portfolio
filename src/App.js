import "./App.css";

import Competencies from "./components/Competencies";
import Divider from "./components/Divider";
import Experience from "./components/Experience";
import PortfolioHeader from "./components/PortfolioHeader";
import SwipeAccordion from "./components/SwipeAccordion";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function App() {
  const items = [
    { content: "Swipe or click the dots to navigate through sections." },
    { content: "Easily integrate with React projects." },
    { content: "Fully customizable and responsive." },
  ];

  return (
    <>
      <PortfolioHeader />
      <Competencies />
      <Divider />
      <Experience />
      <Divider />
      <SwipeAccordion items={items} />
    </>
  );
}

export default App;

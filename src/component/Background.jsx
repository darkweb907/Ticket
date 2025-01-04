import { Routes, Route } from "react-router-dom";
import Form from "./Form";
import Header from "./Header";
import Details from "./Details";
import Top from "../assets/images/pattern-squiggly-line-top.svg";
import Line from "../assets/images/pattern-squiggly-line-bottom.svg";
import Pattern from "../assets/images/pattern-lines.svg";
import Circle from "../assets/images/pattern-circle.svg";

const Background = () => {
  return (
    <div className="mage md:overflow-hidden">
      <img
        className="top w-[35%] absolute right-0 top-5 "
        src={Top}
        alt="not descover"
      />
      <img
        className="bottom w-[57%] left-0 absolute bottom-[-69px] "
        src={Line}
        alt="not descover"
      />
      <img src={Pattern} alt="not descover" />
      <img
        className="hidden md:block absolute top-[50%] left-[50%] md:w-[15%] "
        src={Circle}
        alt="not descover"
      />
      <div className="text absolute top-0 w-full ">
        <div className="texting mt-[2rem] md:mt-0 ">
          <Header />
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/display" element={<Details />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Background;

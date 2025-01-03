import { useLocation } from "react-router-dom";
import mage from "../assets/images/logo-full.svg";
import logoA from "../assets/images/image-avatar.jpg";
const Details = () => {
  const location = useLocation();
  const { message } = location.state || {}; // Retrieve the passed state
  console.log(message.avatar);

  return (
    <div className="display-text mt-5  max-w-[60%]">
      <h1 className=" text-xl md:text-2xl LG:text-3xl font-extrabold mb-1">
        Congrats, <span className="text-GOrange"> {message.name} </span> Your
        ticket is ready.
      </h1>
      <p className="md:px-20 text-sm">
        We&apos;ve emailed your ticket to
        <span className="text-Orange"> {message.email} </span>
        and will send updates in the run up to the event.
      </p>
      <div className="body ticket  ">
        <img
          className="w-[70%]"
          src="./src/assets/images/pattern-ticket.svg"
          alt="hello"
        />
        <div className="detail-text md:m absolute md:left-[5rem] md:top-[4px]">
          <div className="flex flex-col gap-2">
            <img className="w-[65%] mt-3" src={mage} alt="logo" />
            <p className="text-xs">Jan 31, 2025 / Austin, TX</p>
          </div>
          <div className="logoA flex mt-3 items-center gap-4 ">
            <img className="w-[20%] rounded-md" src={logoA} alt="logoA" />
            <div className="flex flex-col">
              <h2>{message.name}</h2>
              <p>{message.github}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

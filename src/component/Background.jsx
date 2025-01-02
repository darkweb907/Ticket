import Top from "../assets/images/pattern-squiggly-line-top.svg"
import Form from "./Form"
import Header from "./Header"

const Background = () => {
  return (
    <div className="mage overflow-hidden">
        <img className="top w-[35%] absolute right-0 top-5 " src={Top} alt="not descover" />
        <img className="bottom w-[57%] left-0 absolute bottom-[-69px] " src="./src/assets/images/pattern-squiggly-line-bottom.svg" alt="not descover" />
        <img className=" " src="./src/assets/images/pattern-lines.svg" alt="not descover" />
        <img className=" " src="./src/assets/images/pattern-circle.svg" alt="not descover" />
      <div className="text absolute top-0 w-full ">
      <div className="texting">
        <Header/>
        <Form/>
      </div>
      </div>
    </div>
  )
}

export default Background
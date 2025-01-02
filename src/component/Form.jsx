import { useState } from "react";

const Form = () => {
  const [Word, setWord] = useState({
    avatar: "",
    name: "",
    email: "",
    github: "",
  });
  const justSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(Word);
  };

  const textChange = (e) => {
    const { name, value } = e.target;
    setWord((prevData) => {
      return { ...prevData, [name]: value };
    });
  };
  return (
    <>
      <section className="form mt-2 text-center ">
        <h1 className="text-3xl Wform ">
          Your Journey to Coding Conf 2025 Starts Here!
        </h1>
        <p className="text-sm font-light">
          Secure your spot at next year&apos;s biggest coding conference.
        </p>
        <form
          className="mt-7 px-7 Wform text-left text-red-700"
          onSubmit={justSubmit}
        >
          <div className="avatar mt-3">
            <label htmlFor="avatar">Upload Avatar</label>
            <input
              onChange={textChange}
              value={Word.avatar}
              className="block mb-3 w-full  py-1 pl-2 rounded-md"
              id="avatar"
              type="text"
              name="avatar"
            />
          </div>
          <div className="avatar mt-3">
            <label htmlFor="name">Full Name</label>
            <input
              onChange={textChange}
              value={Word.name}
              className="block mb-3 w-full  py-1 pl-2 rounded-md"
              id="name"
              type="text"
              name="name"
            />
          </div>
          <div className="avatar mt-3">
            <label htmlFor="avatar">Email Address</label>
            <input
              onChange={textChange}
              value={Word.email}
              className="block mb-3 w-full  py-1 pl-2 rounded-md"
              id="avatar"
              type="email"
              placeholder="email address"
              name="email"
            />
          </div>
          <div className="avatar mt-3">
            <label htmlFor="github">Github Username</label>
            <input
              onChange={textChange}
              value={Word.github}
              className="block mb-3 w-full py-1 pl-2 rounded-md"
              id="github"
              type="email"
              placeholder="@yourgmail.com"
              name="github"
            />
          </div>
          <div className="avatar mt-3">
            <input
              className="w-full bg-BOrange py-1 rounded-md"
              type="submit"
              value="Generate my Ticket"
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default Form;

import Logo from "../assets/images/logo-full.svg";

const Header = () => {
  return (
    <div className="flex justify-center logo mt-11">
      <img className="w-[65%]" src={Logo} alt="Logo" />
    </div>
  );
};

export default Header;

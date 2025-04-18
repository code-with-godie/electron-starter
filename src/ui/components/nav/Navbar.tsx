import { Link } from "react-router-dom";
import url from "../../../assets/react.svg";
const Navbar = () => {
  return (
    <div className=' flex p-4 shadow-2xl items-center mr-4 justify-between'>
      <div>
        <img
          src={url}
          className=' size-8 mx-auto mb-4 animate-spin'
          alt='Logo'
        />
      </div>
      <div className=' px-4 flex  gap-4 text-white text-lg'>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
      </div>
    </div>
  );
};

export default Navbar;

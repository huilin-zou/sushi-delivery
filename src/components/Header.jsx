import bee from "../assets/bee.png";
import {Link} from 'react-router-dom'

export const Header = () => {
  return (
    <nav id="header" className="text-white">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="logo-wrapper pl-4 flex items-center">
          <Link to="/" className="toggleColor text-white no_underline hover:no-underline font-bold text-2xl lg:text-4xl">

            <img src={bee} alt="logo" className="
            w-40 h-40 object-cover"></img>
          </Link>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <Link to="/cart">
            Cart
          </Link>
          <Link to="/login">Log In</Link>
          <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

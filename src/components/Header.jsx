import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header
      className="
    bg-white
    shadow
    p-4
   "
    >
      <div
        className="
     flex
     justify-between
     items-center
    "
      >
        <Link to="/">
          <h1
            className="
       text-xl
       font-bold
       text-primary
      "
          >
            Shopopai
          </h1>
        </Link>

        <nav className="flex gap-4">
          <Link to="/">Products</Link>

          <Link to="/cart">Cart</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

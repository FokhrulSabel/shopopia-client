import { Link } from "react-router-dom";

const NavbarBrand = () => {
  return (
    <Link
      to="/"
      className="
        flex
        min-w-0
        items-center
        gap-2
        shrink-0
      "
    >
      <div
        className="
          flex
          h-9
          w-9
          sm:h-10
          sm:w-10
          items-center
          justify-center
          rounded-2xl
          bg-black
          text-sm
          sm:text-lg
          font-bold
          text-white
          shrink-0
        "
      >
        S
      </div>

      <div
        className="
          hidden
          xs:flex
          min-w-0
          flex-col
          leading-none
        "
      >
        <span
          className="
            truncate
            text-sm
            sm:text-base
            lg:text-lg
            font-bold
            tracking-tight
          "
        >
          SHOPOPIA
        </span>

        <span
          className="
            truncate
            text-[10px]
            sm:text-xs
            text-muted-foreground
          "
        >
          Modern Commerce
        </span>
      </div>
    </Link>
  );
};

export default NavbarBrand;

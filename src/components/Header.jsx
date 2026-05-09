export default function EcommerceNavbar() {
  const navLinks = [
    "Home",
    "Shop",
    "Categories",
    "Deals",
    "New Arrivals",
    "Contact",
  ];

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50 shadow-sm">
      {/* Top Banner */}
      <div className="bg-black text-white text-center text-sm py-2 px-4">
        Free shipping on orders over $100
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center font-bold text-lg">
              E
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">EliteShop</h1>
              <p className="text-xs text-gray-500 -mt-1">Premium E-commerce</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium text-gray-700 hover:text-black transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-2xl px-4 py-2 w-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-4.35-4.35m0 0A7.65 7.65 0 1 0 5.85 5.85a7.65 7.65 0 0 0 10.8 10.8Z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none border-none text-sm w-full ml-3"
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Wishlist */}
            <button className="relative p-2 rounded-xl hover:bg-gray-100 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21.752 6.633-1.267-1.267a4.5 4.5 0 0 0-6.364 0L12 7.487l-2.121-2.121a4.5 4.5 0 0 0-6.364 6.364l1.267 1.267L12 20.485l7.248-7.488a4.5 4.5 0 0 0 .004-6.364Z"
                />
              </svg>
            </button>

            {/* Cart */}
            <button className="relative p-2 rounded-xl hover:bg-gray-100 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386a1.5 1.5 0 0 1 1.415 1.025L5.383 5.25m0 0H21.75l-1.5 7.5H6.621m-1.238-7.5L6.621 12.75m0 0 1.5 4.5h9.879m-11.379 0a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm10.5 0a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                />
              </svg>

              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            {/* Profile */}
            <button className="hidden sm:flex items-center gap-2 bg-black text-white px-4 py-2 rounded-2xl hover:opacity-90 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275"
                />
              </svg>
              <span className="text-sm font-medium">Account</span>
            </button>

            {/* Mobile Menu */}
            <button className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden border-t bg-white px-4 py-3 flex items-center justify-around">
        {navLinks.slice(0, 4).map((item) => (
          <button
            key={item}
            className="text-xs font-medium text-gray-600 hover:text-black"
          >
            {item}
          </button>
        ))}
      </div>
    </header>
  );
}

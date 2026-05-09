export default function EcommerceFooter() {
  const shopLinks = [
    "Men",
    "Women",
    "Electronics",
    "Accessories",
    "New Arrivals",
    "Sale",
  ];

  const supportLinks = [
    "Help Center",
    "Shipping Info",
    "Returns & Refunds",
    "Track Order",
    "Privacy Policy",
    "Terms & Conditions",
  ];

  const companyLinks = [
    "About Us",
    "Careers",
    "Press",
    "Affiliate Program",
    "Blog",
    "Contact",
  ];

  const socialIcons = [
    {
      name: "Facebook",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <path d="M22 12a10 10 0 1 0-11.563 9.875v-6.987H7.898V12h2.539V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.888h-2.33v6.987A10 10 0 0 0 22 12Z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5Zm0 1.8h8.5a3.95 3.95 0 0 1 3.95 3.95v8.5a3.95 3.95 0 0 1-3.95 3.95h-8.5a3.95 3.95 0 0 1-3.95-3.95v-8.5A3.95 3.95 0 0 1 7.75 3.8Zm8.95 1.35a.675.675 0 1 0 0 1.35.675.675 0 0 0 0-1.35ZM12 6.85A5.15 5.15 0 1 0 17.15 12 5.156 5.156 0 0 0 12 6.85Zm0 1.8A3.35 3.35 0 1 1 8.65 12 3.354 3.354 0 0 1 12 8.65Z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <path d="M22 5.924c-.736.326-1.527.547-2.357.646a4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.744A11.65 11.65 0 0 1 3.392 4.86a4.106 4.106 0 0 0 1.27 5.482 4.072 4.072 0 0 1-1.86-.514v.052a4.108 4.108 0 0 0 3.292 4.025 4.095 4.095 0 0 1-1.853.07 4.109 4.109 0 0 0 3.834 2.85A8.24 8.24 0 0 1 2 18.407 11.616 11.616 0 0 0 8.29 20.25c7.547 0 11.675-6.252 11.675-11.675 0-.177-.004-.354-.012-.53A8.348 8.348 0 0 0 22 5.924Z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <path d="M21.582 7.198a2.748 2.748 0 0 0-1.934-1.944C17.935 4.8 12 4.8 12 4.8s-5.935 0-7.648.454A2.748 2.748 0 0 0 2.418 7.2C1.964 8.913 1.964 12 1.964 12s0 3.087.454 4.802a2.748 2.748 0 0 0 1.934 1.944C6.065 19.2 12 19.2 12 19.2s5.935 0 7.648-.454a2.748 2.748 0 0 0 1.934-1.944c.454-1.715.454-4.802.454-4.802s0-3.087-.454-4.802ZM9.818 15.018V8.982L15.273 12l-5.455 3.018Z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-black text-white mt-20">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold leading-tight">
              Subscribe to our newsletter
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl">
              Get exclusive offers, new arrivals, and premium shopping updates
              delivered directly to your inbox.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white text-sm"
            />

            <button className="bg-white text-black font-semibold px-6 py-4 rounded-2xl hover:bg-gray-200 transition whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center text-xl font-bold">
              E
            </div>

            <div>
              <h1 className="text-2xl font-bold">EliteShop</h1>
              <p className="text-sm text-gray-400">
                Premium E-commerce Experience
              </p>
            </div>
          </div>

          <p className="text-gray-400 mt-6 leading-relaxed max-w-md">
            EliteShop provides a world-class online shopping experience with
            premium products, secure payments, and fast global delivery.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-8">
            {socialIcons.map((social) => (
              <button
                key={social.name}
                className="w-11 h-11 rounded-2xl bg-white/10 hover:bg-white hover:text-black transition flex items-center justify-center"
              >
                {social.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Shop</h3>

          <ul className="space-y-3">
            {shopLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Support</h3>

          <ul className="space-y-3">
            {supportLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Company</h3>

          <ul className="space-y-3">
            {companyLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © 2026 EliteShop. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white transition">
              Terms
            </a>

            <a href="#" className="hover:text-white transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

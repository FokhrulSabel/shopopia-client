import { footerNavigation } from "./footerData";
import FooterNewsletter from "./FooterNewsletter";



const Footer = () => {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t border-white/10
        bg-black
        py-20
      "
    >
      {/* Background Gradient */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]
        "
      />

      <div
        className="
          container relative z-10 mx-auto px-4
        "
      >
        <div
          className="
            grid gap-16
            lg:grid-cols-[1.1fr_2fr]
          "
        >
          {/* Left Section */}
          <div
            className="
              flex flex-col gap-10
            "
          >
            {/* Brand */}
            <div className="max-w-sm">
              <a
                href="/"
                className="
                  text-3xl font-black
                  tracking-tight
                  text-white
                "
              >
                SHOPOPIA
              </a>

              <p
                className="
                  mt-6
                  text-base leading-7
                  text-zinc-400
                "
              >
                Modern enterprise commerce platform delivering premium digital
                shopping experiences powered by innovation and AI.
              </p>
            </div>

            {/* Newsletter */}
            <FooterNewsletter />

            {/* Social Links */}
            {/* <div
              className="
                flex items-center gap-4
              "
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="
                      flex h-12 w-12
                      items-center justify-center
                      rounded-2xl
                      border border-white/10
                      bg-white/5
                      text-zinc-300
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-white/20
                      hover:bg-white/10
                      hover:text-white
                    "
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div> */}
          </div>

          {/* Navigation */}
          <div
            className="
              grid gap-10
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {footerNavigation.map((column) => (
              <div key={column.title}>
                <h3
                  className="
                    text-sm font-semibold
                    uppercase tracking-[0.2em]
                    text-white
                  "
                >
                  {column.title}
                </h3>

                <div
                  className="
                    mt-6
                    flex flex-col gap-4
                  "
                >
                  {column.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="
                        text-sm
                        text-zinc-400
                        transition-all duration-300
                        hover:translate-x-1
                        hover:text-white
                      "
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          className="
            mt-16
            flex flex-col gap-6
            border-t border-white/10
            pt-8
            text-sm text-zinc-500
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <p>© 2026 SHOPOPIA Commerce. All rights reserved.</p>

          <div
            className="
              flex flex-wrap items-center gap-6
            "
          >
            <a href="/">Privacy Policy</a>

            <a href="/">Terms of Service</a>

            <a href="/">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

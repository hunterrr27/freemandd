"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer lobortis.
                </p>
                <div className="flex items-center">
                  {/* Social Media Links */}
                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    {/* SVG Icon */}
                  </a>
                  {/* Additional social media links can be added similarly */}
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Useful Links
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/blog"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Additional Footer Sections */}
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Terms
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      TOS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Support Links */}
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Support & Help
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/contact"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Open Support Ticket
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-white">
              Template by{" "}
              <a
                href="http://uideck.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                UIdeck
              </a>{" "}
              and{" "}
              <a
                href="https://nextjstemplates.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Next.js Templates
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

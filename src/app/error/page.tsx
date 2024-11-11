import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Error Page ",
  description: "This is Error Page ",
  // other metadata
};

const ErrorPage = () => {
  return (
    <>
      <section className="relative dark:bg-gray-dark z-10 pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[530px] text-center">
                
                <h3 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                  Sorry, the page can’t be found
                </h3>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  The page you were looking for appears to have been moved,
                  deleted or does not exist.
                </p>
                <Link
                  href="/"
                  className="px-8 py-3 text-base font-bold text-white duration-300 rounded-md bg-primary shadow-signUp hover:bg-white hover:text-primary md:px-9 lg:px-8 xl:px-9"
                >
                  Back to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        
      </section>
    </>
  );
};

export default ErrorPage;

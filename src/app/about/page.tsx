import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Freeman Development & Design",
  description: "This is About Page for Freeman",
  // other metadata
};

const AboutPage = () => {
  return (
    <main className="dark:bg-gray-dark py-40" >
      
      <AboutSectionOne />
      <AboutSectionTwo />
    </main>
  );
};

export default AboutPage;

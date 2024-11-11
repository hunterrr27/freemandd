import Breadcrumb from "@/components/Common/Breadcrumb";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page ",
  description: "This is Contact Page ",
  // other metadata
};

const ServicesPage = () => {
  return (
    <main className="dark:bg-gray-dark" >
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
        At Freeman Development & Design, we bring your digital vision to life. Our range of services is tailored to build powerful, responsive, and stylish websites that enhance your online presence and engage your audience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Custom Website Development"
            description="Building responsive and dynamic websites tailored to your needs."
            icon="🖥️"
          />
          <ServiceCard
            title="UI/UX Design"
            description="Crafting visually appealing, user-friendly interfaces to maximize engagement."
            icon="🎨"
          />
          <ServiceCard
            title="E-commerce Solutions"
            description="Creating robust online stores with secure payment and seamless checkout."
            icon="🛒"
          />
          <ServiceCard
            title="SEO Optimization"
            description="Optimizing your website to improve search engine rankings and reach a broader audience."
            icon="🚀"
          />
          <ServiceCard
            title="Maintenance & Support"
            description="Providing ongoing support and updates to keep your website running smoothly."
            icon="🔧"
          />
          <ServiceCard
            title="Content Management Systems (CMS)"
            description="Setting up custom CMS solutions to easily manage and update your content."
            icon="📋"
          />
        </div>
      </div>
      
    </main>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 text-center shadow-md transition-transform duration-200 ease-in-out transform hover:shadow-lg hover:-translate-y-2 hover:scale-105">
      <div className="text-5xl mb-4">{icon}</div>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default ServicesPage;


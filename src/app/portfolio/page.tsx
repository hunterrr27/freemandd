import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore our projects and see the quality of our work.",
};

const PortfolioPage = () => {
  return (
    <main className="dark:bg-gray-dark">
      

      <section className="container mx-auto px-4 py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PortfolioCard
            title="Project One"
            description="A modern e-commerce platform built to optimize user experience and drive sales."
            imageUrl="/images/project1.jpg"
            liveLink="https://example.com/project1"
            codeLink="https://github.com/username/project1"
          />
          <PortfolioCard
            title="Project Two"
            description="A portfolio website for a photographer, featuring custom galleries and interactive designs."
            imageUrl="/images/project2.jpg"
            liveLink="https://example.com/project2"
            codeLink="https://github.com/username/project2"
          />
          <PortfolioCard
            title="Project Three"
            description="A sleek and interactive blog built for a tech company with custom CMS integration."
            imageUrl="/images/project3.jpg"
            liveLink="https://example.com/project3"
            codeLink="https://github.com/username/project3"
          />
        </div>
      </section>
    </main>
  );
};

interface PortfolioCardProps {
  title: string;
  description: string;
  imageUrl: string;
  liveLink: string;
  codeLink: string;
}

function PortfolioCard({ title, description, imageUrl, liveLink, codeLink }: PortfolioCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md transition-transform duration-200 ease-in-out transform hover:shadow-lg hover:-translate-y-2 hover:scale-105">
      <Image
        src={imageUrl}
        alt={title}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
        priority
      />
      <div className="p-6 text-center">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-center space-x-4">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            View Site
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;

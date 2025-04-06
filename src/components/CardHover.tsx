import { HoverEffect } from "../components/ui/card-hover-effect";
import {
  Monitor,
  Paintbrush,
  Smartphone,
  Code,
  Layers,
  Database
} from "lucide-react";

export default function CardHoverEffectDemo() {
  return (
    <section className="w-full bg-white/80 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#023157] tracking-tight">
            Our Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#023157]/80 max-w-2xl mx-auto">
            We offer a comprehensive suite of web development and design services to help your business grow online.
          </p>
        </div>
        <HoverEffect items={projects} />
      </div>
    </section>
  );
}

export const projects = [
  {
    title: "Frontend Development",
    description:
      "Expert implementation of modern frontend technologies including HTML5, CSS3, and JavaScript frameworks.",
    icon: <Monitor />
  },
  {
    title: "UI/UX Redesign",
    description:
      "Transform your website with a modern, user-friendly design that looks great and helps convert more visitors into customers.",
    icon: <Paintbrush />
  },
  {
    title: "Responsive Design",
    description:
      "Ensure your website looks great and functions perfectly on all devices with a mobile-first approach.",
    icon: <Smartphone />
  },
  {
    title: "SEO Optimization",
    description:
      "Boost your website's visibility with advanced SEO strategies, keyword optimization, and content structuring for better search engine rankings.",
    icon: <Code />
  },
  {
    title: "Website Optimization",
    description:
      "Performance optimization and best practices to enhance speed, SEO, accessibility, and overall user experience.",
    icon: <Layers />
  },
  {
    title: "Tech Stack Integration",
    description:
      "Quick adaptation to your tech stack for seamless integration with your existing team, workflows, and development processes.",
    icon: <Database />
  }
];

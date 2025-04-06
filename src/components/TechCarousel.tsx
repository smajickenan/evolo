import React from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaAngular, 
  FaFigma,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaSass,
  FaBootstrap,
  FaWordpress,
  FaMicrosoft
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiTypescript, 
  SiVercel, 
  SiNextdotjs, 
  SiNestjs, 
  SiFramer, 
  SiOpenai, 
  SiLighthouse,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGraphql,
  SiRedux,
  SiWebpack,
  SiJest,
  SiCypress,
  SiSelenium,
  SiFirebase,
  SiGooglecloud,
  SiHeroku,
  SiNetlify,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiJira,
  SiTrello,
  SiSlack,
  SiDiscord,
  SiZoom,
  SiExpress,
  SiPrisma,
  SiSupabase,
  SiVuedotjs,
  SiSvelte,
  SiAstro,
  SiWebflow,
  SiShopify,
  SiWoo,
  SiStripe,
  SiPaypal
} from 'react-icons/si';

interface Technology {
  name: string;
  icon: React.ReactNode;
}

const techIcons = [
  {
    name: "HTML",
    icon: <FaHtml5 size={40} className="text-[#E34F26]" />
  },
  {
    name: "CSS",
    icon: <FaCss3Alt size={40} className="text-[#1572B6]" />
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={40} className="text-[#38B2AC]" />
  },
  {
    name: "JavaScript",
    icon: <FaJs size={40} className="text-[#F7DF1E]" />
  },
  {
    name: "Vercel",
    icon: <SiVercel size={40} className="text-white" />
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={40} className="text-[#3178C6]" />
  },
  {
    name: "React",
    icon: <FaReact size={40} className="text-[#61DAFB]" />
  },
  {
    name: "NextJs",
    icon: <SiNextdotjs size={40} className="text-white" />
  },
  {
    name: "Angular",
    icon: <FaAngular size={40} className="text-[#DD0031]" />
  },
  {
    name: "NestJS",
    icon: <SiNestjs size={40} className="text-[#E0234E]" />
  },
  {
    name: "Framer",
    icon: <SiFramer size={40} className="text-white" />
  },
  {
    name: "Figma",
    icon: <FaFigma size={40} className="text-[#F24E1E]" />
  },
  {
    name: "Illustrator",
    icon: <SiAdobeillustrator size={40} className="text-[#FF9A00]" />
  },
  {
    name: "Photoshop",
    icon: <SiAdobephotoshop size={40} className="text-[#31A8FF]" />
  },
  {
    name: "OpenAI",
    icon: <SiOpenai size={40} className="text-white" />
  },
  {
    name: "Lighthouse",
    icon: <SiLighthouse size={40} className="text-[#F3BF19]" />
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={40} className="text-[#339933]" />
  },
  {
    name: "Git",
    icon: <FaGitAlt size={40} className="text-[#F05032]" />
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={40} className="text-[#47A248]" />
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={40} className="text-[#336791]" />
  },
  {
    name: "MySQL",
    icon: <SiMysql size={40} className="text-[#4479A1]" />
  },
  {
    name: "GraphQL",
    icon: <SiGraphql size={40} className="text-[#E535AB]" />
  },
  {
    name: "Redux",
    icon: <SiRedux size={40} className="text-[#764ABC]" />
  },
  {
    name: "Cypress",
    icon: <SiCypress size={40} className="text-[#17202C]" />
  },
  {
    name: "Firebase",
    icon: <SiFirebase size={40} className="text-[#FFCA28]" />
  },
  {
    name: "GitHub",
    icon: <SiGithub size={40} className="text-white" />
  },
  {
    name: "Bitbucket",
    icon: <SiBitbucket size={40} className="text-[#0052CC]" />
  },
  {
    name: "Express",
    icon: <SiExpress size={40} className="text-white" />
  },
  {
    name: "Prisma",
    icon: <SiPrisma size={40} className="text-[#2D3748]" />
  },
  {
    name: "Supabase",
    icon: <SiSupabase size={40} className="text-[#3ECF8E]" />
  },
  {
    name: "Vue.js",
    icon: <SiVuedotjs size={40} className="text-[#4FC08D]" />
  },
  {
    name: "Webflow",
    icon: <SiWebflow size={40} className="text-[#4353FF]" />
  },
  {
    name: "Shopify",
    icon: <SiShopify size={40} className="text-[#7AB55C]" />
  },
  {
    name: "Stripe",
    icon: <SiStripe size={40} className="text-[#008CDD]" />
  },
  {
    name: "PayPal",
    icon: <SiPaypal size={40} className="text-[#00457C]" />
  },
  {
    name: "Sass",
    icon: <FaSass size={40} className="text-[#CC6699]" />
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap size={40} className="text-[#7952B3]" />
  },
  {
    name: "WordPress",
    icon: <FaWordpress size={40} className="text-[#21759B]" />
  }
];

const technologies = {
  row1: techIcons.slice(0, 13),
  row2: techIcons.slice(13, 26),
  row3: techIcons.slice(26, 38),
};

const TechRow: React.FC<{ items: Technology[], direction: 'left' | 'right' }> = ({ items, direction }) => {
  // Create multiple duplicates to ensure infinite scrolling
  const duplicatedItems = [...items, ...items, ...items, ...items, ...items];
  
  return (
    <div className="relative flex overflow-hidden items-center h-[15vh] mb-8 w-full">
      <div className={`flex whitespace-nowrap ${direction === 'left' ? 'animate-carousel' : 'animate-carousel-reverse'}`}>
        {duplicatedItems.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex flex-col items-center justify-center w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 transition-colors"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center">
              {tech.icon}
            </div>
            <span className="mt-1 md:mt-2 text-xs sm:text-sm text-[#08183e]">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TechCarousel: React.FC = () => {
  return (
    <section className="relative bg-white/80 py-10 sm:py-16 md:py-20 w-full">
      <div className="w-full relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-center text-[#08183e] mb-6 sm:mb-8 md:mb-12 px-4">
          Technologies We Use
        </h2>
        <div className="space-y-4 sm:space-y-6 md:space-y-8 w-full">
          <TechRow items={technologies.row1} direction="left" />
          <TechRow items={technologies.row2} direction="right" />
          <TechRow items={technologies.row3} direction="left" />
        
        </div>
      </div>
    </section>
  );
}; 
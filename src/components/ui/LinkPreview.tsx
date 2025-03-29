import React, { useState, useRef } from 'react';

interface TechItem {
  name: string;
  imageUrl: string;
  url: string;
}

const techItems: TechItem[] = [
  {
    name: "React",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070",
    url: "https://react.dev",
  },
  {
    name: "Tailwind CSS",
    imageUrl: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=2070",
    url: "https://tailwindcss.com",
  },
  {
    name: "Vite",
    imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074",
    url: "https://vitejs.dev",
  },
  {
    name: "Webflow",
    imageUrl: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=2070",
    url: "https://webflow.com",
  },
  {
    name: "JavaScript",
    imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "CSS",
    imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "iOS",
    imageUrl: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2070",
    url: "https://developer.apple.com/ios",
  },
  {
    name: "Android",
    imageUrl: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2070",
    url: "https://developer.android.com",
  },
  {
    name: "React Native",
    imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070",
    url: "https://reactnative.dev",
  },
  {
    name: "Figma",
    imageUrl: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071",
    url: "https://figma.com",
  },
];

const HoverableText = ({ name, imageUrl, url }: TechItem) => {
  const [showImage, setShowImage] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ 
      x: rect.left + (rect.width / 2), 
      y: rect.top 
    });
    setShowImage(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setShowImage(false);
    }, 300);
  };

  const handleImageEnter = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  };

  const handleImageLeave = () => {
    setShowImage(false);
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(url, '_blank');
  };

  return (
    <strong
      className="cursor-pointer hover:text-[#6fa8d6] transition-colors duration-300 relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {name}
      {showImage && (
        <div
          style={{
            position: 'fixed',
            top: mousePosition.y - 120,
            left: mousePosition.x - 100,
            zIndex: 1000,
          }}
          onMouseEnter={handleImageEnter}
          onMouseLeave={handleImageLeave}
        >
          <img
            src={imageUrl}
            alt={name}
            onClick={handleImageClick}
            style={{
              width: '10vw',
              height: '10vh',
              objectFit: 'cover',
              display: 'block',
              border: '3px solid white',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, border-color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.borderColor = '#6fa8d6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.borderColor = 'white';
            }}
          />
        </div>
      )}
    </strong>
  );
};

export const LinkPreview = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6 p-6">
      <p className="text-lg text-[#023157]">
        <HoverableText {...techItems[0]} />, {" "}
        <HoverableText {...techItems[1]} />, and {" "}
        <HoverableText {...techItems[2]} /> are a powerful combo for building fast, modern web apps with reusable components and beautiful UI.
      </p>
      
      <p className="text-lg text-[#023157]">
        <HoverableText {...techItems[3]} /> is a great no-code tool for designing responsive websites visually while still keeping full control.
      </p>
      
      <p className="text-lg text-[#023157]">
        <HoverableText {...techItems[4]} /> and {" "}
        <HoverableText {...techItems[5]} /> are essential for adding interactivity and styling to any web project.
      </p>
      
      <p className="text-lg text-[#023157]">
        <HoverableText {...techItems[6]} /> and {" "}
        <HoverableText {...techItems[7]} /> development let you reach users on both Apple and Android devices with native performance and design.
      </p>
      
      <p className="text-lg text-[#023157]">
        <HoverableText {...techItems[8]} /> is a smart way to build cross-platform mobile apps using the same React codebase for both iOS and Android.
      </p>

      <p className="text-lg text-[#023157]">
        <HoverableText {...techItems[9]} /> is the industry-standard digital design tool for creating beautiful user interfaces and prototypes.
      </p>
    </div>
  );
};

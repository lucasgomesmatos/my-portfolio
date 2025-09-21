"use client";

import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const navItems = [
    { name: "GitHub", icon: IconBrandGithub, href: "https://github.com" },
    { name: "LinkedIn", icon: IconBrandLinkedin, href: "https://linkedin.com" },
    {
      name: "Instagram",
      icon: IconBrandInstagram,
      href: "https://instagram.com",
    },
  ];

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  if (isMobile) {
    return (
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-t">
        <div className="flex justify-center items-center py-4">
          <ul className="flex space-x-8">
            {navItems.map((item, index) => (
              <li key={item.name} className="relative">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110 active:scale-95"
                  style={{
                    zIndex: navItems.length - index,
                    transform: `translateX(${(index - 1) * 8}px)`,
                  }}
                >
                  <item.icon className="w-6 h-6" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }

  return (
    <nav className="flex items-center justify-center w-full">
      <ul className="flex space-x-6 font-medium py-4">
        {navItems.map((item) => (
          <li
            key={item.name}
            className="flex items-center space-x-1 hover:bg-muted px-2 py-1 rounded-md transition cursor-pointer"
          >
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1"
            >
              <item.icon />
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

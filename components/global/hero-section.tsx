"use client";

import { IconChevronRight } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const moodEmoticons = [
  { emoji: ":D", label: "muito feliz" },
  { emoji: ":)", label: "feliz" },
  { emoji: "XD", label: "rindo muito" },
  { emoji: "<3", label: "coração" },
];

export const HeroSection = () => {
  const [currentMoodIndex, setCurrentMoodIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMood = moodEmoticons[currentMoodIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = isDeleting ? 500 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText === currentMood.emoji) {
        // Finished typing, wait then start deleting
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && displayedText === "") {
        // Finished deleting, move to next mood
        setIsDeleting(false);
        setCurrentMoodIndex((prev) => (prev + 1) % moodEmoticons.length);
      } else if (isDeleting) {
        // Continue deleting
        setDisplayedText(
          currentMood.emoji.substring(0, displayedText.length - 1),
        );
      } else {
        // Continue typing
        setDisplayedText(
          currentMood.emoji.substring(0, displayedText.length + 1),
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentMoodIndex, displayedText, isDeleting]);

  return (
    <div className="flex flex-col items-center justify-center px-4 gap-3">
      <div className="text-center">
        <p className="text-lg">Oi! Eu sou o</p>
        <h1 className="text-4xl font-semibold mt-2 tracking-wide">
          Lucas Matos{" "}
          <span
            className="inline-block min-w-[3ch]"
            aria-label={`Emoticon animado: ${moodEmoticons[currentMoodIndex]?.label || ""}`}
            role="img"
          >
            {displayedText}
            <span className="animate-pulse" aria-hidden="true">
              |
            </span>
          </span>
        </h1>
      </div>
      <div>
        <p className="max-w-md text-center ">
          Um Desenvolvedor de Software ajudando pessoas na internet. Pessoas são
          o propósito e paixão é o combustível.
        </p>
      </div>
      <Button
        variant="outline"
        size="lg"
        className="flex items-center justify-center"
      >
        <span>Fale comigo</span>
        <IconChevronRight className="size-4" />
      </Button>
    </div>
  );
};

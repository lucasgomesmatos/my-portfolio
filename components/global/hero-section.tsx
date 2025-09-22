"use client";

import {
  getOptimizedVariants,
  useReducedMotion,
  useReducedPerformance,
} from "@/lib/hooks/use-animations";
import { IconChevronRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
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

  const prefersReducedMotion = useReducedMotion();
  const isReducedPerformance = useReducedPerformance();
  const variants = getOptimizedVariants(
    prefersReducedMotion,
    isReducedPerformance,
  );

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
    <motion.div
      className="flex flex-col items-center justify-center px-4 gap-3"
      variants={variants.container}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="text-center" variants={variants.item}>
        <motion.p className="text-lg" variants={variants.item}>
          Oi! Eu sou o
        </motion.p>
        <motion.h1
          className="text-4xl font-semibold mt-2 tracking-wide"
          variants={variants.item}
        >
          Lucas Matos{" "}
          <motion.span
            className="inline-block min-w-[3ch]"
            aria-label={`Emoticon animado: ${moodEmoticons[currentMoodIndex]?.label || ""}`}
            role="img"
            variants={variants.item}
          >
            {displayedText}
            <span className="animate-pulse" aria-hidden="true">
              |
            </span>
          </motion.span>
        </motion.h1>
      </motion.div>
      <motion.div variants={variants.item}>
        <p className="max-w-md text-center ">
          Um Desenvolvedor de Software ajudando pessoas na internet. Pessoas são
          o propósito e paixão é o combustível.
        </p>
      </motion.div>
      <motion.div
        variants={variants.item}
        whileHover={variants.itemHover}
        whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
      >
        <Button
          variant="outline"
          size="lg"
          className="flex items-center justify-center"
        >
          <span>Fale comigo</span>
          <motion.div
            initial={{ x: 0 }}
            whileHover={prefersReducedMotion ? {} : { x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <IconChevronRight className="size-4" />
          </motion.div>
        </Button>
      </motion.div>
    </motion.div>
  );
};

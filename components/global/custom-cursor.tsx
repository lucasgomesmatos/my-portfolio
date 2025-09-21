"use client";

import { useCursor } from "@/lib/hooks/use-cursor";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const { isHovering, isClicking, isVisible } = useCursor();

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;

    if (!cursor || !dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Smooth animation function
    const animateCursor = () => {
      // Cursor follows with delay
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;

      // Dot follows more closely
      dotX += (mouseX - dotX) * 0.3;
      dotY += (mouseY - dotY) * 0.3;

      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;

      dot.style.left = `${dotX}px`;
      dot.style.top = `${dotY}px`;

      requestAnimationFrame(animateCursor);
    };

    // Check if device supports hover (not touch device)
    const hasHover = window.matchMedia("(hover: hover)").matches;

    if (hasHover) {
      document.addEventListener("mousemove", handleMouseMove);

      // Start animation
      animateCursor();

      // Add cursor-none class to body
      document.body.classList.add("cursor-none");
    }

    return () => {
      if (hasHover) {
        document.removeEventListener("mousemove", handleMouseMove);

        // Remove cursor-none class from body
        document.body.classList.remove("cursor-none");
      }
    };
  }, []);

  // Update cursor classes based on state
  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    cursor.classList.toggle("hover", isHovering);
    cursor.classList.toggle("click", isClicking);
    cursor.style.opacity = isVisible ? "1" : "0";
    
    // Apply states to the map pin dot as well
    dot.classList.toggle("hover", isHovering);
    dot.classList.toggle("click", isClicking);
    dot.style.opacity = isVisible ? "1" : "0";
  }, [isHovering, isClicking, isVisible]);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={dotRef} className="custom-cursor-dot" />
    </>
  );
}

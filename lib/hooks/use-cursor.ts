"use client";

import { useEffect, useState } from "react";

export const useCursor = () => {
  const [cursorState, setCursorState] = useState({
    isHovering: false,
    isClicking: false,
    isVisible: true,
  });

  useEffect(() => {
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check if hovering over interactive elements
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.onclick ||
        target.style.cursor === "pointer" ||
        window.getComputedStyle(target).cursor === "pointer" ||
        target.closest("button") ||
        target.closest("a") ||
        target.hasAttribute("data-cursor-hover") ||
        target.classList.contains("cursor-hover");

      if (isInteractive) {
        setCursorState((prev) => ({ ...prev, isHovering: true }));
      }
    };

    const handleMouseLeave = () => {
      setCursorState((prev) => ({ ...prev, isHovering: false }));
    };

    const handleMouseDown = () => {
      setCursorState((prev) => ({ ...prev, isClicking: true }));
    };

    const handleMouseUp = () => {
      setCursorState((prev) => ({ ...prev, isClicking: false }));
    };

    const handleMouseEnterWindow = () => {
      setCursorState((prev) => ({ ...prev, isVisible: true }));
    };

    const handleMouseLeaveWindow = () => {
      setCursorState((prev) => ({ ...prev, isVisible: false }));
    };

    // Check if device supports hover (not touch device)
    const hasHover = window.matchMedia("(hover: hover)").matches;

    if (hasHover) {
      document.addEventListener("mouseenter", handleMouseEnter, true);
      document.addEventListener("mouseleave", handleMouseLeave, true);
      document.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("mouseenter", handleMouseEnterWindow);
      window.addEventListener("mouseleave", handleMouseLeaveWindow);
    }

    return () => {
      if (hasHover) {
        document.removeEventListener("mouseenter", handleMouseEnter, true);
        document.removeEventListener("mouseleave", handleMouseLeave, true);
        document.removeEventListener("mousedown", handleMouseDown);
        document.removeEventListener("mouseup", handleMouseUp);
        window.removeEventListener("mouseenter", handleMouseEnterWindow);
        window.removeEventListener("mouseleave", handleMouseLeaveWindow);
      }
    };
  }, []);

  return cursorState;
};

"use client";

import { useEffect } from "react";
import useScrollAnimation from "@/utils/useScrollAnimation";

const ScrollAnimatedSection = ({ children }: { children: React.ReactNode }) => {
  useScrollAnimation();

  return <div className="fade-in-element">{children}</div>;
};

export default ScrollAnimatedSection;

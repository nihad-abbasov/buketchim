"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const MotionDiv = motion.div;
export const MotionHeader = motion.header;
export const MotionSection = motion.section;
export const MotionButton = motion.button;
export const MotionLink = motion(Link);

// Reusable animation variants
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const slideIn = {
  initial: { y: -100 },
  animate: { y: 0 },
  exit: { y: -100 },
};

export const scaleIn = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  exit: { scale: 0 },
};

// Page transition variants
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}; 
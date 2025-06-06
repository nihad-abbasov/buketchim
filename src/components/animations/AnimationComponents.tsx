"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

// Fade in animation
export const FadeIn = ({ children, delay = 0, duration = 0.5 }: AnimationProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration, delay }}
  >
    {children}
  </motion.div>
);

// Slide up animation
export const SlideUp = ({ children, delay = 0, duration = 0.5 }: AnimationProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration, delay }}
  >
    {children}
  </motion.div>
);

// Slide in from left
export const SlideInLeft = ({ children, delay = 0, duration = 0.5 }: AnimationProps) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration, delay }}
  >
    {children}
  </motion.div>
);

// Slide in from right
export const SlideInRight = ({ children, delay = 0, duration = 0.5 }: AnimationProps) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration, delay }}
  >
    {children}
  </motion.div>
);

// Scale up animation
export const ScaleUp = ({ children, delay = 0, duration = 0.5 }: AnimationProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration, delay }}
  >
    {children}
  </motion.div>
);

interface StaggerContainerProps {
  children: ReactNode;
  delay?: number;
  staggerDelay?: number;
}

// Stagger children animation
export const StaggerContainer = ({ children, delay = 0, staggerDelay = 0.1 }: StaggerContainerProps) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      visible: {
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: delay,
        },
      },
    }}
  >
    {children}
  </motion.div>
);

interface StaggerItemProps {
  children: ReactNode;
}

// Stagger child item
export const StaggerItem = ({ children }: StaggerItemProps) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    {children}
  </motion.div>
);

interface HoverScaleProps {
  children: ReactNode;
  scale?: number;
}

// Hover scale animation
export const HoverScale = ({ children, scale = 1.05 }: HoverScaleProps) => (
  <motion.div whileHover={{ scale }} transition={{ duration: 0.2 }}>
    {children}
  </motion.div>
);

interface PageTransitionProps {
  children: ReactNode;
}

// Page transition wrapper
export const PageTransition = ({ children }: PageTransitionProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
); 
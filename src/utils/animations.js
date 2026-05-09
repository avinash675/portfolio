export const transitions = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1], // Custom smooth ease-out
};

// Layered: Fade + Slide + Subtle Scale
export const fadeInUp = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: transitions,
  },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: transitions,
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -30, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: transitions,
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: transitions,
  },
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions,
  },
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Parallax-like floating animation
export const floating = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const tapScale = { scale: 0.95 };
export const hoverScale = { scale: 1.02, y: -2 };
export const buttonHover = { 
  scale: 1.02, 
  y: -2,
  boxShadow: "0 10px 20px -10px rgba(99, 102, 241, 0.4)"
};

export const cardHover = {
  y: -5,
  scale: 1.01,
  boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.3)",
  borderColor: "rgba(99, 102, 241, 0.4)",
};

export const viewportConfig = { 
  once: true, 
  margin: "-15% 0px -15% 0px" // Triggers when element is 15% into view
};

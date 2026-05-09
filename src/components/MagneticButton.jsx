import React, { useRef } from 'react';
import { motion as Motion, useMotionValue, useSpring } from 'framer-motion';

const MagneticButton = ({ children, className = "", ...props }) => {
  const ref = useRef(null);
  
  // Motion values for the button's internal movement
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics
  const springConfig = { damping: 15, stiffness: 150 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate distance from center
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Subtle movement: max 15px
    const moveX = (clientX - centerX) * 0.25;
    const moveY = (clientY - centerY) * 0.25;
    
    x.set(moveX);
    y.set(moveY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: smoothX,
        y: smoothY,
      }}
      className={`inline-block ${className}`}
      {...props}
    >
      {children}
    </Motion.div>
  );
};

export default MagneticButton;

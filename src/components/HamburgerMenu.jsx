import React from "react";
import { motion } from "framer-motion";

const HamburgerMenu = ({ isOpen, toggle }) => {
  // Apple uses very snappy but smooth spring physics
  const transition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
  };

  return (
    <button
      onClick={toggle}
      className="hover:bg-content/5 relative z-[70] flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300"
      aria-label="Toggle Menu"
    >
      <div className="flex h-5 w-5 flex-col items-center justify-center">
        {/* Top Line */}
        <motion.span
          className="bg-content absolute h-[2px] w-5"
          animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
          transition={transition}
        />

        {/* Middle Line - Becomes transparent and scales down */}
        {/* <motion.span
          className="bg-content absolute h-[2px] w-5"
          animate={isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        /> */}

        {/* Bottom Line */}
        <motion.span
          className="bg-content absolute h-[2px] w-5"
          animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
          transition={transition}
        />
      </div>
    </button>
  );
};

export default HamburgerMenu;

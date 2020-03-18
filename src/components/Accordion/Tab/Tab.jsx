import React, { memo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Styled from "./Tab.styled";

const variants = {
  open: {
    opacity: 1,
    background: "skyBlue",
    height: "auto",
    transition: { opacity: { duration: 0.8 }, duration: 0.3 }
  },
  closed: {
    opacity: 0,
    background: "darkGray",
    height: 0,
    transition: { opacity: { duration: 0.1 }, duration: 0.3 }
  }
};

const Tab = ({ title, content, index, isOpen, onClick }) => {
  const handleClick = useCallback(() => onClick(index), [index, onClick]);

  return (
    <>
      <motion.div
        initial={false}
        animate={{ background: isOpen === index ? "skyBlue" : "darkGray" }}
        transition={{ duration: 0.3 }}
        onClick={handleClick}
        whileHover={{ scale: 1.02 }}
      >
        <Styled.Title>{title}</Styled.Title>
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen === index && (
          <motion.div
            key={index}
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
          >
            <Styled.Content>{content}</Styled.Content>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(Tab);

import React, { memo, useCallback } from "react";
import { Frame, AnimatePresence } from "framer";

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
      <Frame
        initial={false}
        animate={{ background: isOpen === index ? "skyBlue" : "darkGray" }}
        transition={{ duration: 0.3 }}
        onClick={handleClick}
        whileHover={{ scale: 0.97 }}
        width="100%"
        height="auto"
        position="relative"
      >
        <Styled.Title>{title}</Styled.Title>
      </Frame>
      <AnimatePresence initial={false}>
        {isOpen === index && (
          <Frame
            key={index}
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            width="100%"
            position="relative"
          >
            <Styled.Content>{content}</Styled.Content>
          </Frame>
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(Tab);

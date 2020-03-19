import React, { memo, useCallback } from "react";
import { motion } from "framer-motion";

import Styled from "./Tab.styled";

const Tab = ({ title, index, children, isOpen, onClick }) => {
  const handleClick = useCallback(() => onClick(index), [index, onClick]);

  return (
    <>
      <motion.div
        initial={false}
        animate={{ backgroundColor: isOpen === index ? "#e300ff" : "#ff99aa" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onClick={handleClick}
        whileHover={{ scale: 1.03, transition: { duration: 0.2, flip: 1 } }}
      >
        <Styled.Title>{title}</Styled.Title>
      </motion.div>
      {children}
    </>
  );
};

export default memo(Tab);

import React, { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Tab from "./Tab";

import tabs from "./tabs.js";

import Styled from "./Accordion.styled";

const container = {
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      type: "spring",
      damping: 50,
      stiffness: 100,
      delayChildren: 0.4
    }
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      type: "spring",
      damping: 50,
      stiffness: 100,
      when: "afterChildren"
    }
  }
};

const content = {
  open: {
    opacity: 1,
    scale: 1
  },
  closed: {
    opacity: 0,
    scale: 0.7
  }
};

const Accordion = () => {
  const [isOpen, setOpen] = useState(0);

  const handleOpen = useCallback(
    index => {
      if (index === isOpen) {
        setOpen(null);
      } else {
        setOpen(index);
      }
    },
    [isOpen]
  );

  return (
    <Styled.Root>
      {tabs.map((item, index) => (
        <Tab
          key={index}
          title={item.title}
          index={index}
          isOpen={isOpen}
          onClick={handleOpen}
        >
          <AnimatePresence initial={false}>
            {isOpen === index && (
              <motion.div
                key={index}
                initial="closed"
                animate="open"
                exit="closed"
                variants={container}
                style={{ background: "#e300ff" }}
              >
                <Styled.Content variants={content} style={{ originY: 0 }}>
                  {item.content}
                </Styled.Content>
              </motion.div>
            )}
          </AnimatePresence>
        </Tab>
      ))}
    </Styled.Root>
  );
};

export default memo(Accordion);

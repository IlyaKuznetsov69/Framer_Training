import React, { memo, useState, useCallback } from "react";

import Tab from "./Tab";

import tabs from "./tabs.js";

import Styled from "./Accordion.styled";

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
          content={item.content}
          index={index}
          isOpen={isOpen}
          onClick={handleOpen}
        />
      ))}
    </Styled.Root>
  );
};

export default memo(Accordion);

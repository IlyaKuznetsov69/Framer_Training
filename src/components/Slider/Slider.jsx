import React, { memo, useState, useCallback, useEffect } from "react";
import { Frame, AnimatePresence } from "framer";

import slides from "./slides";

import Styled from "./Slider.styled";

const variants = {
  enter: {
    x: "100%",
    opacity: 0
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: {
    zIndex: 0,
    x: "-100%",
    opacity: 0
  }
};

const Slider = () => {
  const [slide, setSlide] = useState(0);

  const moveSlides = useCallback(() => {
    if (slide === slides.length - 1) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  }, [slide]);

  useEffect(() => {
    setTimeout(moveSlides, 5000);
  }, [moveSlides]);

  return (
    <Styled.Root>
      <Styled.Bordering>
        <AnimatePresence initial={false}>
          <Frame
            key={slide}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 50, damping: 300 },
              opacity: { duration: 0.5 }
            }}
            width="100%"
            height="100%"
          >
            <Styled.Image src={slides[slide]} />
          </Frame>
        </AnimatePresence>
      </Styled.Bordering>
    </Styled.Root>
  );
};

export default memo(Slider);

import styled from "styled-components";
import { motion } from "framer-motion";

const Root = styled.div`
  position: fixed;
  width: 300px;
  height: 100vh;
  background: gray;
  border-right: 1px solid black;
  z-index: 1;
`;

const Content = styled(motion.div)`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

export default {
  Root,
  Content
};

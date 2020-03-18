import styled from "styled-components";
import { motion } from "framer-motion";

const Root = styled.div`
  position: relative;
  left: 300px;
  width: calc(100vw - 300px);
  height: 100vh;
  background: gray;
  padding-top: 100px;
`;

const Bordering = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  margin: 0 auto;
  background: black;
  border: 2px solid black;
  border-radius: 10px;
  overflow: hidden;
`;

const Image = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
`;

export default {
  Root,
  Bordering,
  Image
};

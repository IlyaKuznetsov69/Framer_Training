import styled from "styled-components";

const Root = styled.div`
  width: 100vw;
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

const Image = styled.img`
  object-fit: cover;
`;

export default {
  Root,
  Bordering,
  Image
};

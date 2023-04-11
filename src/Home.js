import styled from "styled-components";
import { DrawBox, MemoDrawBox } from "./DrawBox";
import { mainStyle } from "./GlobalStyle";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${mainStyle.mainBgColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Home = () => {
  return (
    <>
      <Wrap>
        <MemoDrawBox />
      </Wrap>
    </>
  );
};

import styled from "styled-components";
import { PaletteColor } from "./ColorDb";

const CanvasWrap = styled.div`
  width: 80%;
  height: 80%;
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: relative;
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
`;

const Palette = styled.div`
  width: 50%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
`;

const ColorBtn = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid #f1f1f1;
  background-color: ${(props) => props.colorid};
  margin: 0.5rem;
`;

export const DrawBox = () => {
  return (
    <CanvasWrap>
      <Canvas></Canvas>
      <Palette>
        {PaletteColor.map((color) => (
          <ColorBtn colorid={color.colorId} />
        ))}
      </Palette>
    </CanvasWrap>
  );
};

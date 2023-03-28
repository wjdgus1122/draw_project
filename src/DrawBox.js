import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { PaletteColor, Tool } from "./ColorDb";
import {
  faPaintbrush,
  faFillDrip,
  faFont,
  faEraser,
} from "@fortawesome/free-solid-svg-icons";

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

const ToolBox = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const ToolBtn = styled.div`
  width: 3rem;
  height: 80%;
  font-size: 1.5rem;
  box-sizing: border-box;
  color: #1d1d1d;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #e1e1e1;
    font-size: 2rem;
  }
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
        <ToolBox>
          <ToolBtn>
            <FontAwesomeIcon icon={faPaintbrush} />
          </ToolBtn>
          <ToolBtn>
            <FontAwesomeIcon icon={faFillDrip} />
          </ToolBtn>
          <ToolBtn>
            <FontAwesomeIcon icon={faFont} />
          </ToolBtn>
          <ToolBtn>
            <FontAwesomeIcon icon={faEraser} />
          </ToolBtn>
        </ToolBox>
        {PaletteColor.map((color) => (
          <ColorBtn colorid={color.colorId} />
        ))}
      </Palette>
    </CanvasWrap>
  );
};

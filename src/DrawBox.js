import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { PaletteColor } from "./ColorDb";
import {
  faPaintbrush,
  faFillDrip,
  faFont,
  faEraser,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

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
  const canvasRef = useRef(null);
  const constextRef = useRef(null);
  const [ctx, setCtx] = useState();
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasWrap = document.querySelector(".canvasWrap");
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;

    const context = canvas.getContext("2d");
    context.strokeStyle = "black";
    context.lineWidth = 2.5;
    constextRef.current = context;

    setCtx(context);
  }, []);

  const startDrawing = () => {
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    setIsDrawing(false);
  };

  const drawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;

    if (ctx) {
      if (!isDrawing) {
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
      } else {
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
      }
    }
  };
  return (
    <CanvasWrap className="">
      <canvas
        className="drawCanvas"
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={drawing}
        onMouseLeave={finishDrawing}
      ></canvas>
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { PaletteColor } from "./ColorDb";
import {
  faPaintbrush,
  faFillDrip,
  faFont,
  faEraser,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";

const CanvasWrap = styled.div`
  width: 80%;
  height: 80%;
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: relative;
  overflow: hidden;
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
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 3.5rem;
  }
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
  font-size: 1rem;
  box-sizing: border-box;
  color: #1d1d1d;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    font-size: 2rem;
  }
  @media screen and (max-width: 768px) {
    :hover {
      font-size: 1rem;
    }
  }
`;

const ColorBtn = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid #f1f1f1;
  background-color: ${(props) => props.colorid};
  margin: 0.5rem;
  @media screen and (max-width: 768px) {
    width: 2rem;
    height: 2rem;
  }

  @media screen and (max-width: 300px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const DrawBox = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [ctx, setCtx] = useState();
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawColor, setDrawColor] = useState("black");
  let isPen = true;
  let drawData = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;
    const context = canvas.getContext("2d");
    context.strokeStyle = drawColor;
    context.lineWidth = 2.5;
    contextRef.current = context;
    setCtx(context);
  }, []);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.strokeStyle = drawColor;
    context.lineWidth = 2.5;
    contextRef.current = context;
    setCtx(context);
  }, [drawColor]);

  const startDrawing = () => {
    if (isPen) {
      setIsDrawing(true);
    } else {
    }
    console.log("start");
  };

  const finishDrawing = () => {
    setIsDrawing(false);
    console.log("finish");
  };

  const drawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;

    if (ctx) {
      if (isPen) {
        if (!isDrawing) {
          ctx.beginPath();
          ctx.moveTo(offsetX, offsetY);
        } else {
          ctx.lineTo(offsetX, offsetY);
          ctx.stroke();
        }
      } else {
        ctx.clearRect(offsetX, offsetY, 10, 10);
      }
    }
    console.log("draw");
  };

  return (
    <CanvasWrap>
      <canvas
        className="drawCanvas"
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={drawing}
        onMouseLeave={finishDrawing}
        onTouchStart={startDrawing}
        onTouchMove={drawing}
        onTouchEnd={finishDrawing}
      ></canvas>
      <Palette>
        <ToolBox>
          <ToolBtn
            onClick={() => {
              isPen = true;
            }}
            onTouchStart={() => (isPen = true)}
          >
            <FontAwesomeIcon icon={faPaintbrush} />
          </ToolBtn>
          <ToolBtn
            onClick={() => {
              isPen = false;
            }}
            onTouchStart={() => (isPen = false)}
          >
            <FontAwesomeIcon icon={faEraser} />
          </ToolBtn>
        </ToolBox>
        {PaletteColor.map((color) => (
          <ColorBtn
            colorid={color.colorId}
            onClick={() => {
              setDrawColor(`${color.colorId}`);
            }}
          />
        ))}
      </Palette>
    </CanvasWrap>
  );
};

export const MemoDrawBox = React.memo(DrawBox);

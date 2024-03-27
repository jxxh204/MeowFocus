import React from "react";
import styled from "styled-components";

interface CircularProgressProps {
  size: number;
  strokeWidth: number;
  percentage: number;
  color?: string;
}

const CircleWrapper = styled.div<{ size: number }>`
  position: relative;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

const CircleSVG = styled.svg`
  width: 100%;
  height: 100%;
`;

const CircleBackground = styled.circle<{ strokeWidth: number }>`
  fill: none;
  stroke: #f0f0f0;
  stroke-width: ${(props) => props.strokeWidth}px;
`;

const CircleProgress = styled.circle<{
  strokeWidth: number;
  circumference: number;
  offset: number;
}>`
  fill: none;
  stroke: #3498db;
  stroke-width: ${(props) => props.strokeWidth}px;
  stroke-dasharray: ${(props) => props.circumference};
  stroke-dashoffset: ${(props) => props.offset};
  transition: stroke-dashoffset 0.3s;
`;

const CircularProgress: React.FC<CircularProgressProps> = ({
  size,
  strokeWidth,
  percentage,
  color,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <CircleWrapper size={size}>
      <CircleSVG>
        <CircleBackground
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <CircleProgress
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          circumference={circumference}
          offset={offset}
        />
      </CircleSVG>
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="30px"
        fill={color ? color : "#3498db"}
      >
        {/* {percentage}% */}
      </text>
    </CircleWrapper>
  );
};

export default CircularProgress;

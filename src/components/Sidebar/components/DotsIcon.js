import React from "react";

export default function Icon({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill={color}
    >
      <g>
        <circle cx="5" cy="12"></circle>
        <circle cx="12" cy="12"></circle>
        <circle cx="19" cy="12"></circle>
      </g>
    </svg>
  );
}

import * as React from "react";

function SvgIconError(props) {
  return (
    <svg width={20} height={20} {...props}>
      <g fill="none" fillRule="evenodd">
        <circle cx={10} cy={10} r={10} fill="#FA5959" />
        <g fill="#FFF" transform="translate(9 5)">
          <rect width={2} height={7} rx={1} />
          <rect width={2} height={2} y={8} rx={1} />
        </g>
      </g>
    </svg>
  );
}

export default SvgIconError;

import * as React from "react";

function SvgIconHamburger(props) {
  return (
    <svg width={18} height={15} {...props}>
      <path
        fill="#242A45"
        fillRule="evenodd"
        d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"
      />
    </svg>
  );
}

export default SvgIconHamburger;

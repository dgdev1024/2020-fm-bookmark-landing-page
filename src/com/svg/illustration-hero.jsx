import * as React from "react";

function SvgIllustrationHero(props) {
  return (
    <svg width={657} height={466} {...props}>
      <defs>
        <filter
          id="illustration-hero_svg__a"
          width="118%"
          height="126.9%"
          x="-9%"
          y="-5.7%"
          filterUnits="objectBoundingBox"
        >
          <feOffset dy={2} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation={2}
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            result="shadowMatrixOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          id="illustration-hero_svg__b"
          width="126%"
          height="139%"
          x="-13%"
          y="-11.7%"
          filterUnits="objectBoundingBox"
        >
          <feOffset dy={30} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation={20}
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0.18243335 0 0 0 0 0.230632694 0 0 0 0 0.506057518 0 0 0 0.200120192 0"
          />
        </filter>
        <rect id="illustration-hero_svg__c" width={578} height={385} rx={26} />
        <rect
          id="illustration-hero_svg__e"
          width={536}
          height={346}
          y={3}
          rx={8}
        />
        <linearGradient
          id="illustration-hero_svg__d"
          x1="99.013%"
          x2="2.544%"
          y1="71.675%"
          y2="29.014%"
        >
          <stop offset="0%" stopColor="#151515" />
          <stop offset="100%" stopColor="#3D3D3D" />
        </linearGradient>
      </defs>
      <g
        fill="none"
        fillRule="evenodd"
        filter="url(#illustration-hero_svg__a)"
        transform="translate(39 9)"
      >
        <g transform="translate(.5 .5)">
          <g fillRule="nonzero">
            <use
              fill="#000"
              filter="url(#illustration-hero_svg__b)"
              xlinkHref="#illustration-hero_svg__c"
            />
            <use fill="#777" xlinkHref="#illustration-hero_svg__c" />
          </g>
          <rect
            width={574.23}
            height={381.865}
            x={2}
            y={2}
            fill="url(#illustration-hero_svg__d)"
            fillRule="nonzero"
            rx={25}
          />
          <g transform="translate(21.03 16.303)">
            <rect
              width={471.463}
              height={353.756}
              x={33}
              fill="#2A2A2A"
              fillRule="nonzero"
              opacity={0.1}
              rx={5}
            />
            <mask id="illustration-hero_svg__f" fill="#fff">
              <use xlinkHref="#illustration-hero_svg__e" />
            </mask>
            <use
              fill="#E8EAF6"
              fillRule="nonzero"
              xlinkHref="#illustration-hero_svg__e"
            />
            <g mask="url(#illustration-hero_svg__f)">
              <path fill="#5267DF" d="M-3.53 3.197h547v59h-547z" />
              <g transform="translate(22.47 17.197)" fill="#FFF">
                <circle cx={16} cy={16} r={16} opacity={0.245} />
                <circle cx={477} cy={16} r={16} opacity={0.104} />
                <g transform="translate(47 6)">
                  <rect width={120} height={6} opacity={0.75} rx={3} />
                  <rect width={64} height={6} y={14} opacity={0.25} rx={3} />
                </g>
              </g>
            </g>
            <g mask="url(#illustration-hero_svg__f)">
              <g transform="translate(57 96)">
                <rect width={261} height={316} fill="#FFF" rx={8} />
                <rect width={128} height={316} x={295} fill="#FFF" rx={8} />
                <rect
                  width={120}
                  height={6}
                  x={78.47}
                  y={38.197}
                  fill="#242A45"
                  opacity={0.5}
                  rx={3}
                />
              </g>
            </g>
          </g>
        </g>
        <g transform="translate(110 135)">
          <circle cx={16} cy={26} r={16} fill="#F98E5D" />
          <rect
            width={88}
            height={6}
            x={284}
            fill="#242A45"
            opacity={0.25}
            rx={3}
          />
          <rect
            width={88}
            height={6}
            x={284}
            y={20}
            fill="#242A45"
            opacity={0.25}
            rx={3}
          />
          <rect
            width={88}
            height={6}
            x={284}
            y={40}
            fill="#242A45"
            opacity={0.25}
            rx={3}
          />
          <rect
            width={88}
            height={6}
            x={284}
            y={60}
            fill="#242A45"
            opacity={0.25}
            rx={3}
          />
          <rect
            width={88}
            height={6}
            x={284}
            y={94}
            fill="#242A45"
            opacity={0.25}
            rx={3}
          />
          <rect
            width={88}
            height={6}
            x={284}
            y={114}
            fill="#242A45"
            opacity={0.25}
            rx={3}
          />
          <rect
            width={88}
            height={6}
            x={284}
            y={134}
            fill="#242A45"
            opacity={0.25}
            rx={3}
          />
          <rect
            width={64}
            height={6}
            x={47}
            y={30}
            fill="#242A45"
            opacity={0.25}
            rx={3}
          />
        </g>
        <g transform="translate(110 201)">
          <circle cx={16} cy={16} r={16} fill="#6AC6D6" />
          <rect
            width={120}
            height={6}
            x={47}
            y={6}
            fill="#242A45"
            opacity={0.5}
            rx={3}
          />
          <rect
            width={64}
            height={6}
            x={47}
            y={20}
            fill="#242A45"
            opacity={0.25}
            rx={3}
          />
        </g>
        <g transform="translate(110 257)">
          <circle cx={16} cy={16} r={16} fill="#A47ED4" />
          <rect
            width={120}
            height={6}
            x={47}
            y={6}
            fill="#242A45"
            opacity={0.5}
            rx={3}
          />
          <rect
            width={64}
            height={6}
            x={47}
            y={20}
            fill="#242A45"
            opacity={0.25}
            rx={3}
          />
        </g>
        <g transform="translate(110 313)">
          <circle cx={16} cy={16} r={16} fill="#EC7878" />
          <rect
            width={120}
            height={6}
            x={47}
            y={6}
            fill="#242A45"
            opacity={0.5}
            rx={3}
          />
          <rect
            width={64}
            height={6}
            x={47}
            y={20}
            fill="#242A45"
            opacity={0.25}
            rx={3}
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgIllustrationHero;
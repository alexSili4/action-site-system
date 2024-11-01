import { keyframes } from '@emotion/react';

const textGlitch = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translateX(-50%) translateY(-50%)
  }

  40%, 43% {
    transform: translateX(calc(-50% - 8px)) translateY(calc(-50% + 1px))
  }

  70% {
    transform: translateX(calc(-50% - 5px)) translateY(calc(-50% - 1px))
  }

  90% {
    transform: translateX(calc(-50% - 2px)) translateY(calc(-50% + 1px))
  }
`;

const firstAccentShadowGlitch = keyframes`
  from, 20%, 53%, 80%, to {
   transform: translateX(-50%) translateY(-50%) rotate(1deg)
  }

  40%, 43% {
       transform: translateX(-50%) translateY(-50%) rotate(3deg)

  }

  70% {
      transform: translateX(-50%) translateY(-50%) rotate(2deg)

  }

  90% {
       transform: translateX(-50%) translateY(-50%) rotate(1.5deg)

  }
`;

const secondAccentShadowGlitch = keyframes`
  from, 20%, 53%, 80%, to {
   transform: translateX(-50%) translateY(-50%) rotate(-1deg)
  }

  40%, 43% {
       transform: translateX(-50%) translateY(-50%) rotate(-3deg)

  }

  70% {
      transform: translateX(-50%) translateY(-50%) rotate(-2deg)

  }

  90% {
       transform: translateX(-50%) translateY(-50%) rotate(-1.5deg)

  }
`;

const wheelRotate = keyframes`
  0% {
    transform: translateX(-50%) translateY(-50%) rotate(0deg)
  }
  
  100% {
    transform: translateX(-50%) translateY(-50%) rotate(360deg)
  }
`;

const moveUpDown = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const moveDownUp = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const smoothPrizeImgRotate = keyframes`
  0% {
    transform:  rotate(0deg);
  }
  50% {
    transform: rotate(-10deg);
  }
  100% {
    transform:  rotate(10deg);
  }
`;

const animations = {
  textGlitch,
  firstAccentShadowGlitch,
  secondAccentShadowGlitch,
  wheelRotate,
  moveUpDown,
  moveDownUp,
  smoothPrizeImgRotate,
};

export default animations;

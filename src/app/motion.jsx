export function LtoR(delay) {
  return {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0, opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: delay,
      },
    },
  };
}

export function RtoL(delay) {
  return {
    offscreen: { x: 100, opacity: 0 },
    onscreen: {
      x: 0, opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: delay,
      },
    },
  };
}

export function BtoU(delay) {
  return {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0, opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: delay,
      },
    },
  };
}

export function HtoH(delay) {
  return {
    offscreen: { x: 0, opacity: 0 },
    onscreen: {
      x: 0, opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: delay,
      },
    },
  };
}
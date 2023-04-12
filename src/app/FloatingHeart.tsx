"use client";

import { useEffect, useRef, useState } from "react";

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function randomInt(min: number, max: number) {
  return Math.floor(random(min, max));
}

function* range(start: number, end: number) {
  for (let i = start; i < end; i++) {
    yield i;
  }
}

function sample<T>(arr: readonly T[]): T {
  const index = Math.floor(Math.random() * arr.length);
  const item = arr[index];

  if (item === undefined) {
    throw new Error("unexpected undefined");
  }

  return item;
}

function useDisplayableWidth(ref: React.RefObject<HTMLCanvasElement>): number {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (!ref.current?.parentElement) {
        return;
      }
      const { clientWidth } = ref.current.parentElement;
      setWidth(clientWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [ref]);

  return width;
}

type Heart = {
  type: string;
  x: number;
  y: number;
  direction: "left" | "right";
  size: number;
  speed: number;
  transparency: number;
};

type CreateHeartParams = {
  width: number;
  height: number;
};

function createHeart({ width, height }: CreateHeartParams): Heart {
  const direction = sample(["left", "right"] as const);

  const typeNum = randomInt(0, 10);

  return {
    type: typeNum < 3 ? "♥︎" : typeNum < 4 ? "*" : typeNum < 5 ? "。" : "♡",
    x: random(0, width),
    y: height,
    direction: direction,
    size: randomInt(24, 48),
    speed: random(0.8, 2.4),
    transparency: randomInt(0x80, 0xff),
  };
}

export const FloatingHeart: React.FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const width = useDisplayableWidth(ref);

  useEffect(() => {
    if (ref.current === null) {
      return;
    }

    const canvas = ref.current;

    const height = document.documentElement.scrollHeight;
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");

    if (ctx === null) {
      return;
    }

    const heartNum = Math.floor(width / 40);
    const hearts = [...range(0, heartNum)].map(() =>
      createHeart({ width, height })
    );

    const updateHearts = () => {
      hearts.forEach((heart) => {
        heart.x += Math.sin(heart.y * 0.015) * 1.5;
        heart.y -= heart.speed;
      });
    };

    const drawHearts = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      hearts.forEach((heart) => {
        if (heart.y < 0 - heart.size) {
          Object.assign(heart, createHeart({ width, height }));
          return;
        }

        ctx.fillStyle = `#ffffff${heart.transparency.toString(16)}`;
        ctx.font = `${heart.size}px serif`;
        ctx.textAlign = "left";
        if (heart.direction === "right") {
          ctx.save();
          ctx.scale(-1, 1);
          ctx.fillText(heart.type, -heart.x, heart.y);
          ctx.restore();
        } else {
          ctx.fillText(heart.type, heart.x, heart.y);
        }
      });
    };

    let handle = 0;
    const frame = () => {
      updateHearts();
      drawHearts();
      handle = requestAnimationFrame(frame);
    };

    frame();

    return () => {
      cancelAnimationFrame(handle);
    };
  }, [ref, width]);

  return <canvas ref={ref} />;
};

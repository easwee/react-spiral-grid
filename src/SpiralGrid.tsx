import React, { Children, FC, useEffect, useRef } from "react";
import { SpiralGridProps } from "./SpiralGrid.interfaces";

const innerDimensions = (node: HTMLElement) => {
  const style = getComputedStyle(node);

  let width = node.clientWidth;
  let height = node.clientHeight;

  width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
  height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);

  return { width, height };
};

const getSpiralPoint = (n: number): number[] => {
  if (n === 0) return [0, 0, 0];

  --n;

  const r = Math.floor((Math.sqrt(n + 1) - 1) / 2) + 1;
  const p = (8 * r * (r - 1)) / 2;
  const en = r * 2;
  const a = (1 + n - p) % (r * 8);
  const pos = [0, 0, r];

  switch (Math.floor(a / (r * 2))) {
    case 0:
      pos[0] = a - r;
      pos[1] = -r;
      break;
    case 1:
      pos[0] = r;
      pos[1] = (a % en) - r;
      break;
    case 2:
      pos[0] = r - (a % en);
      pos[1] = r;
      break;
    case 3:
      pos[0] = -r;
      pos[1] = r - (a % en);
      break;
    default:
      break;
  }

  return pos;
};

const getSpiralPoints = (n: number) => {
  const points = [];

  for (let i = 0; i <= n; i++) {
    points.push(getSpiralPoint(i));
  }

  return points;
};

export const SpiralGrid: FC<SpiralGridProps> = ({ children, config }) => {
  const { item } = config;

  const gridRef = useRef<any>();
  const scrollStatusRef = useRef({
    shouldScroll: false,
    top: 0,
    left: 0,
    x: 0,
    y: 0,
  });

  const points: number[][] = children
    ? getSpiralPoints(Children.count(children) - 1)
    : [];
  const wrapperWidth = points[points.length - 1][2] * 2 * item.width;
  const wrapperHeight = points[points.length - 1][2] * 2 * item.height;

  useEffect(() => {
    if (gridRef?.current) {
      const grid = gridRef.current;
      const parentDimensions = innerDimensions(grid.parentElement);
      grid.setAttribute(
        "style",
        `
            width: ${parentDimensions.width}px;
            height: ${parentDimensions.height}px;
            overflow: scroll;
        `
      );
      grid.scrollTo(
        (grid.scrollWidth - grid.offsetWidth) / 2,
        (grid.scrollHeight - grid.offsetHeight) / 2
      );
    }
  }, []);

  const mouseDownHandler = () => (event: React.MouseEvent) => {
    const grid = gridRef.current;

    scrollStatusRef.current = {
      shouldScroll: true,
      left: grid.scrollLeft,
      top: grid.scrollTop,
      x: event.clientX,
      y: event.clientY,
    };
  };

  const mouseMoveHandler = () => (event: React.MouseEvent) => {
    event.preventDefault();

    const scrollStatus = scrollStatusRef.current;

    if (!scrollStatus.shouldScroll) {
      return;
    }

    const distanceX = event.clientX - scrollStatus.x;
    const distanceY = event.clientY - scrollStatus.y;

    gridRef.current.scrollTo(
      scrollStatus.left - distanceX,
      scrollStatus.top - distanceY
    );
  };

  const mouseUpHandler = () => (event: React.MouseEvent) => {
    const grid = gridRef.current;

    scrollStatusRef.current = {
      shouldScroll: false,
      left: grid.scrollLeft,
      top: grid.scrollTop,
      x: event.clientX,
      y: event.clientY,
    };
  };

  const mouseOutHandler = () => {
    scrollStatusRef.current.shouldScroll = false;
  };

  return (
    <div
      ref={gridRef}
      onMouseDown={mouseDownHandler}
      onMouseMove={mouseMoveHandler}
      onMouseUp={mouseUpHandler}
      onMouseOut={mouseOutHandler}
    >
      <div
        style={{
          position: "relative",
          width: wrapperWidth,
          height: wrapperHeight,
          margin: "0 auto",
        }}
      >
        {points.map((point, index: number) => {
          const child = Children.toArray(children)[index];

          return (
            <div
              key={String(point[0]) + String(point[1])}
              style={{
                boxSizing: "border-box",
                position: "absolute",
                width: item.width,
                height: item.height,
                top: `calc(50% + ${item.height * point[0]}px - ${
                  item.height
                }px)`,
                left: `calc(50% + ${item.width * point[1]}px)`,
                transform: `translate(${item.width / 2}, ${item.height / 2})`,
              }}
            >
              {child && child}
            </div>
          );
        })}
      </div>
    </div>
  );
};

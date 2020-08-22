import React from "react";
import "./HeroCard.css";
import { useSpring, animated } from "react-spring";

const HeroCard = ({ isActive, onItemClick, image, name }) => {
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}>
      <div
        onClick={() => {
          onItemClick();
        }}
        className={`hero_card ${isActive && "active"}`}
        style={{
          background: `linear-gradient(to top right, rgba(255,0,0,.3), rgba(255,0,0,.5)),url(${image})`,
        }}>
        <span>{name}</span>
      </div>
    </animated.div>
  );
};
export default HeroCard;

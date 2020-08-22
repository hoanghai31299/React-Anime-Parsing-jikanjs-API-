import React, { useRef, useEffect } from "react";
import "./HeroInfo.css";
import { animated, useSpring } from "react-spring";
// import HeroPictures from "../HeroPictures";
export default ({ info }) => {
  const pTag = useRef(null);
  useEffect(() => {
    let about = info.about.replace(/\\n/g, "<br />");
    pTag.current.innerHTML = about;
  });
  const scale = useSpring({
    from: {
      transform: "translateX(-20%)",
      opacity: 0,
    },
    to: {
      transform: "translateX(0)",
      opacity: 1,
    },
  });
  return (
    <animated.div className="hero_info" style={scale}>
      <h1>ABOUT</h1>
      <div className="about">
        <div className="cover">
          <img src={info.image_url} alt="hero" />
          <span>
            {info.name}
            <br />
            <span>({info.name_kanji})</span>
          </span>
        </div>
        <p ref={pTag}></p>
      </div>
    </animated.div>
  );
};

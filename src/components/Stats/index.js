import React, { useState, useEffect } from "react";
import jikanjs from "jikanjs";
import { useSpring, animated } from "react-spring";
import "./Stats.css";
import { Container } from "reactstrap";
import Number from "./Number";
import Skeleton from "react-loading-skeleton";
const Stats = ({ anime }) => {
  const fade = useSpring({
    from: { opacity: 0, transform: "translateY(-10%)" },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  });
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      const get = await jikanjs.loadAnime(anime);
      setMovie(get);
    };
    getMovie();
  }, [anime]);
  return (
    (
      <div>
        <Container fluid={true}>
          <animated.div className="stats" style={fade}>
            <Number movie={movie} />
            <div className="trailer">
              <iframe
                title="trailer"
                width={600}
                height={300}
                src={movie.trailer_url}
                frameborder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"></iframe>
              <div className="title">
                <h1>{movie.title}</h1>
                <span>[{movie.title_japanese}]</span>
              </div>
            </div>
          </animated.div>
        </Container>
      </div>
    ) || <Skeleton />
  );
};
export default Stats;

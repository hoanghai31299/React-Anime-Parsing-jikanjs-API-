import React, { useState, useEffect } from "react";
import HeroList from "../HeroList";
import jikanjs from "jikanjs";
import "./reponsive.css";
import { Container, Row, Col } from "reactstrap";
import HeroInfo from "../HeroInfo";
import { useSpring, animated } from "react-spring";
export default ({ anime }) => {
  const fade = useSpring({
    from: { opacity: 0, transform: "translateY(-30%)" },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  });
  const [heros, setHeros] = useState([]);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState(false);
  const [isExpand, setIsExpand] = useState(false);
  useEffect(() => {
    async function list() {
      const heroList = await jikanjs.loadAnime(anime, "characters_staff");
      setHeros(heroList.characters);
    }
    list();
  });
  const pageDown = () => {
    if (page === 1) return;
    let curr = page;
    setPage(--curr);
  };
  const pageUp = () => {
    if (page === Math.ceil(heros.length / 3)) return;
    let curr = page;
    setPage(++curr);
  };
  const onHeroClick = async (id) => {
    if (id === info.mal_id) {
      setIsExpand(!isExpand);
      return;
    }
    const heroInfo = await jikanjs.loadCharacter(id);
    setInfo(heroInfo);
    setIsExpand(true);
  };
  return (
    <animated.div style={fade}>
      <Container fluid={true}>
        <Row className="res_list">
          <Col lg="2" md="12" className="res_hero_list">
            <HeroList
              pageUp={pageUp}
              pageDown={pageDown}
              heros={heros}
              page={page}
              onHeroClick={onHeroClick}
              activeHero={isExpand ? info.mal_id : -1}
            />
          </Col>
          <Col lg="10" md="12" className="infomation">
            {isExpand && <HeroInfo info={info} />}
          </Col>
        </Row>
      </Container>
    </animated.div>
  );
};

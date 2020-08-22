import React from "react";
import HeroCard from "../HeroCard";
import "./HeroList.css";
export default ({ activeHero, pageUp, pageDown, heros, page, onHeroClick }) => {
  let heroPerPage = heros.slice((page - 1) * 3, page * 3);
  return (
    <div className="hero_list">
      <i
        className={`fa fa-chevron-up fa-3x ${page === 1 ? "non-display" : ""}`}
        onClick={pageDown}></i>
      <div className="hero_wrapper">
        {heroPerPage.map((hero, index) => {
          return (
            <HeroCard
              onItemClick={() => {
                onHeroClick(hero.mal_id);
              }}
              isActive={activeHero === hero.mal_id}
              key={index}
              image={hero.image_url}
              name={hero.name}
            />
          );
        })}
      </div>
      {
        <i
          className={`fa fa-chevron-down fa-3x ${
            page === Math.ceil(heros.length / 3) ? "non-display" : ""
          }`}
          onClick={pageUp}></i>
      }
    </div>
  );
};

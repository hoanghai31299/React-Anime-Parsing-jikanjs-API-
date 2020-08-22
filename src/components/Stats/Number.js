import React from "react";
import "./Stats.css";
const Number = ({ movie }) => {
  const {
    score,
    rank,
    scored_by,
    members,
    popularity,
    premiered,
    status,
  } = movie;
  return (
    <div className="number-stats">
      <div className="score">
        <span>score</span>
        <span>{score}</span>
        <span>{scored_by} voted</span>
      </div>
      <div className="details">
        <div>
          <span className="rank">Ranked: #{rank}</span>
          <span classNAme="popuplar">Popular: #{popularity}</span>
          <span className="member">Members: {members}</span>
        </div>
        <div className="catalory">
          <span>Release: {premiered}</span>
          <span>Studio: Madhouse</span>
          <span>Status: {status}</span>
        </div>
      </div>
    </div>
  );
};
export default Number;

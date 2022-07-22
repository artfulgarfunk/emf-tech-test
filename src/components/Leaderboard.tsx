import React from "react";
import { CompaniesList } from "../model";
import CompanySummary from "./CompanySummary";

const Leaderboard = ({ companiesList }: CompaniesList) => {
  return (
    <div className="leaderboard">
      <h2> Circulytics Leaderboard </h2>

      <div className="leaderboard-categories leaderboard-titles">
        <div>Name</div>
        <div>Industry</div>
        <div className="score">Score</div>
      </div>
      {companiesList.map((company, i) => {
        return (
          <CompanySummary
            key={i}
            name={company.name}
            score={company.score}
            industry={company.industry}
          />
        );
      })}
    </div>
  );
};

export default Leaderboard;

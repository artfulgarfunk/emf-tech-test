import React from "react";
import { Company } from "../model";

function CompanySummary({ name, industry, score }: Company) {
  return (
    <div className="leaderboard-elements">
      <div>{name}</div>
      <div>{industry}</div>
      <div className="score">{score}</div>
    </div>
  );
}

export default CompanySummary;

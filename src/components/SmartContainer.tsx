import React from "react";
import { Company, Industry, Sortable } from "../model";
import AddCompanyForm from "./AddCompanyForm";
import Leaderboard from "./Leaderboard";
import { useState } from "react";
import SortBy from "./SortBy";

const SmartContainer = () => {
  const [companies, setCompanies] = useState([
    { name: "Alphabet", score: 0.7, industry: Industry.Energy },
    { name: "Bing", score: 0.5, industry: Industry.Finance },
    { name: "Fairphone", score: 0.9, industry: Industry.Infrastructure },
  ]);
  const [hasError, setError] = useState(false);

  function updateCompaniesList(company: Company) {
    for (let i = 0; i < companies.length; i++) {
      if (companies[i].name === company.name) {
        console.log("Error: company already exists");
        setError(true);
        return;
      }
    }

    setError(false);
    setCompanies([
      ...companies,
      {
        name: company.name,
        industry: company.industry,
        score: company.score,
      },
    ]);
  }

  function sortByX(param: string) {
    switch (param) {
      case Sortable.Name:
        setCompanies([...companies.sort((a, b) => (a.name < b.name ? -1 : 1))]);
        break;
      case Sortable.Name_Reversed:
        setCompanies([...companies.sort((a, b) => (a.name > b.name ? -1 : 1))]);
        break;
      case Sortable.Score:
        setCompanies([
          ...companies.sort((a, b) => (a.score < b.score ? -1 : 1)),
        ]);
        break;
      case Sortable.Score_Reversed:
        setCompanies([
          ...companies.sort((a, b) => (a.score > b.score ? -1 : 1)),
        ]);
        break;
    }
  }

  return (
    <div>
      <Leaderboard companiesList={companies} />
      {hasError && (
        <span className="input-error">
          This company has already been listed
        </span>
      )}
      <AddCompanyForm
        updateFunc={updateCompaniesList}
        industries={Object.values(Industry)}
      />
      <SortBy sortBy={sortByX} sortables={Object.values(Sortable)} />
    </div>
  );
};

export default SmartContainer;

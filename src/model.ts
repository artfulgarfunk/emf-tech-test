export enum Industry {
  Agriculture = "Agriculture",
  Consumer = "Consumer/end products",
  Energy = "Energy",
  Finance = "Finance",
  Infrastructure = "Infrastructure",
  Services = "Services",
  Transportation = "Transportation",
  UpstreamProcessing = "Upstream processing",
}

export enum Sortable {
  Name = "Alphabetical",
  Name_Reversed = "Reverse alphabetical",
  Score = "Score (low to high)",
  Score_Reversed = "Score (high to low)",
}

export interface Company {
  name: string;
  score: number;
  industry: Industry;
}

export interface CompaniesList {
  companiesList: Company[];
}

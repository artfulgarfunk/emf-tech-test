import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Industry, Company } from "../model";
import { decimalRange } from "../Utils";

interface AddCompanyFormProps {
  updateFunc: (params: Company) => void;
  industries: string[];
}

function AddCompanyForm({ updateFunc, industries }: AddCompanyFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Company>();
  const onSubmit: SubmitHandler<Company> = (company) => {
    updateFunc(company);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="add_company_form">
        <input
          className="input_name"
          defaultValue=""
          {...register("name", {
            required: "This is required",
            maxLength: {
              value: 32,
              message: "Maximum length is 32 characters",
            },
          })}
          placeholder="Company Name"
        />

        <select className="dropdown" {...register("industry")}>
          {industries.map((industry: string, i: number) => {
            return (
              <option key={industry} value={industry}>
                {" "}
                {Object.values(Industry)[i]}{" "}
              </option>
            );
          })}
        </select>

        <select
          className="dropdown"
          {...register("score", { required: "This is required" })}
        >
          {decimalRange(1).map((n, i) => {
            return (
              <option key={i} value={n}>
                {" "}
                {n}{" "}
              </option>
            );
          })}
        </select>
        <input type="submit" className="btn-submit" value="Add" />
      </form>
      {errors.name && (
        <span className="input-error">Company name is required</span>
      )}
    </div>
  );
}
export default AddCompanyForm;

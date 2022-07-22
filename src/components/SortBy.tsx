import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface SortByProps {
  sortBy: (params: string) => void;
  sortables: string[];
}

const SortBy = ({ sortBy, sortables }: SortByProps) => {
  const { register, handleSubmit } = useForm<{ sortBy: string }>();
  const onSubmit: SubmitHandler<{ sortBy: string }> = (param) => {
    sortBy(param.sortBy);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="user_input">
        <div> Sort By: </div>
        <select {...register("sortBy")} className="dropdown">
          {sortables.map((s: string) => {
            return <option key={s}>{s}</option>;
          })}
        </select>
        <input type="submit" value="Sort" className="btn-submit" />
      </form>
    </div>
  );
};

export default SortBy;

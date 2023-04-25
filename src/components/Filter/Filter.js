import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { FilterForm, FilterInput } from "./Filter.styled";

export const Filter = ({ setFilter, filterVal }) => {
  const { register } = useForm({ defaultValues: { filter_option: filterVal } });

  return (
    <FilterForm
      onChange={(evt) => {
        const filterValue = evt.target.value;
        setFilter(filterValue);
      }}
    >
      <FilterInput {...register("filter_option")}>
        <option key={nanoid()} value={"all"}>
          all
        </option>
        <option key={nanoid()} value={"follow"}>
          follow
        </option>
        <option key={nanoid()} value={"following"}>
          following
        </option>
        {/* {filterOptionsArr.map((filterOption) => (
          <option key={nanoid()} value={filterOption} defaultValue={false}>
            {filterOption}
          </option>
        ))} */}
      </FilterInput>
    </FilterForm>
  );
};

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  filterVal: PropTypes.string.isRequired,
};

import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";

const Select = (props) => {
  const dispatch = useDispatch();

  const handleSelect = (event) => {
    const option = event.target.value;
    option === "None" || option === "All"
      ? dispatch(getCountries())
      : dispatch(props.funtion(option));
  };

  return (
    <div>
      <select className="select" onChange={handleSelect}>
        {props.list.map((option) => {
          return (
            <option value={option.name} key={option.name}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;

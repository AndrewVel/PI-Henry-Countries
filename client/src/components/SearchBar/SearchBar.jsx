import "./SearchBarModules.css";
import {useDispatch} from "react-redux"
import { getCountriesByName } from "../../redux/actions";


const SearchBar = () => {

  const dispatch=useDispatch()

  const handleInputChange =(event)=>{
    const newQuery = event.target.value
      dispatch(getCountriesByName(newQuery))
  }
  
 
  return (
    <div>
      <input 
      className="barra" 
      placeholder="Write the country you are looking for" 
      type="search" 
      onChange={handleInputChange}/>
    </div>
  );
};
export default SearchBar;

import {combineReducers} from "redux";
import NameReducer from "./NameReducer";

const RootReducer = combineReducers({

  Name: NameReducer,
  

  
});

export default RootReducer
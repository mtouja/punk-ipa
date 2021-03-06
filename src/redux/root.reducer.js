import { combineReducers } from "redux";
import beerSlice from "./reducers/Beers/beers.reducer";

const rootReducer = combineReducers({
  beers: beerSlice.reducer
});

export default rootReducer;

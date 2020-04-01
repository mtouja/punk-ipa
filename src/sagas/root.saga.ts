import { all, takeLatest } from "redux-saga/effects";
import { getAllBeers } from "./Beers/beer.saga";
import beerSlice from "../redux/reducers/Beers/beers.reducer";

export default function* rootSaga() {
  yield all([takeLatest(beerSlice.actions.getAllRequest, getAllBeers)]);
}

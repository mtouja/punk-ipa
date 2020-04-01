import { AppState } from "../../../index";
import { Beer } from "../../../models/Beer";

export const getAllBeers = (state: AppState): Beer[] | undefined => {
  return state.beers.beers;
};

// export const getBeer = (state: AppState): Beer | undefined => {
//   return state.beers.beer;
// };

export const getBeerError = (state: AppState): string | undefined => {
  return state.beers.error;
};

export const isFetching = (state: AppState): boolean => {
  return state.beers.fetching;
};

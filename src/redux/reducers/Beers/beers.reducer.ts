import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Beer } from "../../../models/Beer";

// Typage du state:
interface State {
  beer?: Beer;
  beers?: Beer[];
  fetching: boolean;
  error?: string;
}

// State initial:
const initialState: State = {
  beer: undefined,
  beers: [],
  error: undefined,
  fetching: false
};

const slice = createSlice({
  name: "@@app/beer",
  initialState: initialState,
  reducers: {
    // Get all beers:
    getAllRequest: (state: State) => {
      state.beer = undefined;
      state.fetching = true;
      state.error = undefined;
    },
    getAllSuccess: (state: State, action: PayloadAction<Beer>) => {
      state.beer = action.payload;
      state.fetching = false;
      state.error = undefined;
    },
    getAllFailure: (state: State, action: PayloadAction<string>) => {
      state.beer = undefined;
      state.fetching = false;
      state.error = action.payload;
    }
  }
});

export default slice;

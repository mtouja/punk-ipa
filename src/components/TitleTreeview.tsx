import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Beer } from "../models/Beer";
import beerSlice from "../redux/reducers/Beers/beers.reducer";
import { getAllBeers } from "../redux/reducers/Beers/beers.selectors";

const TitleTreeview = () => {
  const dispatch = useDispatch();
  const allBeers: Beer[] | undefined = useSelector(getAllBeers);

  useEffect(() => {
    dispatch(beerSlice.actions.getAllRequest());
  }, []);

  console.log(allBeers);
  return (
    <div>
      {allBeers &&
        allBeers.map((beer: Beer, index: number) => <div>{beer.name}</div>)}
      <h1>test</h1>
      <button>get beers</button>
    </div>
  );
};

export default TitleTreeview;

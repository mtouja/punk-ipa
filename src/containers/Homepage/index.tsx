import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleTreeview from "../../components/TitleTreeview/TitleTreeview";
import { Beer } from "../../models/Beer";
import beerSlice from "../../redux/reducers/Beers/beers.reducer";
import { getAllBeers } from "../../redux/reducers/Beers/beers.selectors";


const HomePage = () => {
  const dispatch = useDispatch();
  const allBeers: Beer[] | undefined = useSelector(getAllBeers);

  useEffect(() => {
    dispatch(beerSlice.actions.getAllRequest());
  }, [dispatch]);
  return (
    <>
      <TitleTreeview beers={allBeers}/>
    </>
  );
};

export default HomePage;

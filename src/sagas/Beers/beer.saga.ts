import { SagaIterator } from "redux-saga";
import { call, put } from "redux-saga/effects";
import { Beer } from "../../models/Beer";
import slice from "../../redux/reducers/Beers/beers.reducer";
import beerService from "../../services/api/api-services";

export function* getAllBeers(): SagaIterator {
  try {
    const response: Beer[] = yield call(beerService.getAllBeers);
    // @ts-ignore
    yield put(slice.actions.getAllSuccess(response));
  } catch (error) {
    yield put(slice.actions.getAllFailure(error));
  }
}

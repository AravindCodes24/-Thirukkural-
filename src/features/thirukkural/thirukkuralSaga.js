// src/features/thirukkural/thirukkuralSaga.js
import { call, put, takeLatest } from 'redux-saga/effects'
import {
  fetchThirukkuralRequest,
  fetchThirukkuralSuccess,
  fetchThirukkuralFailure,
} from './thirukkuralSlice'

function fetchKural(kuralNumber) {
  return fetch(`https://getthirukkural.appspot.com/api/3.0/kural/${kuralNumber}?appid=18c2aukokxmoz`)
    .then((res) => res.json())
}

function* handleFetchKural(action) {
  try {
    const data = yield call(fetchKural, action.payload)
    yield put(fetchThirukkuralSuccess(data))
  } catch (error) {
    yield put(fetchThirukkuralFailure(error.message))
  }
}

export default function* thirukkuralSaga() {
  yield takeLatest(fetchThirukkuralRequest.type, handleFetchKural)
}

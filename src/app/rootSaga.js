// src/app/rootSaga.js
import { all } from 'redux-saga/effects'
import thirukkuralSaga from '../features/thirukkural/thirukkuralSaga'

export default function* rootSaga() {
  yield all([thirukkuralSaga()])
}

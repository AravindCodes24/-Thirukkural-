// src/app/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit'
import thirukkuralReducer from '../features/thirukkural/thirukkuralSlice'

const rootReducer = combineReducers({
  thirukkural: thirukkuralReducer,
})

export default rootReducer

import { combineReducers } from "@reduxjs/toolkit"
import { all } from 'redux-saga/effects'
import volunteerCall, { volunteerSaga } from "../volunteerRedux"
import coreCall, { coreSaga } from "../coreRedux"

const rootReducer = combineReducers({ coreCall, volunteerCall })

export function* rootSaga() {
  yield all([
    coreSaga(),
    volunteerSaga(), 
  ])
}

export default rootReducer
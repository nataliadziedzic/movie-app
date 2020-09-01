import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import loadingReducer from "./loadingReducer"

const allReducers = combineReducers({
    movieReducer,
    loadingReducer,
})

export default allReducers
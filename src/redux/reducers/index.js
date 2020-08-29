import { combineReducers } from "redux";
import movieReducer from "./movieReducer";

const allReducers = combineReducers({
    movieReducer,
})

export default allReducers
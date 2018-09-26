import { createStore, combineReducers, applyMiddleware } from "redux";
import termReducer from "./reducers/termReducer";
import videosReducer from "./reducers/videosReducer";
import selectedVideoReducer from "./reducers/selectedVideoReducer";

export default createStore(
    combineReducers({
        term: termReducer,
        videos: videosReducer,
        selectedVideo: selectedVideoReducer
    })
);
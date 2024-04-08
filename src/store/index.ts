import { createStore, combineReducers } from "redux";
import { postInfosReducer } from "./postInfo/reducers";
import { highlightsReducer } from "./highlight/reducers";
import { announcesReducer } from "./announce/reducers";

const rootReducer = combineReducers({
  postInfo: postInfosReducer,
  highlight: highlightsReducer,
  announce: announcesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;

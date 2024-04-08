import {
  PostInfo,
  PostInfoAction,
  PostInfoActionTypes,
  PostInfoState,
} from "./types";

const initialState: PostInfoState = {
  postInfos: [],
};

export const postInfosReducer = (
  state: PostInfo[] = initialState.postInfos,
  action: PostInfoAction
): PostInfo[] => {
  switch (action.type) {
    case PostInfoActionTypes.ADD_POST_INFO:
      return [...state, action.payload];
	case PostInfoActionTypes.ADD_ALL_POST_INFO:
		return action.payload;
    default:
      return state;
  }
};

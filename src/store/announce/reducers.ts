import {
  Announce,
  AnnounceAction,
  AnnounceActionTypes,
  AnnounceState,
} from "./types";

const initialState: AnnounceState = {
  announces: [],
};

export const announcesReducer = (
  state: Announce[] = initialState.announces,
  action: AnnounceAction
): Announce[] => {
  switch (action.type) {
    case AnnounceActionTypes.ADD_ANNOUNCE:
      return [...state, action.payload];
    case AnnounceActionTypes.ADD_ALL_ANNOUNCE:
      return action.payload;
    default:
      return state;
  }
};

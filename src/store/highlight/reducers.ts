import {
  Highlight,
  HighlightAction,
  HighlightActionTypes,
  HighlightState,
} from "./types";

const initialState: HighlightState = {
  highlights: [],
};

export const highlightsReducer = (
  state: Highlight[] = initialState.highlights,
  action: HighlightAction
): Highlight[] => {
  switch (action.type) {
    case HighlightActionTypes.ADD_HIGHLIGHT:
      return [...state, action.payload];
    case HighlightActionTypes.ADD_ALL_HIGHLIGHT:
      return action.payload;
    default:
      return state;
  }
};

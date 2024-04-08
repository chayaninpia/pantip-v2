import {
  AddAllHighlightAction,
  AddHighlightAction,
  Highlight,
  HighlightActionTypes,
} from "./types";

export const addHighlight = (highlight: Highlight): AddHighlightAction => ({
  type: HighlightActionTypes.ADD_HIGHLIGHT,
  payload: highlight,
});

export const addAllHighlight = (
  highlights: Highlight[]
): AddAllHighlightAction => ({
  type: HighlightActionTypes.ADD_ALL_HIGHLIGHT,
  payload: highlights,
});

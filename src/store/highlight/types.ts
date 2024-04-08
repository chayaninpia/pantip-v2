export interface Highlight {
    name: string;
    message: string;
    weight: number;
    image_url: string[];
    post_url: string;
}

export interface HighlightState {
  highlights: Highlight[];
}

export enum HighlightActionTypes {
  ADD_HIGHLIGHT = "ADD_HIGHLIGHT",
  ADD_ALL_HIGHLIGHT = "ADD_ALL_HIGHLIGHT",
}

export interface AddHighlightAction {
  type: HighlightActionTypes.ADD_HIGHLIGHT;
  payload: Highlight;
}

export interface AddAllHighlightAction {
  type: HighlightActionTypes.ADD_ALL_HIGHLIGHT;
  payload: Highlight[];
}

export type HighlightAction = AddHighlightAction | AddAllHighlightAction;

export interface Announce {
  announce_id: number;
  category_name: string;
  type: string;
  display_message: string;
  created_time: string;
}

export interface AnnounceState {
  announces: Announce[];
}

export enum AnnounceActionTypes {
  ADD_ANNOUNCE = "ADD_ANNOUNCE",
  ADD_ALL_ANNOUNCE = "ADD_ALL_ANNOUNCE",
}

export interface AddAnnounceAction {
  type: AnnounceActionTypes.ADD_ANNOUNCE;
  payload: Announce;
}

export interface AddAllAnnounceAction {
  type: AnnounceActionTypes.ADD_ALL_ANNOUNCE;
  payload: Announce[];
}

export type AnnounceAction = AddAnnounceAction | AddAllAnnounceAction;

import {
  AddAllAnnounceAction,
  AddAnnounceAction,
  Announce,
  AnnounceActionTypes,
} from "./types";

export const addAnnounce = (announce: Announce): AddAnnounceAction => ({
  type: AnnounceActionTypes.ADD_ANNOUNCE,
  payload: announce,
});

export const addAllAnnounce = (
  announces: Announce[]
): AddAllAnnounceAction => ({
  type: AnnounceActionTypes.ADD_ALL_ANNOUNCE,
  payload: announces,
});


import {HomeState, HomeActionInterface, HomeActionType } from "./types";

const initialState: HomeState = {
};

export function todoReducer(state = initialState, action: HomeActionInterface): HomeState {
	switch (action.type) {
		case HomeActionType.HOME:
			return {};
		default:
			return state;
	}
}
import { HomeActionInterface, HomeActionType, HomeState } from "./types";

export function testHome(home: HomeState): HomeActionInterface {
	return {
		type: HomeActionType.HOME,
		payload: home,
	};
}
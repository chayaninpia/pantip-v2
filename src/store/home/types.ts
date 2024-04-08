export interface HomeState {}

export interface HomeState {}

export enum HomeActionType {
    HOME = 'home',
}
export type HomeAction = HomeActionType;

export interface HomeActionInterface {
    type: HomeAction;
    payload: any;
}
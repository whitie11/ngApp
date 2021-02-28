import { Action, createReducer, on } from '@ngrx/store';
import { Duty } from 'src/app/modules/rosta/models/duty';
import * as RostaActions from './rosta.actions';

export interface RostaState {
    isWorking: boolean;
    duties: Duty[];
    dateFrom: Date;
    staffIdList: number[];
}

export const initialState: RostaState = {
    isWorking: false,
    duties: [],
    dateFrom: new Date('2021,1,8'),
    staffIdList: [1, 2, 3, 5],
};


const reducer = createReducer(
    initialState,
    on(RostaActions.SetDateFrom, (state: RostaState, { dateFrom }) => {
        return { ...state, dateFrom, };
    }),
    on(RostaActions.SetStaffIdList, (state: RostaState, { staffIdList }) => {
        return { ...state, staffIdList, };
    }),
    on(RostaActions.GetDuties, (state: RostaState, { }) => {
        return { ...state, isWorking: true };
    }),
    on(RostaActions.GetDutiesSuccess, (state: RostaState, { duties }) => {
        return { ...state, isWorking: false, duties };
    }),
    on(RostaActions.GetDutiesFailure, (state: RostaState, { }) => {
        return { ...state, isWorking: false };
    }),
);

export function rostaReducer(state: RostaState | undefined, action: Action) {
    return reducer(state, action);
}


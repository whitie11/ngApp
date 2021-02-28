import { Action, createAction, props } from '@ngrx/store';
import { Duty } from 'src/app/modules/rosta/models/duty';


export const SetDateFrom = createAction(
  '[Rosta] Set date from',
  props<{ dateFrom: Date}>()
);

export const SetStaffIdList = createAction(
  '[Rosta] Set staffList',
  props<{ staffIdList: number[]}>()
);

export const SetDutyIdList = createAction(
  '[Rosta] Set dutyList',
  props<{ dutyIdList: number[]}>()
);


export const GetDuties = createAction(
  '[Rosta] Get duties',
);

export const GetDutiesSuccess = createAction(
  '[Rosta] Get duties success',
  props<{ duties: Duty[]}>()
);

export const GetDutiesFailure = createAction(
  '[Rosta] Get duties failure',
  props<{ error: any}>()
);




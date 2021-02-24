import { createSelector, createFeatureSelector } from '@ngrx/store';
import { RostaState } from './rosta.reducers';

export const selectRostaState = createFeatureSelector<RostaState>('rosta');

export const dutiesFromStore = createSelector(selectRostaState,
    (state: RostaState) => state.duties);


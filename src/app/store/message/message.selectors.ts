import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MessageState } from './message.reducers';
import jwt_decode from 'jwt-decode';

export const selectMessageState = createFeatureSelector<MessageState>('message');

export const getDateFrom = createSelector(selectMessageState,
    (state: MessageState) => state.dateFrom);

export const getDateRange = createSelector(selectMessageState,
    (state: MessageState) => state.selectedRange);

export const getMessagesFromStore = createSelector(selectMessageState,
    (state: MessageState) => state.messages);

export const getIsWaiting = createSelector(selectMessageState,
    (state: MessageState) => state.isWaiting);

export const getIncArchived = createSelector(selectMessageState,
    (state: MessageState) => state.incArchived);

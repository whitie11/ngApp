
import { Action, createReducer, on } from '@ngrx/store';
import { subDays } from 'date-fns';
import { MyMessage } from 'src/app/modules/messages/models/message';
import * as MessageActions from './message.actions';

export interface MessageState {
  dateFrom: Date;
  selectedRange: string;
  isWaiting: boolean;
  messages: MyMessage[];
  incArchived: boolean;
}

export const initialState: MessageState = {
  dateFrom: subDays(new Date(), 7),
  selectedRange: 'range1',
  isWaiting: false,
  messages: [],
  incArchived: false
};


const reducer = createReducer(
  initialState,
  on(MessageActions.SetDateFrom, (state: MessageState, { dateFrom }) => {
    return { ...state, dateFrom, };
  }),
  on(MessageActions.SetRange, (state: MessageState, { selectedRange }) => {
    return { ...state, selectedRange, };
  }),

  on(MessageActions.GetMessagesFromDate, (state: MessageState, { }) => {
    return { ...state, isWaiting: true };
  }),

  on(MessageActions.GetFilteredMessagesFromDate, (state: MessageState, { }) => {
    return { ...state, isWaiting: true };
  }),

  on(MessageActions.GetMessagesSuccess, (state: MessageState, { messages }) => {
    return { ...state, isWaiting: false, messages };
  }),

  on(MessageActions.GetMessagesFailure, (state: MessageState, { }) => {
    return { ...state, isWaiting: false };
  }),

  on(MessageActions.SaveMessage, (state: MessageState, { }) => {
    return { ...state, isWaiting: true };
  }),

  on(MessageActions.SaveMessageSuccess, (state: MessageState, { message }) => {
    return { ...state, isWaiting: false, messages: [...state.messages, message] };
  }),

  on(MessageActions.SaveMessageFailure, (state: MessageState, { error}) => {
    return { ...state, isWaiting: false, };
  }),

  on(MessageActions.SetIncArchived, (state: MessageState, { incArchived }) => {
    return { ...state, incArchived, };
  }),

  on(MessageActions.ArchiveMessage, (state: MessageState, { }) => {
    return { ...state, isWaiting: true, };
  }),

  on(MessageActions.ArchiveMessageSuccess, (state: MessageState, { message }) => {
    // TODO replace in state
    const index = state.messages.findIndex((element) => element.id === message.id);
    let newArray = [...state.messages];
    newArray[index] = message;
    if (state.incArchived === false) {
      newArray = newArray.filter(m => m.id !== message.id);
    }

    return { ...state, isWaiting: false, messages: newArray };
  }),

  on(MessageActions.ArchiveMessageFailure, (state: MessageState, { error }) => {
    return { ...state, isWaiting: false, };
  }),

);

export function messageReducer(state: MessageState | undefined, action: Action) {
  return reducer(state, action);
}


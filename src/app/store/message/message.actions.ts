import { Action, createAction, props } from '@ngrx/store';
import { MyMessage } from 'src/app/modules/messages/models/message';
import { NewMessageData } from 'src/app/modules/messages/models/newMessageData';

export const SetRange = createAction(
  '[Message] Set date range',
  props<{ selectedRange: string}>()
);

export const SetDateFrom = createAction(
  '[Message] Set date from',
  props<{ dateFrom: Date}>()
);

export const SetIncArchived = createAction(
  '[Message] Set include archived',
  props<{incArchived: boolean}>()
);

export const GetMessagesFromDate = createAction(
  '[Message] Get messages from date',
  props<{ dateFrom: Date}>()
);

export const GetFilteredMessagesFromDate = createAction(
  '[Message] Get Filtered messages from date',
  props<{ dateFrom: Date, incArchived: boolean}>()
);

export const GetMessagesSuccess = createAction(
  '[Message] Get messages success',
  props<{ messages: MyMessage[]}>()
);

export const GetMessagesFailure = createAction(
  '[Message] Get messages failure',
  props<{ error: any}>()
);

export const SaveMessage = createAction(
  '[Message] Save message',
  props<{ message: NewMessageData}>()
);

export const SaveMessageSuccess = createAction(
  '[Message] Save message success',
  props<{ message: MyMessage}>()
);

export const SaveMessageFailure = createAction(
  '[Message] Save message failure',
  props<{ error: any}>()
);

export const ArchiveMessage = createAction(
  '[Message] Archive message ',
  props<{ messageId: number}>()
);

export const ArchiveMessageSuccess = createAction(
  '[Message] Archive message success ',
  props<{ message: MyMessage}>()
);

export const ArchiveMessageFailure = createAction(
  '[Message] Archive message failure',
  props<{ error: any}>()
);

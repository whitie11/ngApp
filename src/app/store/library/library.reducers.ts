
import { Action, createReducer, on } from '@ngrx/store';
import { FileSaver } from 'src/app/modules/library/models/fileSaver';
//  import { MyMessage } from 'src/app/modules/messages/models/message';
import * as LibraryActions from './library.actions';

export interface LibraryState {
    isWaiting: boolean;
    savedFiles: FileSaver[];
}

export const initialState: LibraryState = {
    isWaiting: false,
    savedFiles: [],
};


const reducer = createReducer(
    initialState,
    on(LibraryActions.GetsavedFiles, (state: LibraryState, { }) => {
        return { ...state, isWorking: true };
    }),
    on(LibraryActions.GetSavedFilesSuccess, (state: LibraryState, { files }) => {
        return { ...state, isWorking: false, savedFiles: files };
    }),
    on(LibraryActions.GetsavedFiles, (state: LibraryState, { }) => {
        return { ...state, isWorking: false };
    }),
);

export function libraryReducer(state: LibraryState | undefined, action: Action) {
    return reducer(state, action);
}



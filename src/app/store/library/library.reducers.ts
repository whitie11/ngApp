
import { Action, createReducer, on } from '@ngrx/store';
import { FileSaver } from 'src/app/modules/library/models/fileSaver';
import * as LibraryActions from './library.actions';

export interface LibraryState {
    isWorking: boolean;
    savedFiles: FileSaver[];
}

export const initialState: LibraryState = {
    isWorking: false,
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
    on(LibraryActions.GetSavedFilesFailure, (state: LibraryState, { }) => {
        return { ...state, isWorking: false };
    }),
);

export function libraryReducer(state: LibraryState | undefined, action: Action) {
    return reducer(state, action);
}



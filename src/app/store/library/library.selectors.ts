import { createSelector, createFeatureSelector } from '@ngrx/store';
import { LibraryState } from './library.reducers';

export const selectLibraryState = createFeatureSelector<LibraryState>('library');

export const getSavedFiles = createSelector(selectLibraryState,
    (state: LibraryState) => state.savedFiles);

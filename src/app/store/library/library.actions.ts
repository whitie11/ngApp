import { Action, createAction, props } from '@ngrx/store';
import { FileSaver } from 'src/app/modules/library/models/fileSaver';


export const GetsavedFiles = createAction(
    '[Library] Get saved Files',
);

export const GetSavedFilesSuccess = createAction(
    '[Library] Get saved Files success',
    props<{ files: FileSaver[]}>()

);

export const GetSavedFilesFailure = createAction(
    '[Library] Get saved Files failure',
    props<{ error: any}>()
);

export const DownloadFile = createAction(
    '[Library] Download File',
    props<{ payload: string}>()
);

export const DownloadFileSuccess = createAction(
    '[Library] Download File success',
);

export const DownloadFileFailure = createAction(
    '[Library] Download File failure',
    props<{ payload: any}>()
);

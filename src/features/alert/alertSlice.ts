import { Color } from '@material-ui/lab';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type alertOrigin = 'top-center'|'top-right'|'top-left'|'bottom-center'|'bottom-right'|'bottom-left';

export interface IAlertPayload {
    message: string,
    severity?: Color,
    color?: Color
    anchorOrigin?: alertOrigin,
    autoHide?: boolean,
};

export interface IAlertInfo extends IAlertPayload {
    readonly key: number
}

const initialState: Array<IAlertInfo> = [];

const alertSlice = createSlice({
    name: 'alertSlice',
    initialState,
    reducers: {
        showAlert(state, action: PayloadAction<IAlertPayload>) {
            state.push({ ...action.payload, key: new Date().getTime() });
        },
        hideAlert(state) {
            return state.slice(1);
        }
    }
})

export const { showAlert, hideAlert } = alertSlice.actions;
export default alertSlice.reducer;
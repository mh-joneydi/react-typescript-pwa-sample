import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILightBoxProps } from 'react-image-lightbox';

export interface ILightBoxState {
    images: string[]
    currentIndex?: number,
    options?: Partial<Omit<ILightBoxProps, 'mainSrc'|'nextSrc'|'prevSrc'|'onMovePrevRequest'|'onMoveNextRequest'|'onCloseRequest'>>
}

const initialState: Array<ILightBoxState> = [];

const imageLightBoxSlice = createSlice({
    name: 'lightBoxSlice',
    initialState,
    reducers: {
        openLightBox(state, action: PayloadAction<ILightBoxState>) {
            state.push({
                ...action.payload,
                currentIndex: action.payload.currentIndex || 0
            });
        },
        closeLightBox(state) {
            return state.slice(1);
        }
    }
})

export const { openLightBox, closeLightBox } = imageLightBoxSlice.actions;
export default imageLightBoxSlice.reducer;
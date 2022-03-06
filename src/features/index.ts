import { combineReducers } from "@reduxjs/toolkit"
import alertSlice from "./alert/alertSlice";
import imageLightBoxSlice from "./imageLightBox/imageLightBoxSlice";
import productsSlice from "./products/productsSlice";


// combined redecucers (Root Reducer)
const AppReducer = combineReducers ({
    globalAlert: alertSlice,
    products: productsSlice,
    globalLightBox: imageLightBoxSlice,
});

// When the user is logged out store will be cleaned up
const RootReducer: typeof AppReducer = (state , action) => {   
    // if(action.type === logout.toString()) {
    //     return AppReducer(undefined, action);
    // }
    return AppReducer(state, action);
};

export default RootReducer;
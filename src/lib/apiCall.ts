import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { showAlert } from 'features/alert/alertSlice';
import { globalDispatch } from 'store';


const axiosInstance = axios.create({
    baseURL: "https://622240a3666291106a21c50d.mockapi.io",
});

/**
 * @example
 * 
 * import APICall from 'lib/apiCall';
 * 
 * await APICall({ method: 'get', url: 'requestURL', ...options })
 */
const APICall = function<TData = any, TBody = any> ( config: AxiosRequestConfig<TBody>) {
        
    return new Promise<AxiosResponse<TData, TBody>>((resolvation, rejection)=> {
        axiosInstance.request<TData>(config)
        .then( function( res ) {
            resolvation(res);
        })
        .catch( function(err: AxiosError) { 
            if(err.message !== 'APICALL_CANCELED') {
                rejection(err.response?.data);
                globalDispatch(showAlert({
                    message: 'مشکل در ارتباط با سرور',
                    severity: 'error'
                }));
            }
        })
    })
}

export default APICall;
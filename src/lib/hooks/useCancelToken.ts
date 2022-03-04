import axios from "axios";
import React from "react";

/**
 * @returns cancelTokenSource created from axios
 * @example
 * import useCancelToken from "lib/hooks/useCancelToken";
 *function Component {
    * const { token, cancel } = useCancelToken();
 * }
 * 
 */
const useCancelToken = () => {
    const cancelTokenSource = React.useRef(axios.CancelToken.source()).current;

    React.useEffect( function() {
        return ()=> cancelTokenSource.cancel('APICALL_CANCELED')
    }, [cancelTokenSource])
    
    return cancelTokenSource;
}

export default useCancelToken;
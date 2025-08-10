
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAIL = 'ADD_FAIL';


export const addEmployee = (fields) => {
    return async (dispatch) => {
        try {
            dispatch({ 
                type: ADD_SUCCESS, 
                payload: fields, 
            });

        } catch (error) {
            console.log(error)

            let errorMsg

            if (error.response.data.message) {
                errorMsg = error.response.data.message
            }

            dispatch({ 
                type: ADD_FAIL, 
                payload: errorMsg 
            });

            throw new Error(errorMsg);
        }
    }
}
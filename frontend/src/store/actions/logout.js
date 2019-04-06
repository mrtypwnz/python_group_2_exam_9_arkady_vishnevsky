export const LOGOUT = "LOGOUT";

export const logout = () => {
    return dispatch => {
        localStorage.removeItem('auth-token');
        dispatch({type: LOGOUT});
    };
};

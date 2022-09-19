import axios from 'axios';
import URI from '../URI';

//Login user
export const loginUser = (email, password) => async dispatch => {
    try {
        dispatch({ type: 'userLoginRequest' });
        const config = { headers: { 'Content-Type': 'application/json' } };
        const { data } = await axios.post(
            `${URI}/api/v2/login`,
            { email, password },
            config,
        );
        dispatch({ type: 'userLoginSuccess', payload: data.user });
    } catch (error) {
        dispatch({ type: 'userLoginFail', payload: error.response.data.message });
    }
};

//Registration user
export const registerUser =
    (name, email, password, avatar) => async dispatch => {
        try {
            dispatch({ type: 'userCreateRequest' });
            const config = { headers: { 'Content-Type': 'application/json' } };
            const { data } = await axios.post(
                `${URI}/api/v2/registration`,
                { name, email, password, avatar },
                config,
            );
            dispatch({ type: 'userCreateSuccess', payload: data.user });
        } catch (error) {
            dispatch({ type: 'userCreateFail', payload: error.response.data.message });
        }
    };

//Load user
export const loadUser = () => async dispatch => {
    try {
        dispatch({ type: 'userLoadRequest' });
        const { data } = await axios.get(
            `${URI}/api/v2/me`,
        );
        dispatch({ type: 'userLoadSuccess', payload: data.user });
    } catch (error) {
        dispatch({ type: 'userLoadFailed', payload: error.response.data.message });
    }
};

//Forgot password
export const forgotPassword = email => async dispatch => {
    try {
        dispatch({ type: 'forgotPasswordRequest' });
        const config = { headers: { 'Content-Type': 'application/json' } };
        const { data } = await axios.post(
            `${URI}/api/v2/password/forgot`,
            { email },
            config,
        );
        dispatch({ type: 'forgotPasswordSuccess', payload: data.message });
    } catch (error) {
        dispatch({ type: 'userLoadFailed', payload: error.response.data.message });
    }
};

//Logout user
export const logOutUser = () => async dispatch => {
    try {
        await axios.get(`${URI}/api/v2/logout`);
        dispatch({ type: 'userLogOutSuccess' });
    } catch (error) {
        dispatch({ type: 'userLogOutFail', payload: error.response.data.message });
    }
};

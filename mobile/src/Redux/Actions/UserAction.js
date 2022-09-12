import axios from 'axios';

export const loginUser = (email, password) => async dispatch => {
    try {
        dispatch({ type: 'userLoginRequest' });
        const config = { headers: { 'Content-Type': 'application/json' } };
        const { data } = await axios.post(
            `https://mern-nest-ecommerce.herokuapp.com/api/v2/login`,
            { email, password },
            config,
        );
        dispatch({ type: 'userLoginSuccess', payload: data.user });
    } catch (error) {
        dispatch({ type: 'userLoginFail', payload: error.response.data.message });
    }
};

export const loadUser = () => async dispatch => {
    try {
        dispatch({ type: 'userLoadRequest' });
        const { data } = await axios.get(
            'https://mern-nest-ecommerce.herokuapp.com/api/v2/me',
        );
        dispatch({ type: 'userLoadSuccess', payload: data.user });
    } catch (error) {
        dispatch({ type: 'userLoadFailed', payload: error.response.data.message });
    }
};

export const LogOutUser = () => async dispatch => {
    try {
        await axios.get('https://mern-nest-ecommerce.herokuapp.com/api/v2/logout')
        dispatch({ type: "userLogOutSuccess" })
    } catch (error) {
        dispatch({ type: "userLogOutFail", payload: error.response.data.message })
    }
}
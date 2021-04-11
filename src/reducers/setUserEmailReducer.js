const setUserEmailReducer = (state = '', action) => {
    if (action.type === 'USER_EMAIL_CHANGED') {
        return action.userEmail;
    }

    return state;
};

export default setUserEmailReducer;

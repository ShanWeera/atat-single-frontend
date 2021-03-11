const setPositionReducer = (state = 0, action) => {
    if (action.type === 'POSITION_CHANGE') {
        return action.position
    }

    return state
}

export default setPositionReducer

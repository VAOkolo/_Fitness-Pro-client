const initialState = {
    level: "beginner",
    measure: "consistency",
    duration: null
}

const reducer = (state = initialState, action) => {
    ("REDUCER")
    (action)
    switch (action.type) {
        case "LEVEL":
            return { ...state, level: action.payload }
        case "MEASURE":
            return { ...state, measure: action.payload }
        case "DURATION":
            return { ...state, duration: action.payload }
        default:
            return state;
    }
}

export default reducer;

export function levelAction(level) {
    return { 
        type: "LEVEL",
        payload: level
    }
}
export function measureAction(measure) {
    return { 
        type: "MEASURE",
        payload: measure
    }
}
export function durationAction(duration) {
    return { 
        type: "DURATION",
        payload: duration
    }
}

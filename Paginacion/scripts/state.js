const state = {
    users: [],
    page: 1,
    limit: 20,
    total: 0,
};

export function getState(key) {
    return state[key];
}

export function setState(key, newValue) {
    state[key] = newValue;
}
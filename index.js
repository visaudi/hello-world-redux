module.exports.sum = function(state = 0, action) {
    if (action.type === "SUM") {
        return state + action.number;
    }
    return state;
};

module.exports = function recursion(tree) {
    let result = [];
    traverseLevels(tree, result, 0);
    return result;
};

function traverseLevels(tree, arr, level) {
    if ("value" in tree) {
        if (typeof(arr[level]) === "undefined") arr[level] = [];
        arr[level].push(tree["value"]);
    }
    if ("left" in tree) traverseLevels(tree["left"], arr, level+1);
    if ("right" in tree) traverseLevels(tree["right"], arr, level+1);
}

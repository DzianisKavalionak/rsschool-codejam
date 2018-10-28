module.exports = function sumOfOther(array) {
    const tempArr = [];
    for(let i = 0; i < array.length; i++){
        if (typeof array[i] !== "number"){
            return 'incorrect array';
        }
        tempArr[i] = array.reduce((a, b) => a + b) - array[i];
    }
    return tempArr;
};

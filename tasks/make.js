module.exports = function make(...lst) {
    return function (...anotherLst) {
        if (anotherLst.length === 1 && typeof(anotherLst[0]) === "function")
            return lst.reduce(anotherLst[0]);
        else{
            return make.apply(this, lst.concat(anotherLst));
        }
    }
};
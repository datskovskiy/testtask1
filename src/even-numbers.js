const evenNumbersInArray = (array) => {
    if (!Array.isArray(array) || array.length == 0) {
        return 'Passed argument is not an array or empty';
    }

    let evenArray = array.filter(e => e % 2 == 0);
    if (evenArray.length == 0) {
        return 'Passed array does not contain even numbers';
    }

    return evenArray;
};

module.exports = evenNumbersInArray;


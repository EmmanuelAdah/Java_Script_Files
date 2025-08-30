

function findIndex(array, target) {
    for (let index = 0; index < array.length; index++) {
        let number = target - array[index];
        for (let index2 = 0; index2 < array.length; index2++) {
            if (array[index2] === number) {
                return [index, index2];
            }
        }
    }
}

console.log(findIndex([1, 2, 3, 4, 5, 6, 7], 7));
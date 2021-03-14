function getMiddleIndex(arr) {
    if (arr.length) {
        return Math.ceil(arr.length / 2);
    }
    return -1;
}

function mergeArr(arrA=[], arrB=[]) {
    const sumArrLength = arrA.length + arrB.length;

    let result = [];
    let i = 0;
    let arrAIndex = 0;
    let arrBIndex = 0;

    while (i < sumArrLength) {
        if (arrAIndex >= arrA.length || arrBIndex >= arrB.length) {
            break;
        }

        if (arrA[arrAIndex] < arrB[arrBIndex]) {
            result.push(arrA[arrAIndex]);
            arrAIndex++;
        } else {
            result.push(arrB[arrBIndex]);
            arrBIndex++;
        }

        i++;
    }

    if (arrAIndex !== arrA.length) {
        result = result.concat(arrA.slice(arrAIndex, arrA.length))
    }

    if (arrBIndex !== arrB.length) {
        result = result.concat(arrB.slice(arrBIndex, arrB.length))
    }

    return result;
}

function mergeSort(arr) {

    if (arr.length === 1) {
        return arr;
    }

    const left = 0;
    const right = arr.length;

    const middlePoint = getMiddleIndex(arr);

    const leftArr = mergeSort(arr.slice(left, middlePoint));
    const rightArr = mergeSort(arr.slice(middlePoint, right))
    return mergeArr(leftArr, rightArr);
}

// mergeSort([5, 2, 4, 3, 1, 6]);
// mergeSort([2,1,3,4,5,2]);

var sampleArr = Array(1000).fill(undefined).map(() => {
    return Math.random() * (9999 - 0) + 0
})

mergeSort(sampleArr)
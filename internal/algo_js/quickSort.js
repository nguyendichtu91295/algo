function mergeArr(arrA=[], pivotValue, arrB=[]) {
    return [...arrA, pivotValue, ...arrB]
}

function getPivotIndex(arr) {
    return arr.length - 1;
}

function partition(arr, pivot) {
    if (arr.length <= 1) {
        return arr;
    }

    // pivot at the end
    let i = 0;

    const leftPart = [];
    const rightPart = [];

    while (i < arr.length - 1) {
        if (arr[i] < arr[pivot]) {
            leftPart.push(arr[i]);
        } else {
            rightPart.push(arr[i])
        }

        i++;
    }


    return mergeArr(quickSort(leftPart, getPivotIndex(leftPart)), arr[pivot], quickSort(rightPart, getPivotIndex(rightPart)));
}

function quickSort(arr) {
    return partition(arr, getPivotIndex(arr))
}


var sampleArr = Array(1000000).fill(undefined).map(() => {
    return Math.random() * (9999 - 0) + 0
})

function timing() {
    const start = new Date().getTime();
    console.log('processing...')
    console.log(quickSort(sampleArr))

    const end = new Date().getTime();

    return (end - start) / 1000 + 's';
}

timing()

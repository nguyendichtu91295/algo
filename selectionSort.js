function swap (arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function selectionSort (arr) {
    if (!arr.length) {
        return arr;
    }
    let currentMin = 0;
    let swapIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        currentMin = arr[i];
        swapIndex = i;
        for(let j = i + 1;j < arr.length; j++) {
            if(currentMin > arr[j]) {
                swapIndex = j;
                currentMin = arr[j]
            }
        }

        if (i !== swapIndex) {
            swap(arr, i, swapIndex);
        }
    }

    return arr
}

var sampleArr = Array(1000000).fill(undefined).map(() => {
    return Math.random() * (9999 - 0) + 0
})


function timing() {
    const start = new Date().getTime();
    console.log('processing...')
    console.log(selectionSort(sampleArr))

    const end = new Date().getTime();

    return (end - start) / 1000 + 's';
}

timing();
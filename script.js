let swapCount = 0

function heapify(A, i, heapSize) {
    let largest = i
    const left = 2 * i + 1
    const right = 2 * i + 2

    if (left < heapSize && A[left] > A[largest]) {
        largest = left
    }
    if (right < heapSize && A[right] > A[largest]) {
        largest = right
    }
    if (largest !== i) {
        const tmp = A[i]
        A[i] = A[largest]
        A[largest] = tmp
        swapCount++
        heapify(A, largest, heapSize)
    }
}

function buildMaxHeap(A) {
    const n = A.length
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(A, i, n)
    }
}

function heapSort(A) {
    swapCount = 0
    buildMaxHeap(A)
    const n = A.length
    for (let end = n - 1; end >= 1; end--) {
        const tmp = A[0]
        A[0] = A[end]
        A[end] = tmp
        swapCount++
        heapify(A, 0, end)
    }
    return A
}


function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }

    let randomIndex = Math.floor(Math.random() * arr.length)
    let pivot = arr[randomIndex]

    let left = []
    let right = [] 

    for (let i = 1;i < arr.length; i++) {
        if (i === randomIndex) continue

        if(arr[i] < pivot) {
            left.push(arr[i])
        }
        else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, quickSort(right)]
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


//Dane liczbowe
const arr = Array.from(
    { length: 10000 },
    () => Math.floor(Math.random() * 100) //Dane z wieloma powtorzeniami (100000 zamien na 100)
)

//Dane prawie posortowane

//arr.sort((a, b) => a - b)
//for (let i = 0; i < 100; i++) {
//    const index1 = Math.floor(Math.random() * arr.length)
//    const index2 = Math.floor(Math.random() * arr.length)
//
//    const tmp = arr[index1]
//    arr[index1] = arr[index2]
//    arr[index2] = tmp
//}

//Dane odwrotnie posortowane

//arr.sort((a, b) => b - a)




console.time("Heap Sort")

heapSort(arr)

console.timeEnd("Heap Sort")


console.time("Quick Sort");

quickSort(arr);

console.timeEnd("Quick Sort");

console.time("Bubble Sort");

bubbleSort(arr);

console.timeEnd("Bubble Sort");

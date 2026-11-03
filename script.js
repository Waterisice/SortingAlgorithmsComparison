//1. Heap Sort
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
    buildMaxHeap(A)
    const n = A.length
    for (let end = n - 1; end >= 1; end--) {
        const tmp = A[0]
        A[0] = A[end]
        A[end] = tmp
        heapify(A, 0, end)
    }
    return A
}

//2. Quick Sort
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }

    let randomIndex = Math.floor(Math.random() * arr.length)
    let pivot = arr[randomIndex]

    let left = []
    let middle = []
    let right = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        }
        else if (arr[i] > pivot) {
            right.push(arr[i])
        }
        else {
            middle.push(arr[i])
        }
    }

    return [...quickSort(left), ...middle, ...quickSort(right)]
}

//3. Bubble Sort
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

//4. Hybrid Sort (Quick + Bubble)
function quickBubbleSort(arr) {
    if (arr.length <= 20) {
        return bubbleSort(arr)
    }

    let randomIndex = Math.floor(Math.random() * arr.length)
    let pivot = arr[randomIndex]

    let left = []
    let middle = []
    let right = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        }
        else if (arr[i] > pivot) {
            right.push(arr[i])
        }
        else {
            middle.push(arr[i])
        }
    }
    return [...quickBubbleSort(left), ...middle, ...quickBubbleSort(right)]
}

//5. Hybrid Sort (Quick + Heap)
function quickHeapSort(arr) {
    if (arr.length <= 100) {
        return heapSort(arr)
    }

    let randomIndex = Math.floor(Math.random() * arr.length)
    let pivot = arr[randomIndex]

    let left = []
    let middle = []
    let right = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        }
        else if (arr[i] > pivot) {
            right.push(arr[i])
        }
        else {
            middle.push(arr[i])
        }
    }
    return [...quickHeapSort(left), ...middle, ...quickHeapSort(right)]
}

//6. Built-in Sort
function builtinSort(arr) {
    return arr.sort((a, b) => a - b)
}

// Losujemy 10 000 liczb tylko jeden raz
const originalData = Array.from(
    { length: 10000 },
    () => Math.floor(Math.random() * 100000)
)

// 1. Dane losowe
const randomData = [...originalData]

// 2. Dane prawie posortowane
const almostSortedData = [...originalData].sort((a, b) => a - b)

for (let i = 0; i < 100; i++) {
    const index1 = Math.floor(Math.random() * almostSortedData.length)
    const index2 = Math.floor(Math.random() * almostSortedData.length)

    const tmp = almostSortedData[index1]
    almostSortedData[index1] = almostSortedData[index2]
    almostSortedData[index2] = tmp
}

// 3. Dane z wieloma powtórzeniami
const repeatedData = originalData.map(x => x % 100)

// 4. Dane odwrotnie posortowane
const reversedData = [...originalData].sort((a, b) => b - a)


function testAlgorithms(data, dataName) {
    console.log(`\n--- ${dataName} ---`)

    console.time("Heap Sort")
    heapSort([...data])
    console.timeEnd("Heap Sort")

    console.time("Quick Sort")
    quickSort([...data])
    console.timeEnd("Quick Sort")

    console.time("Bubble Sort")
    bubbleSort([...data])
    console.timeEnd("Bubble Sort")

    console.time("Quick + Bubble Sort")
    quickBubbleSort([...data])
    console.timeEnd("Quick + Bubble Sort")

    console.time("Quick + Heap Sort")
    quickHeapSort([...data])
    console.timeEnd("Quick + Heap Sort")

    console.time("Built-in Sort")
    builtinSort([...data])
    console.timeEnd("Built-in Sort")
}

testAlgorithms(randomData, "Dane losowe")

testAlgorithms(almostSortedData, "Dane prawie posortowane")

testAlgorithms(repeatedData, "Dane z wieloma powtórzeniami")

testAlgorithms(reversedData, "Dane odwrotnie posortowane")

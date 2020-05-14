const LinkedList = require('./LinkedList')

// 3. 


function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
};

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
};

function swap (array, i,j) {
  let temp = array[i]; 
  array[i] = array[j];
  array[j] = temp;
}

const array = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5'.split(' ').map(x => +x);

// console.log(quickSort(array));

// 4. 

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
};

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}
  // console.log(mergeSort(array));

// 5

function Linked () {
  const temp = [];
  const link = new LinkedList();

  array.forEach(n => link.insertFirst(n));
  let current = link.head;

  while (current !== null) {
    temp.push(current.value);
    current = current.next;
  }
  mergeSort(temp);
  // console.log(temp)
  link.head = null;

  temp.forEach(n => link.insertLast(n));
  // console.log(array)
  display(link);
} 

function display(link) {
  let displayString = '';
  let current = link.head;
  while (current !== null) {
    displayString += current.value + ' => ';
    current = current.next;
  }
  displayString += current;
  // console.log(displayString);
}

Linked();

// 6.
// 

function bucket(array, max) {
  
  let newArray = new Array(max);

  for (let i = 0; i < array.length; i++) {
    newArray[array[i]] = array[i];
  }
  let index = 0;
  for(let j = 0; j < newArray.length; j++) {
    if (newArray[j] !== undefined) {
      array[index] = newArray[j];
      index++;
    }
  }
}
const testArray = [10, 9, 88, 65, 24, 32];
bucket(testArray, 88);
console.log(testArray);


// initialize array with the size of highest number
// loop through array
// put each item into index that matches it's value
// loop through, if a number is found, over right index

// 7

function shuffle(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = shuffleP(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
};

function shuffleP(array, start, end) {
  const pivot = Math.random() * (start - end) + 1;
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
};

shuffle(array);
console.log(array);



# DSA-Sorting

## 1. Understanding merge sort

Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

- What is the resulting list that will be sorted after 3 recursive calls to mergesort?
- What is the resulting list that will be sorted after 16 recursive calls to mergesort?
- What are the first 2 lists to be merged?
- Which two lists would be merged on the 7th merge?

- [21, 1]

- List will be completely sorted as len=16

- [1, 21] -> [45, 26] -> [1, 21, 26, 45]

- [1, 21, 26, 45] [2, 9, 28, 29]

[21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40] length 16

L -> [21, 1, 26, 45, 29, 28, 2, 9] R -> [16, 49, 39, 27, 43, 34, 46, 40]

 L -> [21, 1, 26, 45] R -> [29, 28, 2, 9]

L -> [21, 1] -> L[21] R[1] -> [1, 21]

R -> [46, 45] -> L[46] R[45] -> [45, 46]

## 2. Understanding quicksort 


1) Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. After the first partition step has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20. Which of the following statements is correct about the partition step? Explain your answer.

- The pivot could have been 17, but could not have been 14
- The pivot could have been either 14 or 17 X
- Neither 14 nor 17 could have been the pivot
- The pivot could have been 14, but could not have been 17

2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting list after the second partitioning according to the quicksort algorithm.

- When using the last item on the list as a pivot

Pivot -> 12

[14, 17, 13, 15, 19, 10, 3, 16, 9, 12] // start = 0, end = 10
 j                   i
[10, 17, 13, 15, 19, 14, 3, 16, 9, 12]
     j                   i
[10, 3, 13, 15, 19, 14, 17, 16, 9, 12]
        j                       i
[10, 3, 9, 15, 19, 14, 17, 16, 13, 12]
            j                       i
[10, 3, 9, 12, 19, 14, 17, 16, 13, 15]
               j                   fs
[10, 3, 9, 12, 15, 14, 17, 16, 13, 19]
               j=4 return j

 0          3
[10, 3, 9, 12, 15, 14, 17, 16, 13, 19] // start = 0, end = 4

Pivot -> 12

[10, 3, 9, 12]
 j   i
[3, 10, 9, 12]
    j   i
[3, 9, 10, 12]
        j   i
[3, 9, 12, 10]
[3, 9, 10, 12]


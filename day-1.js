// run me with:
// node day-1.js

let fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, 'puzzle-inputs/day-1-1.txt');

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

let col0 = [];
let col1 = [];
let differences = []

fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
    if (!err) {
        data.split('\n').map((l) => {
            let data = l.replaceAll(" ", " ").trim().split(" ").filter((x) => !!x || x.trim() != '');
            col0.push(data[0]);
            col1.push(data[1]);
        });

        col0 = quickSort(col0);
        col1 = quickSort(col1);

        col0.forEach((element, index) => {
            let diff = Math.abs(element - col1[index]);
            differences.push(diff);
        });

        console.log(differences.reduce((a, b) => a + b))


    } else {
        console.log(err);
    }
});
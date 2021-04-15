function mostFreq(arr) {
    var maxCount = 0;
    var el;
    for (var i = 0; i < arr.length; i++) {
        var next = arr[i];
        var nextCount = 1;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] === next) {
                nextCount++;
            }
        }
        if (nextCount > maxCount) {
            maxCount = nextCount;
            el = next;
        }
    }
    return el;

}

console.log(mostFreq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 3, 3, 3, 3, 3, 3]));
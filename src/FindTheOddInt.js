function findOdd(A) {
    const map = new Map();
    A.forEach(function(item) {
        if (map.has(item)) {
            map.delete(item); // if item is in map, remove key/value pair to signify an even number of item
        }
        else {
            map.set(item, 1); // if item isn't in map, add key/value pair to signify an odd number of item
        }
    })
    const iterator = map.keys();
    return iterator.next().value;
}
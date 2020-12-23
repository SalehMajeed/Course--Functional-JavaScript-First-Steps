// function filter(predicate_function, array) {
//     if (length(array) == 0) return [];
//     const first_item = head(array);
//     const filtered_first = predicate_function(first_item) ? [first_item] : [];
//     return concat(filtered_first, filter(predicate_function, tail(array)));
// }

// function length(array) {
//     return array.length;
// }

// function head(array) {
//     return array[0];
// }

// function tail(array) {
//     return array.slice(1);
// }

// function concat(array1, array2) {
//     return array1.concat(array2);
// }

// function is_even(value) {
//     return value % 2 == 0;
// }
// console.log(filter(is_even, [1, 2, 3, 4, 5]));

function map(fn, array) {
    if (length(array) == 0) return [];
    return [fn(head(array))].concat(map(fn, tail(array)));
}
function tail(array) {
    return array.slice(1);
}
function head(array) {
    return array[0];
}
function length(array) {
    return array.length;
}
function fn(n) {
    return n * 2;
}
console.log(map(fn, [1, 2, 3, 4, 5]));

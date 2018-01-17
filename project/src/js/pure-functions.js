// Pure function
function square(x) {
    return x * x;
}

function squareAll(items) {
    return items.map(square);
}

// Impure function
function square(x) {
    updateDBValues(x);
    return x * x;
}
function squareAll(items) {
    for (let i = 0; i < items.length; i++) {
        items[i] = square(items[i]);
    }
}

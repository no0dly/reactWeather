function addPromise(a, b) {
    return new Promise(function(resolve) {
        console.log(a, b);
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a, b);
        } else {
            throw new error('ERROR!!! NAN');
        }
    })
}

addPromise(4, 6).then(function(a, b) {
    console.log(a + b);
})

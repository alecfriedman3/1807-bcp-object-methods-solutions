// YOUR CODE BELOW

const callThemAll = (functionsObj, value) => {
    let values = [];

    for (let methodName in functionsObj) {
        let method = functionsObj[methodName];
        if (typeof method === 'function'){
            values.push(method(value))
        }
    }

    return values;
}

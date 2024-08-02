const fruits = [
    ["apples",300],
    ["oranges",200],
    ["bananas",100],
]



//console.log(Object.fromEntries(fruits));

const fruitCounts = fruits.reduce((acc, [fruit, count]) => {
    acc[fruit] = (acc[fruit] || 0) + count;
    return acc;
}, {});

console.log(fruitCounts)
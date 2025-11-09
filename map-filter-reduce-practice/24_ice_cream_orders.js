// 24. Ice Cream Orders
// Orders recorded:

// ["vanilla", "chocolate"]
// ["strawberry"]
// ["chocolate"]
// Find how many orders were "chocolate".

const iceCreamOrders = [["vanilla", "chocolate"], ["strawberry"], ["chocolate"]];
const totalChocolate = iceCreamOrders.flat().reduce((x, y) => y === 'chocolate' ? x + 1 : x, 0);
console.log(totalChocolate);
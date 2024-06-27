// let shopping = [
//     {
//         name: 'banan',
//         count: 3,
//         price: 80,
//     },
//     {
//         name: 'kivi',
//         count: 5,
//         price: 150,

//     },
//     {
//         name: 'topt',
//         count: 1,
//         price: 500,
//     },
//     {
//         name: 'mico',
//         count: 6,
//         price: 120,
//     },
// ]

// let printRes = (arr = []) => {
//     let res = [...arr];
//     res.forEach(product => {
//         let sum = product.count * product.price;
//         console.log(`${product.count} x ${product.price}\n ${product.name}.....Sum: ${sum}`);
//     });

//     let total = res.map((product) => product.count * product.price)
//         .reduce((sum, current) => sum + current, 0);
//         console.log(`Total: ${total}`);
//         return res;
// }

// printRes(shopping);


// let newProduct = (arr = []) => {
//     let res = [...arr];
//     let maxCost = 0;
//     for (let product of res) {
//         let cost = product.price * product.count
//         if ( cost > maxCost ) {
//             maxCost = cost;
//         }
//     }
//     return maxCost;
// }

// console.log(newProduct(shopping))


// let averageCost = (arr = []) => {
//     let res = [...arr];
//     let sum = 0;

//     for (let product of res) {
//         sum += product.price * product.count;
//     }
//     return (sum / res.length).toFixed(2);
// }

// console.log(averageCost(shopping));

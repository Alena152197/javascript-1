// const car = {
//     manufacturer: 'Renault',
//     model: 'Megan',
//     year: 2008,
//     averageSpeed: 80,
//     showInfo() {
//         console.log(`Производитель: ${this.manufacturer},\n модель: ${this.model},\n Cредняя скорость: ${this.averageSpeed} `);
//     },
//     getTravelTime(s = 0, restInterval = 1) {
//         if (isNaN(s) || isNaN(restInterval)) {
//             return 'Error';
//         }
//         let travelTime = s / this.averageSpeed;
//         let numberOfStops = Math.floor(travelTime / 4);
//         travelTime += numberOfStops * restInterval;
//         return travelTime;
//     },
// }

// car.showInfo();
// console.log(car.getTravelTime(500));
// console.log(car.getTravelTime(800));
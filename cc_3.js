//Task 1: Product Pricing System
let prices = [99.99, 79.99, 99.99, 54.99, 64.99]; //prices of Lego Star Wars lets

prices.push(79.99);//added a new price
prices.shift (); //remove the first price

console.log("Updated Prices:", prices);

//Task 2: Customer Order
let orders = [4, 5, 6, 7, 8];

orders[2] += 5; //increasing the third order by 5
 let total = orders.reduce((sum, order) => sum +order, 0);

 console.log("Updated Order:", orders);
 console.log("Total Orders:", total);//Total: 35

 //Task 3: Employee Performance Tracking
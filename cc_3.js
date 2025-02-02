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
 let employee = {
    name: "Billy Joe",
    role: "Graphic Designer",
    performanceScore: 75, //out of 100
    isActive: true
};
employee.performanceScore = 89;//changed employee performance score
employee.promotionEligible = true;//Added a new property with a booleam to the record
//He seem good engough for a promotion

console.log("Updated Employee Performance", employee);

//Task 4: Customer Feedback Record
let feedback = [
    { customerName: "Roz", feedbackText: "Slow service", rating: 3 },
    { customerName: "Wazoeski", feedbackText: "It was mediocre", rating: 6 },
    { customerName: "Sullivan", feedbackText: "Great service", rating: 8 }
];

// Adding a new customer
feedback.push({ customerName: "Sanderson", feedbackText: "Wonderful service", rating: 9 });

console.log("Customer Feedback:", feedback);

//Task 5: Inventory Management System
let inventory = {
    itemName: "Matcha Powder",
    stockCount: 20,
    price: 360,
    calculateTaxValue: function() {
        return this.stockCount * this.price;
    }
};

console.log("Inventory Details:", inventory);
console.log("Total Value:", inventory.calculateTaxValue());//Total: 7,200
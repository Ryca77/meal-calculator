
//global variables
var tax = 0.05;
var serviceCharge = 0.10;

//diner constructor function    
var Diner = function() {
    this.dummyData = [ {
    name: 'lydia',
    dish1: 'prawn linguini',
    dish2: 'chocolate brownie',
    dish1cost: 11.50,
    dish2cost: 4.50
    },
        {
    name: 'miela',
    dish1: 'spaghetti vongole',
    dish2: 'chocolate ice-cream',
    dish1cost: 8.00,
    dish2cost: 2.50
    },
        {
    name: 'neva',
    dish1: 'pizza margharita',
    dish2: 'strawberry ice-cream',
    dish1cost: 8.00,
    dish2cost: 2.50
        }
    ];
};

Diner();
   
   //method to deliver total bill for all diners
   this.finalBill = function() {
      var diners = [];
      var totalCost = [];   
      for (var i = 0; i < this.dummyData.length; i++) {         
         diners.push(this.dummyData[i].name);
         totalCost.push(this.dummyData[i].dish1cost);
         totalCost.push(this.dummyData[i].dish2cost);  
         }
      var totalCost = totalCost.reduce(add, 0);
      function add(a, b) {
         return a + b;
      }
      var totalIncTax = totalCost + (totalCost * tax);
      var totalIncService = totalIncTax = (totalIncTax * serviceCharge);
      var dinerList = 'Diners: ' + diners.join(', ');
      var totalsBill = dinerList + '\n' + 'Total :' + ' £' + totalCost.toFixed(2) + '\n' + 'Total with tax: ' + ' £' + totalIncTax.toFixed(2) + '\n' + 'Total with service: ' + ' £' + totalIncService.toFixed(2);
      
      return totalsBill;
   };
   
   //method to deliver individual breakdowns for each diner
   this.individualBill = function(name) {
      for (var i = 0; i < this.dummyData.length; i++) {        
         if (this.dummyData[i].name === name) {
            var name = this.dummyData[i].name;
            var dishOne = this.dummyData[i].dish1 + ' £' + this.dummyData[i].dish1cost.toFixed(2);
            var dishTwo = this.dummyData[i].dish2 + ' £' + this.dummyData[i].dish2cost.toFixed(2);
            var dinerCost = this.dummyData[i].dish1cost + this.dummyData[i].dish2cost;
            var dinerCostIncTax = dinerCost + (dinerCost * tax);
            var dinerCostIncService = dinerCostIncTax + (dinerCostIncTax * serviceCharge);
            var dinerBreakdown = 'Diner: ' + name + '\n' + 'Order: ' + dishOne + ' & ' + dishTwo + '\n' + 'Total: £' + dinerCost.toFixed(2) + '\n' + 'Total with tax: £' + dinerCostIncTax.toFixed(2) + '\n' + 'Total with service: £' + dinerCostIncService.toFixed(2);
         }         
      }
      return dinerBreakdown;
   };

var express = require('express');
var app = express();
app.listen(3000);

console.log(finalBill());
console.log(individualBill('Neva'));


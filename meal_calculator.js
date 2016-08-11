//diner constructor function
var Diner = function(name, tip, coupon) {
   this.name = name;
   this.tip = tip;
   this.coupon = coupon || 0;
   this.dishes = [];
   //push a dish to the dishes array
   this.addDish = function(dish) {
      this.dishes.push(dish);
   };
   //calculate total cost for the dishes
   this.total = function() {
      var total = 0;
      for (var i = 0; i < this.dishes.length; i++) {
         total = total + this.dishes[i].price; 
      }
      return total;
   };
   //calulate the tax
   this.tax = function() {
      return Number((this.total() * 0.1).toFixed(2));
   };
   //calculate the tip using individual preferences
   this.tipAmount = function() {
      return Number((this.total() * this.tip).toFixed(2));
   };
};

//bill constructor function
var Bill = function(diners) {
   this.diners = diners;   
   //calculate total including tax
   this.total = function () {
      var total = 0;
      
      for (var i = 0; i < this.diners.length; i++) {
         total += this.diners[i].total() + this.diners[i].tax(); 
      }
      return total;
   };   
   //calculate tip total
   this.tips = function () {
      var tipTotal = 0;
      
      for (var i = 0; i < this.diners.length; i++) {
         tipTotal += this.diners[i].tipAmount(); 
      }
      return tipTotal;
   };   
   //print total bill as string
   this.print = function () {
      var totalBill = "";
      var allDiners = "";
      var allDishCosts = [];
      var allTaxCosts = [];
      var allTipCosts = [];
      
      for (var i = 0; i < this.diners.length; i++) {
         var diner = this.diners[i];
         
         allDiners += diner.name + ", ";
         
         allDishCosts.push(diner.total());
         var dishesTotal = allDishCosts.reduce(add, 0);
            function add (a, b) {
               return a + b;
            }
         
         allTaxCosts.push(diner.tax());
         var taxTotal = allTaxCosts.reduce(add, 0);
            function add (a, b) {
               return a + b;
            }
         
         allTipCosts.push(diner.tipAmount());
         var tipTotal = allTipCosts.reduce(add, 0);
            function add (a, b) {
               return a + b;
            }
         
         totalBill = "Diners: " + allDiners + "\n" + "Order Totals: £" + (dishesTotal - diner.coupon).toFixed(2) + " " + "Tax: £" + taxTotal.toFixed(2) + " " + "Service: £" + tipTotal.toFixed(2);
      }     
      return totalBill;
   };
   //print diner breakdown as string
   this.dinerBreakdown = function () {
      var dinerBill = "";
     
      for (var i = 0; i < this.diners.length; i++) {
         var diner = this.diners[i];
         var eachDish = "";
         
         for (var i = 0; i < diner.dishes.length; i++) {
            eachDish = eachDish + diner.dishes[i].dish;   
         }
         dinerBill = diner.name + ' - ' + 'Order: ' + eachDish + ' £' + diner.total().toFixed(2) + ' Tax £' + diner.tax().toFixed(2) + ' Service £' + diner.tipAmount().toFixed(2);
      }
      return dinerBill;
   };
};

var main1 = {
   dish: 'Prawn Linguini',
   price: 12
};
var main2 = {
   dish: 'Spaghetti Vongole',
   price: 14
};
var main3 = {
   dish: 'Pizza Margharita',
   price: 9
};

var diner1 = new Diner('Lydia', 0.125, 5);
var diner2 = new Diner('Miela', 0.125);
var diner3 = new Diner('Neva', 0.125);

diner1.addDish(main1);
diner2.addDish(main2);
diner3.addDish(main3);

var dinerBill = new Bill([diner2]);
console.log(dinerBill.dinerBreakdown());

var totalBill = new Bill([diner1, diner2, diner3]);
console.log(totalBill.print());


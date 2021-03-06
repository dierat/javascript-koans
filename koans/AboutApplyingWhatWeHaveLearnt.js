var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () { 
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

      var productsICanEat = [];

      /* solve using filter() & all() / any() */

      var noNuts = _(products).filter( function(val){return !val.containsNuts;} );
      productsICanEat = _(noNuts).filter( function(val){return _(val.ingredients).all( function(val){return val !== "mushrooms";} )} );

      expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {
    
    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    
    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {

    /* try chaining range() and reduce() */
    var add = function(tot, cur){
      if ( !(cur % 3) || !(cur % 5) ) {
        return tot + cur;
      } else {
        return tot;
      }
    };
    var sum = _(1000).chain().range().reduce(add).value();

    expect(233168).toBe(sum);
  });

  /*********************************************************************************/

  /*
      products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
      ];
  */

   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {

    /* chain() together map(), flatten() and reduce() */

    var ings = _(products).chain().map(function(val){return val.ingredients}).flatten(true).reduce(function(total, curr) {
        total[curr] = (total[curr] || 0) + 1;
        return total;
      }, {}).value();

    expect(ings['mushrooms']).toBe(2);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */

  // helper function for problems involving prime numbers
  it("should determine if a number is prime", function(){

    function isPrime(n){
      if (n === 2) {return true;}
      if (n < 2 || !(n % 2) ) {return false;}
      for (var i=n-1; i>1; i--){
        if (n % i === 0) {return false;}
      }
      return true;
    }

    expect(isPrime(2)).toBe(true);

    expect(isPrime(10)).toBe(false);

    expect(isPrime(15)).toBe(false);

    expect(isPrime(17)).toBe(true);

    expect(isPrime(23)).toBe(true);

  });

  it("should find the largest prime factor of a composite number", function () {

    function isPrime(n){
      if (n === 2) {return true;}
      if (n < 2 || !(n % 2) ) {return false;}
      for (var i=n-1; i>1; i--){
        if (n % i === 0) {return false;}
      }
      return true;
    }
    
    function largestPrimeFactor(n){
      var index = n-1;
      var result = -1;
      while (index > 1 && result === -1) {
        if ( !(n % index) && isPrime(index) ){
          result = index;
        }
        index--;
      }
      return result;
    }

    expect(largestPrimeFactor(10)).toBe(5);
  });

  /*
  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
    
  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {
      
    
  });
  */

  it("should find the difference between the sum of the squares and the square of the sums", function () {

    function sumSquaresDif(x, y){
      return ( (x * x) + (y * y) ) - Math.pow((x + y), 2);
    }

    expect(sumSquaresDif(2,3)).toBe(-12);

    expect(sumSquaresDif(4,5)).toBe(-40);

    expect(sumSquaresDif(20,100)).toBe(-4000);

    expect(sumSquaresDif(100,101)).toBe(-20200);

    expect(sumSquaresDif(999,1000)).toBe(-1998000);
    
  });

  it("should find the 10001st prime", function () {

    function isPrime(n){
      if (n === 2) {return true;}
      if (n < 2 || !(n % 2) ) {return false;}
      for (var i=n-1; i>1; i--){
        if (n % i === 0) {return false;}
      }
      return true;
    }

    function primeCount(n){
      if (n === 1) {return 2;}
      if (n === 2) {return 3;}
      var count = 2;
      var result = 3;
      while (count < n) {
        result += 2;
        if (isPrime(result)){
          count++;
        }
      }
      return result;
    }

    expect(primeCount(1)).toBe(2);

    expect(primeCount(2)).toBe(3);

    expect(primeCount(3)).toBe(5);

    expect(primeCount(5)).toBe(11);

    expect(primeCount(10001)).toBe(104743);

  });

});

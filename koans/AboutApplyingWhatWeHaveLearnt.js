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

  it("should find the largest prime factor of a composite number", function () {
    
    function largestPrimeFactor(n){
      var index = n-1;
      var result = -1;
      // starting at n-1, loop down to 1
      // potential for recursion helper
      while (index > 1 && result !== -1) {
        // check each index to see if is a factor of n and prime
        if (){
          // if yes, set index to result, which will be returned
          result = index;
        }
        // if no, reduce index by 1
        index--;
      }
      return result;
    }

    expect(largestPrimeFactor(10)).toBe(5);
  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
    
  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {
      
    
  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {
    
  });

  it("should find the 10001st prime", function () {

    function primeCount(n){
      // define variable to store count of prime numbers
      var count = 1;
      // define variable to hold result
      var result = 3;
      // while prime numbers count less than n
      while (count < n) {
        // loop up through all odd numbers, starting at 3
        // if that number is prime, add to count
        if (){count++;}
        // add 2 to result
        result += 2;
      }
    }

    expect(primeCount(3)).toBe(5);

    expect(primeCount(5)).toBe(11);

    expect(primeCount(7)).toBe(17);

    expect(primeCount(8)).toBe(23);

    expect(primeCount(10001)).toBe('?');

  });

  /*********************************************************************************/
  /* END OF EXTRA CREDIT */

  if("should determine if a number is prime", function(){

    function isPrime(){

    }

    expect(isPrime(2)toBe(true));

    expect(isPrime(10)toBe(false));

    expect(isPrime(15)toBe(false));

    expect(isPrime(17)toBe(true));

    expect(isPrime(23)toBe(true));

  });

});

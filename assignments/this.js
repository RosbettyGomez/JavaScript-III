/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When in the global scope, "this" is referring to the entire console since there are no objects to refer to.
* 2. Whenever a function is called by a dot first, the object before that dot is 'this'.
* 3. Whenever a constructor function (object creator) is used.
* 4. Whenever JavaScript's call or apply method is used, "this" is clearly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function girl(name) {
    console.log(this);
    return name;
}
girl("Jane");

// Principle 2

// code example for Implicit Binding

const myObj = {
    quote: 'Quitting is never an option',
    myQuote: function(){
        console.log(this.quote);
    }
};
myObj.myQuote();
// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
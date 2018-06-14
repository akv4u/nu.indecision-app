const square = function (x) {
    return x * x;
}

const sqr2 = (x) => {
    return  x*x;
}



const sqr3 = (x) => x*x;

const f = (x) => Math.sqrt(4*x);

console.log (`square(3) = ${sqr3(3)}`)

const xs = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log (`${xs.forEach(x => {console.log (`(${x}, ${Math.sqrt(4*x)})`)})}`);

// retunrs list of points to be used for plotting parabola
// [1, 2]
// [2, 2.8284271247461903]
// [3, 3.4641016151377544]
// [4, 4]
// [5, 4.47213595499958]
// [6, 4.898979485566356]
// [7, 5.291502622129181]
// [8, 5.656854249492381]
// [9, 6]
console.log(xs.map(x => [x, Math.sqrt(4*x)]))

// Things about arrow functions
// Arrow functions doesnt have its own 'this' but gets it from its context, or parent.

const add =  (a, b) => {
    // console.log (arguments)
    return a + b;
}

// const user = {
//     name: 'Amit',
//     cities:['London', 'Kanpur', 'Indore'],
//     printPlaceLived: function () {
//         this.cities.forEach((city) => {
//             console.log (this.name + ' has lived in ' + city)
//         })
//     }
// }

const user = {
    name: 'Amit',
    cities:['London', 'Kanpur', 'Indore'],
    printPlaceLived () {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}

console.log(user.printPlaceLived());


console.log ([1,2,3].map(val => val*val));

// lexical binding
// Arrow function does lexical binding by default

var calcH = function  () {
    return Math.sqrt(this.x*this.x + this.y*this.y);
}

let x = 3, y = 4;
let obj = {x, y};

console.log(obj)
console.log(`calcH : ${calcH.bind(obj)()}`)

// rather putting 
function funcX ({y, x}) {
    return Math.sqrt(x*x + y*y);
}

console.log (funcX({x, y}))

//The name "lambda" is just a historical artifact. All we're talking about is an expression whose value is a function.
var calcH2 = x => y => Math.sqrt(x*x + y*y);

console.log(calcH2(3)(4))

// Sqrt (X"2 + y"2 + z"2)
console.log ((x => y => z => Math.sqrt(x*x + y*y + z*z))(2)(3)(5));

var calcD = x => y => z => Math.sqrt(x*x + y*y + z*z);
console.log (calcD(1)(2)(2))
var calcD2 = x => y => z => Math.sqrt(x*x + y*y + z*z);

//require(http).get('https://api.eurostar-demo-test.sqills.com/api/v2/ping')
// JavaScript (Node.js): download a URL and print out when ready
//require('http').get("http://echo.getpostman.com/headers", response => console.log(response));






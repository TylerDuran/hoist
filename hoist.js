// #1 

console.log(hello);
var hello = 'world';
// var hello;
// console.log(hello); // logs undefined
// hello = 'world';


// #2

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle; 
// Function test();
// set var needle to = 'magnet';
// console.log(needle); logs 'magnet'


// #3

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendan;
// funtion print()
// var brendan set to = 'only okay'
// console.log(brendan) inside the function
// console.log(brendan) // logs 'super cool'


// #4

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food;
// console.log(food); // logs 'chicken'
// function call for eat();
// food = 'half-chicken'
// console.log(food); // logs half-chicken'
// var food


// #5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// no funtion is difined so it would instantly error out 
// TypeError: mean is not a function


// #6

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// var genre;
// console.log(genre); // logs undefined
// function call for rewind();
// genre = 'rock'
// console.log(genre); // logs 'rock'
// genre = 'r&b'
// console.log(genre); // logs 'r&b'
// then outside the funtion it'll console.log(genre) and log 'disco'


// #7

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// dojo = 'san jose';
// console.log(dojo); // logs 'san jose'
// function call for lern();
// learn = 'seattle'
// console.log(learn); // logs 'seattle'
// genre = 'burbank'
// console.log(learn); // logs 'burbank'
// then outside the funtion it'll console.log(learn) and log 'san jose'

// #8 BONUS
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
    dojo = "closed for now";
    }
    return dojo;
}
// output = dojo{'name': chicago, 'students' : 65, 'hiring' : true}, error on second console log, cannot change const.


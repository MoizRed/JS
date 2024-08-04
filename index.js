/* https://www.youtube.com/watch?v=Coyy79wRz_s&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&index=60
1 intro DONE!
2 VARs DONE!
3 ARITHMETICS DONE!
4 USER INPUT DONE!
5 TYPE CONVERSION DONE!
6 CONSTANTS DONE!
7 COUNTER PROJECT DONE! EASY.
8 MATH IS DONE!
9 RANDOM NUMBER GENERATOR DONE! EASY
10 IF STATEMENT  + SWITCH  DONE!
11 CHECKED PROPERTY DONE !
12 TRINARY OPERATOR DONE!
13 SWITCH DONE!
14 STRING METHODS DONE!
15 STRING SLICING DONE!
16 METHOD CHAINING DONE!
17 LOGICAL OPERATORS DONE!
18 STRICT EQUALITY OPERATORS DONE! === compare type and value , == compare only value , !== 
19 CONDITIONS DONE! "continue skips current iteration  i ==  13 skips logging 13 "
20 NUMBER GUESSING GAME DONE!
21 WHILE LOOP DONE!
22 JS FUNCTIONS DONE!
23 VARIABLE SCOPE DONE!
24 //
25 ARRAYS DONE! 
26 2D ARRAYS DONE!
27 SPREAD OPERATOR DONE! (...numbers) spreads the array / unpack object or array content
28 REST PARAMETER DONE! BUNDLES ELEMENT INTO ONE ARRAY!!!!
29 // you can select index of string by doing text[index] exp : text = "hello" text[3] = l
30 RANDOM PASSWORD GENERATOR DONE!
31 CALLS BACKS DONE!
32 FOREACH DONE!
33
34
35
36
37
38
39 THIS DONE !
40
41
42
43
44
45
46 OBJECTS ARRAY FUNCTION DESTRUCTURING DONE!
47
48
49
50
51
52
53
54
55
56
57
58
59
60 ASYNCHRONOUS JS DONE!
61
62
63
64
65
66
67
68
69
70
71
72
73
74 CALLBACK HELL DONE! [reminder : function to reference it and function() to evoke]
75 PROMISES  DONE! (understood 50:50)
76 ASYNC/AWAIT ! (understood better than PROMISES)
77
78
79
80

*/

// forEach() = method used to iterate over the elements 

//                     of an array and apply a specified function (callback)

//                     to each element



//                     array.forEach(callback)

//                     element, index, array are provided





// forEach() = method used to iterate over the elements 

//                     of an array and apply a specified function (callback)

//                     to each element



//                     array.forEach(callback)

//                     element, index, array are provided



// -------------- EXAMPLE 1 --------------



const numbers = [1, 2, 3, 4, 5];



numbers.forEach(cube);

numbers.forEach(display);



function double(element, index, array){

    array[index] = element * 2;

}



function triple(element, index, array){

    array[index] = element * 3;

}



function square(element, index, array){

    array[index] = Math.pow(element, 2);

}



function cube(element, index, array){

    array[index] = Math.pow(element, 3);

}



function display(element){

    console.log(element);

}



// -------------- EXAMPLE 2 --------------



let fruits = ["apple", "orange", "banana", "coconut"];



fruits.forEach(capitalize);

fruits.forEach(display);



function upperCase(element, index, array){

    array[index] = element.toUpperCase();

}



function lowercase(element, index, array){

    array[index] = element.toLowerCase();

}



function capitalize(element, index, array){

    array[index] = element.charAt(0).toUpperCase() + element.slice(1);

}



/*

function display(element){

    console.log(element);

}

*/

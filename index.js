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
33 MAP METHOD 
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

Pinned by Bro Code
@BroCodez
9 months ago
// .map() = accepts a callback and applies that function 

//                 to each element of an array, then return a new array



// ------------ EXAMPLE 1 ------------

const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map(square);

const cubed = numbers.map(cube);



console.log(cubed);



function square(element){

    return Math.pow(element, 2);

}



function cube(element){

    return Math.pow(element, 3);

}



// ------------ EXAMPLE 2 ------------

const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];

const studentsUpper = students.map(upperCase);

const studentsLower = students.map(lowerCase);



console.log(studentsLower);



function upperCase(element){

    return element.toUpperCase();

}



function lowerCase(element){

    return element.toLowerCase();

}



// ------------ EXAMPLE 3 ------------

const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];

const formattedDates = dates.map(formatDates);



console.log(formattedDates);



function formatDates(element){

    const parts = element.split("-");

    return `${parts[1]}/${parts[2]}/${parts[0]}`;

} 
*/



const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];


function formatDates(element){

    const parts = element.split("-")

    return `${parts[1]}/${parts[2]}/${parts[0]}`

}

console.log(dates.map(formatDates))
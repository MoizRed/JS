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
32 FOREACH DONE! applies function to each iteration of array 
33 MAP METHOD DONE! returns array with function applied
34 FILTER METHOD DONE! returns array with function applied
35 REDUCE METHOD DONE! 
36 FUNCTION DECLARATIONS DONE! as variable , as a higher order function , in closures , event listeners
37 ARROW FUNCTIONS DONE! good for simple fucntion
38 OBJECTS DONE! they have properties and methods
39 THIS DONE ! this refers to the object you currently work with.
40 CLASSES DONE!
41 STATIC DONE! the static keyword is used to define properties that are shared by all instances of a class , it only belongs to the class . DONE!
42 INheritance DONE! use extends keyword to create a child class from parent class 
43 SUPER KEYWORD DONE! key word is used tin classes to  to call the constructor or access the properties and methods of a parent (superclass)  super = the parent
44  GETTERS AND SETTERS DONE! they allow you to contorol how your object's properties are accessed , or how they are modified , to have a private property . __name ,_weight [NOT STUDIED VERY WEL]
45
46 OBJECTS/ARRAY FUNCTION DESTRUCTURING DONE! They allow us to extract a value from an array or object and use them in any new variable.. like you want to use the value in a new variable of a product
47 NESTED OBJECTS DONE!
48 OBJECT ARRAY DONE!
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

//EAAAAAAAAAAAAAAAAAAASYY WORKING WITH ARRAY OF OBJECT

//array of object is easy..
const fruits = [{name : "apple" , color : "red" , calories : 95},
                {name : "banana " , color : "red" , calories : 105},
                {name : "coconut" , color : "white" , calories : 495}]


/*let nam = [];
    for (i in fruits){
             nam[i] =  fruits[i].name //same as map(with no change)
             console.log(fruits[i].name); //same as foreach 
            
    }
             console.log(nam)
*/




// instead 


fruitnames = fruits.map( (fruit) => {return {...fruit , price : 39}}) //output : [{name : "apple" , color : "red" , calories : 95 , price : 39},{name : "banana " , color : "red" , calories : 105 , price : 39},{name : "coconut" , color : "white" , calories : 495 , price : 39}]
console.log(fruitnames)
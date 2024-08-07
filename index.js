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





class Animal{


   alive = true; 


   eat(){

    console.log(`this ${this.name } is eating`)



   }
   sleep(){
    console.log(`this ${this.name} is sleeping`)
   }

}


class Rabbit extends Animal{

    name = "rabbit"
    run(){
    console.log(`this ${this.name} is running`)
    }

}


class Fish extends Animal{
    name = "fish"
    swim(){
    console.log(`this ${this.name} is swiming`)
    }

}


class Hawk extends Animal{
    name = "hawk"
    fly(){
    console.log(`this ${this.name} is flying`)
    }
}

const rabbit = new Rabbit();


console.log(Rabbit)

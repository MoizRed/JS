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
29
30
31 CALLS BACKS DONE!
32
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
46
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


// password generator

let random = ""
let randomstring = ""
function generatepassword(pwlength , includeUppercase, includeLowercase, includeNumbers, includeSymbols){
    
     const lowercase = "abcdefghijklmnopqrstuvwxyz";
     const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     const Numbers = "0123456789";
     const Symbols = "!@#$%^&*()";

    let allowedchart = "";
    let password = "";

    allowedchart += includeLowercase ? lowercase : "";
    allowedchart += includeUppercase ? uppercase : "";
    allowedchart += includeNumbers ? Numbers : "";
    allowedchart += includeSymbols ? Symbols : "";


    if (pwlength <=0){


        return ("password length must be greater than 0");

    }
    if(allowedchart.length === 0)  {

        return("atleast one option needs to be selected lol")

    }


    for(let i = 0; i < pwlength; i++){


         random = Math.floor(Math.random()* allowedchart.length);
        console.log(random)
        
        password += allowedchart[random]

        randomstring += random

    }

    console.log(randomstring)



    return password;
}





const pwlength = 8;
const includeUppercase = true;
const includeLowercase = true;
const  includeNumbers = true;
const includeSymbols = true ;



const  passowrd = generatepassword(
    pwlength,
      includeUppercase, 
     includeLowercase, 
     includeNumbers,
      includeSymbols)

console.log(passowrd)



let text = "hello world"


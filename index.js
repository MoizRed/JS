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
11 Checked property DONE ! 
12 TRENARY OPERATOR DONE!
13 SWITCH DONE!
14 STRING METHODS DONE!
15 STRING SLICING DONE!
16 METHOD CHAINING DONE!
17 LOGICAL OPERATORS DONE!
18 STRICT EQUALITY OPERATORS DONE! === compare type and value , == compare only value , !== 
19 CONDITIONS DONE! "continue skips current iteration"
20 NUMBER GUESSING GAME DONE!
21  
22
23
24
25 
26
27
28
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

let min = 1
let max = 10









while(true){

const PCNum = Math.floor((Math.random() * 50 + 1) - 1 )

console.log(PCNum)

    let USRNum = window.prompt("guess a number");
    
    USRNum = Number(USRNum)


    console.log(typeof USRNum)
  

if ( (typeof USRNum) !== "number") {

    window.alert("invalid input")
     
}else{

window.alert("VALID INPUT ")


if (USRNum === PCNum ) {

    window.alert("CORRECT!")


}else{


    window.alert("OPS , THAT'S THE WRONG NUMBER!")


}

}


}
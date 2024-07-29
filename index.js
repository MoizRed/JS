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
11 TRENARY OPERATOR DONE!
12 SWITCH DONE!
13
14
15
16
17
18
19
20
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
76 ASYNC/AWAIT ! (understood better than async awaite )
77
78
79
80

*/

let data ;

async function fetchdata(callback){

    const response =  await fetch('https://freetestapi.com/api/v1/animals/3')
    data = await response.json()
    console.log(data)
    callback()

}


fetchdata(updatedom)




function updatedom(){
    document.getElementById("count").textContent = data.name
    }

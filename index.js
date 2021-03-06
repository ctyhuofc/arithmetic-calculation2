const express = require("express"); // import express
const app = express(); // call all exress methods under "app"
const myModule = require("./arithmeticFunctions.js"); //import functions from arithmeticFunctions.js

app.use(express.urlencoded({extended: false}));

app.get("/calc", function(req,res){ //perform a get function using express through "app"
    res.sendFile(__dirname + '/index.html')     //send index.html as a response/body
});

app.get("/", function(req,res){ //perform a get function using express through "app"
    res.send("<script>console.log('test worked')</script>")     //send test response
});

app.get("/post", function(req,res){
    res.sendFile(__dirname + '/post.html') //send post.html as response/body
});

app.post("/post", function(req,res){
    res.send("Check Terminal")
    
    function calculate(oper, value1,value2){ //console function


        if(oper==='add'){
            answer = myModule.add(value1, value2)
            console.log('Operation: Addition Value 1: ' +value1+ ' Value 2: ' +value2+ ' Result: ' +answer)
        }else if(oper==='sub'){
            answer = myModule.sub(value1, value2)
            console.log('Operation: Subtraction Value 1: ' +value1+ ' Value 2: ' +value2+ ' Result: ' +answer)
        }else if(oper==='mul'){
            answer = myModule.multiply(value1, value2)
            console.log('Operation: Multiplication Value 1: ' +value1+ ' Value 2: ' +value2+ ' Result: ' +answer)
        }else if(oper==='div'){
            answer = myModule.divide(value1, value2)
            console.log('Operation: Division Value 1: ' +value1+ ' Value 2: ' +value2+ ' Result: ' +answer)
        }
        }
        calculate('div', 5,3) //<-- enter operation and numbers here
});

app.post("/", function(req, res){ //post responses


    
    const value1 = parseInt(req.body.num1); //html variables
    const value2 = parseInt(req.body.num2);
    const oper = req.body.operation;


    if(oper==='add'){                      //html conditionals
        answer = myModule.add(value1, value2)
        res.send('Operation: Addition<br>Value 1: ' +value1+ '<br>Value 2: ' +value2+ '<br>Result: ' +answer)
        console.log('Operation: Addition Value 1: ' +value1+ ' Value 2: ' +value2+ ' Result: ' +answer)
    }else if(oper==='sub'){
        answer = myModule.sub(value1, value2)
        res.send('Operation: Subtraction<br>Value 1: ' +value1+ '<br>Value 2: ' +value2+ '<br>Result: ' +answer)
        console.log('Operation: Subtraction Value 1: ' +value1+ ' Value 2: ' +value2+ ' Result: ' +answer)
    }else if(oper==='mul'){
        answer = myModule.multiply(value1, value2)
        res.send('Operation: Multiplication<br>Value 1: ' +value1+ '<br>Value 2: ' +value2+ '<br>Result: ' +answer)
        console.log('Operation: Multiplication Value 1: ' +value1+ ' Value 2: ' +value2+ ' Result: ' +answer)
    }else if(oper==='div'){
        answer = myModule.divide(value1, value2)
        res.send('Operation: Division<br>Value 1: ' +value1+ '<br>Value 2: ' +value2+ '<br>Result: ' +answer)
        console.log('Operation: Division Value 1: ' +value1+ ' Value 2: ' +value2+ ' Result: ' +answer)
    }

});


app.listen(3000, function(){
    console.log("at port 3000 Server is ON")
    
}); // Open server on port 3000 using express/app





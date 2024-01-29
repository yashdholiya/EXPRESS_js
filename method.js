const express = require('express');
 const app = express();

// Application Middle ware

// app.use((req,res,next)=>
// {
//     if(req.query.age>=18)
//     {
//         next();
//     }else{
//         res.json({message : 'Sorry U are under below 18'});
//     }
// })


// Route Middleware

let agelimiter =((req,res,next)=>
{
    console.log(req.body);
    if(req.body.password==='123')
    {
        next();
    }
    else{
        res.json({message : "Sorry password is incorrect "})
    }
})


// Built-in middleware

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

//   method


app.get('/',agelimiter,(req,res)=>
{
    res.send('GET method');
})

app.post('/',agelimiter,(req,res)=>
{
    res.send('POST method');
})

app.put('/',(req,res)=>
{
    res.send('PUT method');
})

app.patch('/',(req,res)=>
{
    res.send('PATCH method');
})

app.delete('/',(req,res)=>
{
    res.send('DELETE method');
})

 app.listen(2345,()=>
 {
    console.log("server is start at http://localhost:2345");
 }) 

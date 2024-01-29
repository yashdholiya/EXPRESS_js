const express = require('express')
const app = express();
const path = require('path');
// const morgan = require('morgan');
const cors = ('cors');
const books = ('.public/books.json');


app.use(express.json());
app.use(express.urlencoded({extended: true}));


// app.use(morgan('tiny'));
app.use(cors());


let agelimiter =((req,res,next)=>
{
    console.log(req.body);
    if(req.body.password){
    return res.json({password : "is not found "})
    }
    if(req.body.password==='123'){
    next();
}
    else{
        res.json({message : "Sorry password is incorrect "})
    }
})



app.get('/',agelimiter,(req,res)=>
{
    res.sendFile(path.join (__dirname,'public','about.html'));
})


app.get('/book',agelimiter,(req,res)=>
{
    res.json(books);
})

app.put('/',(req,res)=>
{
    res.send('PUT method');
})

app.patch('/',(req,res)=>
{
    res.send('PATCH method');
})



app.listen(1212,()=>
{
    console.log(`app start ...at http://loclahost:1212`);
})

const express = require ("express") ;
const app = express() ;
const ExpressError = require("./ExpressError");

// app.use((req,res ,next)=>{
//     console.log("im 1 middlewares");
//     next();
// })
// app.use((req,res,next)=>{
//     console.log("im 2 middlewares");
//     next();
// })

//checkToken as function
const checkToken = app.use("/api",(req,res ,next)=>{
    let {token} = req.query;
    if(token === "giveacess"){
        // console.log("Acess given");
        next();
    }
    throw new ExpressError (401 , "acess denied !!!!!!");
})
app.get("/api",checkToken,(req,res)=>{
    res.send("data");
})
//logger
// app.use((req,res ,next)=>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method , req.path , req.hostname , req.time);
//     next();
// })



app.get("/err" , (req ,res)=>{
    // res.send("main root");
    abcd = abcd ;
})

// app.get("/random" , (req ,res)=>{
//     res.send("random page");
// })

// app.use((req,res)=>{
//     res.send("Page not found");
// })

app.get("/admin" ,(req ,res)=>{
    throw new ExpressError(403 , "Access to admin is forbidden !!!!!")
})

app.use((err,req,res,next)=>{
    // console.log("-----------------error------------------------------------");
    // next(err);
    let {status=500 , message = "some error occured"} = err;
    res.status(status).send(message);
})

// app.use((err,req,res,next)=>{
//     console.log("-----------------error 2 mid ------------------------------------");
//     next(err);
// })

app.listen(5555 , ()=>{
    console.log("listening to 5555");
})
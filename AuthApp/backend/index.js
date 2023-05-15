// Server file
// Import libaries
const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');

const app=express();

app.listen(3000,(err)=>{
    if(err) throw err;
    console.log('Server running... ')
    }
)
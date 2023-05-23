// Server file
// Import libaries
const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
const mongoURI='mongodb://localhost/'

const app=express();
// loginData

// Convert request into Json() using middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Server App is running and ready to listen request
app.listen(3000,(err)=>{
    if(err) throw err;
    console.log('Server is running... ')
    });

// Connection to DBMS
mongoose.connect(mongoURI);
console.log('DB Is running')
mongoose.connection('open',()=>{
console.log('Database connected successfully')
})

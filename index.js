const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {getData, loggerFunc} = require('../js/controller/sign');
const path = require('path');
const registerDetails = require('./models/schema');
// const nodemailer = require('nodemailer');
// //const smtpTransport = require('nodemailer-smtp-transport');
// const smtpTransport = require('../node_modules/nodemailer/lib/smtp-transport');
// var http = require('http');
// var fs = require('fs');

mongoose.connect('mongodb://127.0.0.1:27017/web')
.then(()=>console.log('connected!'));

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');


//  app.get('/about', (req, res) => {
//    res.render('user');
// });
app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
   res.sendFile(__dirname + '/user_details/user.html');
})

//app.post('/api/Login', getData);
app.post('/api/create',  async (req, res, next) => {
    
      try {
         const user = await registerDetails.find({username:req.body.username,
         password:req.body.password});
         console.log(user.length);
         if(!user.length){
            try {
               const{username, password}=req.body;
               const user_data = await registerDetails.create({username,password});
               console.log(user_data);
               res.redirect('/dashboard');
               // return res.status(201).json({
               // message : "success",
               // data : user_data
               
               // })
               } catch (err) {
               console.log(err)
               return res.status(401).json({
                  success: false,
                  message: "User not successful created",
               })
               }
         }
         else{
            return res.status(200).json({
               message : "User already found",
               //error : messages
           })
         }
      }
      catch (err){
         console.log(err);
         return res.status(500).json({
             success: false,
             error : 'server error'
         });
     }
     
     
 });

 app.post('/api/Login',  async (req, res, next) => {
    
   try {
      const user = await registerDetails.find({username:req.body.username,
      password:req.body.password});
      console.log(user.length);
      if(user.length){
         res.redirect('/about');
      //   return res.status(201).json({
      //    success : true,
      //    message : "login successful",
      //       })
      }
      else{
        // res.redirect('/');
         return res.status(200).json({
            message : "User already not found",
            //error : messages
        })
      }
   }
   catch (err){
      console.log(err);
      return res.status(500).json({
          success: false,
          error : 'server error'
      });
  } 
});

app.get('/dashboard', (req, res) => {
   res.send('Welcome to the dashboard!');
 });

 app.listen(3000,()=>{
   console.log("server running");
});
 

//  app.post('/api/create',  async (req, res, next) => {
//       try {
        
//         const{username, password}=req.body;
        
//         const user_data = await registerDetails.create({username,password});
//         //res.send(req.body);
//         console.log(user_data);
//         res.status(201).json({
//         message : "success",
//         data : user_data
        
//        })
//       } catch (err) {
//         console.log(err)
//         res.status(401).json({
//           message: "User not successful created",
//           error: err.message,
//         })
//       }
//     })
   


require('dotenv').config()
const express = require('express');
const router = express.Router();
const UserModel=require('../models/usersModel')
const ApplicationModel=require('../models/applicationModel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

router.get('/users', (req, res, next) => {
   UserModel.find({}).then((users)=>{
     res.json({users:users});
  }).catch(()=>{
     let err='Something went wrong!'
     res.json({err:err});
  })
  })

  router.post('/login',async function(req, res, next){
    try{
        const {ADMIN_EMAIL, ADMIN_PWD}=process.env
    const {email, password} = req.body;
    if(email===ADMIN_EMAIL) {
        if (password===ADMIN_PWD) {
          const id='8394n43x14n384n1njk'
          const token=jwt.sign({id}, process.env.JWT_KEY,{
            expiresIn:3600,
          })
  
          res.cookie("jwt", token, {
            withCredentials: true,
            httpOnly: false,
            maxAge : 3600*1000
        });
  
          res.json({admin: true, token:token, auth:true})
        }else{
          res.json('Incorrect password')
        }
    }else{
      res.json('Incorrect email id')
    }
  }catch(error){}
  })
  

module.exports = router;

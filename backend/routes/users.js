require('dotenv').config()
const express = require('express');
const router = express.Router();
const UserModel=require('../models/usersModel')
const ApplicationModel=require('../models/applicationModel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


/* GET users listing. */

router.post('/', (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
      jwt.verify(token, process.env.JWT_KEY, async(err, decodedToken) => {
          if (err) {
              res.json({ status: false })
              next();
          } else {
              const user = await UserModel.findById(decodedToken.id);
              if (user) {
                  res.json({ status: true, user: user.name })
              } else {
                  res.json({ status: false })
                  next();
              }
          }
      });
  }else{
      res.json({status:false})
      next();
  }
})


router.post('/signup',async function(req, res, next) {
  try{
  let {name,phone,email,password}=req.body
  password=await bcrypt.hash(password, 10)
  UserModel.create({ 
    name:name,
    phone:phone,
    email:email,
    password:password
  }).then((response)=>{
    console.log(response);
    res.json({user: response._id})
  }).catch((err)=>{
    if(err.message.includes('E11000')>-1){
      res.json('Email already exists')
    }else{
      res.json('Invalid credentials')
    }
  })
}catch(error){
  res.json('Something went wrong')
}
});

router.post('/application',async function(req, res, next){
 try{

 }catch(error){}
})

router.post('/login',async function(req, res, next){
  try{
  const {email, password} = req.body;
  const user = await UserModel.findOne({email});
  if(user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        const id=user._id
        const token=jwt.sign({id}, process.env.JWT_KEY,{
          expiresIn:3600,
        })

        res.cookie("jwt", token, {
          withCredentials: true,
          httpOnly: false,
          maxAge : 3600*1000
      });

        res.json({user: user.name, token:token, auth:true})
      }else{
        res.json('Incorrect password')
      }
  }else{
    res.json('Email not registered')
  }
}catch(error){}
})


module.exports = router;

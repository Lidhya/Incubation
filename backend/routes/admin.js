require('dotenv').config()
const express = require('express');
const router = express.Router();
const UserModel=require('../models/usersModel')
const ApplicationModel=require('../models/applicationModel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken');
const SlotModel = require('../models/slotModel');

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

  router.get('/applications', (req, res, next) => {
    ApplicationModel.find({}).then((data)=>{
      console.log(data);
      res.json(data);
   }).catch(()=>{
      let err='Something went wrong!'
      res.json({err:err});
   })
   })

   router.get('/pending/:id',async (req, res, next) => {
    const id=req.params.id
    ApplicationModel.findOneAndUpdate({_id:id},{$set:{isPending:true}}).then((data)=>{
      res.json({data:data});
   }).catch(()=>{
      let err='Something went wrong!'
      res.json({err:err});
   })
   })
  
   router.get('/approve/:id',async (req, res, next) => {
    const id=req.params.id
    ApplicationModel.findOneAndUpdate({_id:id},{$set:{isApproved:true}}).then((data)=>{
      res.json({data:data});
   }).catch(()=>{
      let err='Something went wrong!'
      res.json({err:err});
   })
   })

   router.get('/decline/:id',async (req, res, next) => {
    const id=req.params.id
    ApplicationModel.findOneAndUpdate({_id:id},{$set:{isDeclined:true}}).then((data)=>{
      res.json({data:data});
   }).catch(()=>{
      let err='Something went wrong!'
      res.json({err:err});
   })
   })

   router.get('/approved',async (req, res, next) => {
    ApplicationModel.find({isApproved:true}).then((data)=>{
      res.json({data});
   }).catch((err)=>{
    console.log(err);
       err='Something went wrong!'
      res.json({err:err});
   })
   })

   router.post('/booking/:id',async (req, res, next) => {
    let appId=req.params.id
    let {val, index}=req.body
    let char=val[index].slot
    ApplicationModel.findOneAndUpdate({_id:appId},{$set:{isBooked:true, slotId:char}}).then((data)=>{
      data.isBooked=true
      data.slotId=char
      res.json({data});
   }).catch((err)=>{
    console.log(err);
       err='Something went wrong!'
      res.json({err:err});
   })
   })

   router.get('/slots',async (req, res, next) => {
     SlotModel.find({}).then((response)=>{
      console.log(response);
       res.json(response[0]);
     }).catch((err)=>{
    console.log(err);
       err='Something went wrong!'
      res.json({err:err});
   })
   })

   router.get('/block/:id',async (req, res, next) => {
    let userId=req.params.id
    UserModel.findOneAndUpdate({_id:userId},{$set:{isBlocked:true}}).then((users)=>{
      users.isBlocked=true
      res.json({users:users});
   }).catch((err)=>{
    console.log(err);
       err='Something went wrong!'
      res.json({err:err});
   })
   })

   router.get('/unblock/:id',async (req, res, next) => {
    let userId=req.params.id
    UserModel.findOneAndUpdate({_id:userId},{$set:{isBlocked:false}}).then((users)=>{
      users.isBlocked=false
      res.json({users:users});
   }).catch((err)=>{
      console.log(err);
      err='Something went wrong!'
      res.json({err:err});
   })
   })

module.exports = router;

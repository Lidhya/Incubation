require('dotenv').config()
const express = require('express');
const router = express.Router();
const fs= require('fs')
const UserModel=require('../models/usersModel')
const ApplicationModel=require('../models/applicationModel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const multer=require('multer')
const userHelper=require('../Helpers/userHelpers')


// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public')
//   },
//   filename: function (req, file, cb) {
//     cb(null, 'companyLogo.jpg')
//   }
// })
// let upload = multer({ storage: storage }).single('logo')


// const upload=multer({dest:'public/company-logos'})
// const uploadImage=upload.single('logo')

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


router.post('/login',async function(req, res, next){
  try{
  const {email, password} = req.body;
  const user = await UserModel.findOne({email});
  if(user) {
    if(!user.isBlocked){  
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

        res.json({user: user, token:token, auth:true})
      }else{
        res.json('Incorrect password')
      }
     }else{
      res.json('Your account is blocked due to some reasons')
     }
  }else{
    res.json('Email not registered')
  }
}catch(error){}
})

router.post('/upload/:id',function(req, res, next){
  const userId=req.params.id
  req.body.userId=userId
  // console.log(req.body);
  ApplicationModel.create(req.body).then((response)=>{
    UserModel.findOneAndUpdate({_id:userId},{$set:{isRegistered:true}}).then((data)=>{
      data.isRegistered=true
      res.json(data)
    }).catch((err)=>{
      res.json(err)
    })
  }).catch((err)=>{
    res.json(err)
  })
})

router.get('/application/:id', (req, res, next) => {
  let userId=req.params.id
  ApplicationModel.findOne({userId:userId}).then((data)=>{
    res.json(data);
 }).catch(()=>{
    let err='Something went wrong!'
    res.json({err:err});
 })
 })


// router.post('/upload/:id',function(req, res, next){
//   try {

//     upload(req, res, (err) => {
//       let userId=req.params.id
//       let formData = JSON.parse(req.body)
//       console.table(formData)
//       userHelper.formSubmission(formData,userId).then((response) => {
//         const currentPath = path.join(__dirname, "../public", "companyLogo.jpg")
//         const destinationPath = path.join(__dirname, "../public/logoImages", response.id + ".jpg")
//         fs.rename(currentPath, destinationPath, function (error) {
//           if (error) {
//             throw error

//           } else {
//             // console.log('successfully mobved')
//           }
//         })
//         res.status(200).json({ success: 'form submitted successfully' })
//       })

//       if (err instanceof multer.MulterError) {
//         return res.status(500).json({ err: '12345' })
//       } else if (err) {
//         return res.status(500).json({ err: '54321' })
//       }

//     })
//   } catch (error) {
//     console.log(error)
//   }
// })

module.exports = router;

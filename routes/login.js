const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const queries = require('../queries.js')

router.get('/', function(req,res,next){

});

router.post('/', function(req,res,next){
  queries.getUserInfo(req.body.username).then((userInfo)=>{
    if(userInfo){
      bcrypt.compare(req.body.password,userInfo.password,(err, match)=>{
        if(match){
          delete userInfo.password;
          let copy = Object.assign({},userInfo);
          jwt.sign(copy, process.env.JWTSECRET, (err, token)=>{
            res.send({token});
          });
        }else{
          res.send({error: 'PASSWORD INCORRECT'});
        }
      });
    }else{
      res.send({error: 'USER DOES NOT EXIST'});
    }
  });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const queries = require('../queries.js');

router.get('/', function(req,res,next){
  jwt.verify(req.headers.authorization, process.env.JWTSECRET, (err,user)=>{
    if (err){
      res.sendStatus(401);
      return;
    }
    queries.getUsersReceipts(user.id).then((receipts)=>{
      res.send(receipts);
    });
  });
});



module.exports = router;

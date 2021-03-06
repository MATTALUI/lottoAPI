const knex = require('./knex.js');
module.exports.getUserInfo = function(username){
  return knex('users')
  .where('username', username)
  .returning('*')
  .first()
  .then((userInfo)=>{
    if(userInfo){
      return userInfo;
    }else{
      return null;
    }
  });
}
module.exports.getUsersReceipts = function(userId){
  return knex('receipts')
  .where('user_id', userId)
  .returning('*')
  .then(receipts=>receipts);
}

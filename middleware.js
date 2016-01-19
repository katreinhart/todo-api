module.exports = function(db){

  return{
      requireAuthentication: function(req, res, next) {
        console.log('authorizing');
          var token = req.get('Auth');
          console.log(token);
          db.user.findByToken(token).then(function(user){
            console.log('finding by token');
            req.user = user;
            next();
          }, function (e){
            res.status(401).send();
          });
      }
  };

};

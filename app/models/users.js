var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

//auth part
module.exports = function(sequelize, Sequelize) {
 
  var User = sequelize.define('user', {

      id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
      },

      firstname: {
          type: Sequelize.STRING,
          notEmpty: true
      },

      lastname: {
          type: Sequelize.STRING,
          notEmpty: true
      },

      username: {
          type: Sequelize.TEXT
      },

      about: {
          type: Sequelize.TEXT
      },

      email: {
          type: Sequelize.STRING,
          validate: {
              isEmail: true
          }
      },

      password: {
          type: Sequelize.STRING,
          allowNull: false
      },

      last_login: {
          type: Sequelize.DATE
      },

      status: {
          type: Sequelize.ENUM('active', 'inactive'),
          defaultValue: 'active'
      }


  });

  return User;

}

// end of auth part
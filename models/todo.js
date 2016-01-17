module.exports = function(sequelize, DataTypes){ //DataTypes is an object that contains all the data types
  return sequelize.define('todo', {
    description: {
  		type: DataTypes.STRING,
  		allowNull: false,
  		validate: {
  			len: [1, 250]
  		}
	  },
  	completed: {
  		type: DataTypes.BOOLEAN,
  		allowNull: false,
  		defaultValue: false
  	}
  });
};

module.exports = function (sequelize, DataTypes) {
    const Customer = sequelize.define("Customer", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: 'Username already in use!'
      },
  },
  
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  
      email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isEmail:true
          },
          unique: {
              args: true,
              msg: 'Email address already in use!'
          }
        }
    });
    
    return Customer;
  };
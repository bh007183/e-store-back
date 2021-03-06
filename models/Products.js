
module.exports = function (sequelize, DataTypes) {
    const Products = sequelize.define("Products", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
  
      image: DataTypes.STRING,
  
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
  
      InventoryItem: {
        type: DataTypes.BOOLEAN,
      },
  
      category: {
        type: DataTypes.STRING,
      },
  
      subCategory: { type: DataTypes.STRING },
  
      price: {
        type: DataTypes.DECIMAL(10,2),
      },
  
      quantity: {
        type: DataTypes.INTEGER,
      },
  
      tier: {
        type: DataTypes.STRING,
      },
      featured: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
  
      updatedBy: {
        type: DataTypes.STRING,
      },
  
      tax: { type: DataTypes.STRING },
  
      shipping: { type: DataTypes.STRING },
    });
    
   
    
    return Products;
  };
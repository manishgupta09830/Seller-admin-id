const Sequelize = require("sequelize");
const sequelize = new Sequelize("seller_admin", "root", "Manish@123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
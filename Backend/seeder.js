const mongoose = require("mongoose");
const dotenv = require("dotenv");
const users = require("./data/users");
const Product = require("./models/ProductModel");
const Order = require("./models/OrderModel");
const connDB = require("./config/config");
const products = require("./data/products");
const User = require("./models/user");

dotenv.config();
connDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    const createUser = await User.insertMany(users);
    const adminUser = createUser[0]._id;
    const sampleData = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleData);
    console.log("Data imported!");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

const dataDestroy = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log("Data destroyed");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] == "-d") {
  dataDestroy();
} else {
  importData();
}

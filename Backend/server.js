const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/config");
const productRoutes = require("./routes/productRoute");
const { errorHandler } = require("./middlewares/errorMiddleware");
const usersRoute = require("./routes/UsersRoute");

dotenv.config();

connectDb();
const app = express();

// MIDDLEWARE PARSER
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1> Welcome </h1>");
});

app.use("/api", productRoutes);
app.use("/api/users", usersRoute);

app.use(errorHandler);

const PORT = 8080;
app.listen(process.env.PORT || PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} on ${process.env.PORT}`
  );
});

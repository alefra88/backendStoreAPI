require("dotenv").config();
require("express-async-errors");



const express = require("express"),
  app = express();
const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");

const errorHandlerMiddleware = require("./middleware/error-handler"),
  notFoundMiddleware = require("./middleware/not-found"),
  errorMiddlerware = require("./middleware/error-handler");

//MIDDLEWARE
app.use(express.json());

//routes

app.get("/", (req, res) => {
  res.send(`<h1>Store API</h1><a href="/api/v1/products">Products route</a>`);
});

app.use("/api/v1/products", productsRouter);
//products route
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    //connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening op port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();

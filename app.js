const errorHandlerMiddleware = require("./middleware/error-handler");

const express = require("express"),
  app = express(),
  notFoundMiddleware = require("./middleware/not-found"),
  errorMiddlerware = require("./middleware/error-handler");

//MIDDLEWARE
app.use(express.json());

//rootes

app.get("/", (req, res) => {
  res.send(`<h1>Store API</h1><a href="/api/v1/products">Products route</a>`);
});

//products route
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, console.log(`server is listening op port ${port}...`));
  } catch (error) {}
};

start();

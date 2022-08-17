const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser")

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger-output.json");

const {sequelize} = require('./config');

const userRouter = require("./router/userRouter");
const orderRouter = require('./router/orderRouter');
const medicineRouter = require('./router/medicineRouter')
const depoRouter = require('./router/depoRouter');

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connection();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use('/api/v1',userRouter);
app.use('/api/v1',orderRouter);
app.use('/api/v1',medicineRouter);
app.use('/api/v1',depoRouter);

app.listen(3000, () => {
  console.log("localhost:3000");
});

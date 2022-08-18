const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser")
const cors = require("cors");
const helmet = require("helmet");

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger-output.json");

const {sequelize} = require('./config');

const userRouter = require("./router/userRouter");
const orderRouter = require('./router/orderRouter');
const medicineRouter = require('./router/medicineRouter')
const depoRouter = require('./router/depoRouter');
const orderDetailRouter = require('./router/orderDetailRouter');

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
app.use(cors(
  {
    origin: "*",
    methods: "GET,PUT,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  }
))
app.use(helmet());

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use('/api/v1',userRouter);
app.use('/api/v1',orderRouter);
app.use('/api/v1',medicineRouter);
app.use('/api/v1',depoRouter);
app.use('/api/v1',orderDetailRouter);

app.listen(3000, () => {
  console.log("localhost:3000");
});

const express = require('express');

const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger-output.json');

const { sequelize } = require('./config');

const userRouter = require('./router/userRouter');
const orderRouter = require('./router/orderRouter');
const medicineRouter = require('./router/medicineRouter');
const depoRouter = require('./router/depoRouter');
const orderDetailRouter = require('./router/orderDetailRouter');

dotenv.config();
const PORT = process.env.PORT || 3000;

const connection = async () => {
  let retries = 5;
  while (retries) {
    try {
      await sequelize.authenticate();
      break;
    } catch (error) {
      retries -= 1;
    await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }
};

connection();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(
  cors({
    origin: '*',
    methods: 'GET,PUT,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  }),
);
app.use(helmet());

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use('/api/v1', userRouter);
app.use('/api/v1', orderRouter);
app.use('/api/v1', medicineRouter);
app.use('/api/v1', depoRouter);
app.use('/api/v1', orderDetailRouter);

app.listen(PORT);

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const sequelize = require('./config');
const model = require("./models/user");
const userRouter = require("./router/userRouter");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connection = async () =>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

connection()

app.use('/api/v1',userRouter)

app.listen(3000, () => {
  console.log("localhost:3000");
});

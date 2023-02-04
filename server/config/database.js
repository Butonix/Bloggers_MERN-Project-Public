const mongoose = require("mongoose");
const connectDB = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to database!"))
    .catch((error) => console.log(error));
};

module.exports = connectDB;

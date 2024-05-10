const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://abraham:nazvidanie123@crudmern.rskjgkq.mongodb.net/dashboard?retryWrites=true&w=majority&appName=CrudMern"
    );
    console.log(">>> DB is connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;

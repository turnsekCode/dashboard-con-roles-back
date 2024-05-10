const app = require("./app");
const connectDB = require("./db/db");

const port = process.env.PORT || 4000;

connectDB();
app.listen(port);
console.log("Server on port", port);

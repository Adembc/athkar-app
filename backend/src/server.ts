import dotenv from "dotenv";
import mongoose from "mongoose";
import { errorHandler } from "./errorHandler/ErrorHandler";
import BaseError from "./errorHandler/BaseError";
dotenv.config({ path: `${__dirname}/../config.env` });
import app from "./app";
// connect database
const DB = process.env.DB_LOCAL;
mongoose.connect(DB).then(() => {
  console.log("Database connect successfully :)");
});
// run server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}... ON ${process.env.NODE_ENV} MODE`);
});
// error handling
process.on("uncaughtException", (error: BaseError, res) => {
  errorHandler.handleError(error, res);
  if (!errorHandler.isTrustedError(error)) {
    process.exit(1);
  }
});

const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");
const connectDB = require("./config/database");
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");
const errorMiddleware = require("./middlewares/errorMiddleware");
// require("dotenv").config({ path: "server/config/config.env" });

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

const app = express();
const PORT = process.env.PORT || 3434;

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL);
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
//   next();
// });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/user-detail", userRoutes);
app.use("/api/manage", adminRoutes);
app.use(errorMiddleware);

if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
  connectDB();
});

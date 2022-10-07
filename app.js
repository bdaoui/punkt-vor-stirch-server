const express = require("express");
const cors = require("cors");

const app = express();

// env requirement
require('dotenv').config()



// ℹ️ Connects to the database
require("./db");

// Cors
app.use(
    cors({
      credentials: true,
      origin: process.env.ORIGIN || "http://localhost:3000",
    })
  );



  // To have access to `body` property in the request
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  



// Routing

const authRoutes = require('./routes/auth.routes');
app.use("/admin", authRoutes);

const editRoutes = require("./routes/edit.routes");
app.use("/edit", editRoutes);


// Start Server

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
  });



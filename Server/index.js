const express = require("express");
const connectDb = require("./config/db");
const cors = require('cors');
const authRoutes = require("./routes/authRoutes");
const propertyRoutes = require("./routes/propertyRoutes");

const app = express();
const PORT = process.env.PORT || 3050;
app.use(cors({
    origin : '*',
    
}));

// Connect to DB
connectDb();

// Parse JSON request body
app.use(express.json());

// authentication routes
app.use("/auth", authRoutes);
// property routes
app.use("/property", propertyRoutes);

// Wildcard matching routes
app.use("*", (err, req, res, next)=>{
    res.status(500).json({
        message : err.message
    });
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});

const express = require("express");
const connectDb = require("./config/db");
const cors = require('cors');
const authRoutes = require("./routes/authRoutes");
const propertyRoutes = require("./routes/propertyRoutes");
const userRoutes = require("./routes/userRoutes");
const ErrorHandler = require("./middleware/ErrorHandler");

const app = express();
const PORT = process.env.PORT || 3050;
app.use(cors({
  origin : ["http://localhost","http://localhost:5173","http://localhost:5174"],
    credentials:true,
    credentials : true,
}));

// Connect to DB
connectDb();

// Parse JSON request body
app.use(express.json());
// make images accessible from outside
app.use(express.static('assets/uploads'));

// authentication routes
app.use("/auth", authRoutes);
// property routes
app.use("/property", propertyRoutes);
// user routes
app.use("/users", userRoutes);

// Wildcard matching routes
app.use("/*", (req, res, next)=>{
    next(new Error(`This ${req.originalUrl} isn't on this server!`));
});

// Error Handler 
app.use(ErrorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});

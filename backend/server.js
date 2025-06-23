import connectDB from "./config/dbConn.js";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

const start = async () => {
    await connectDB();
}

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

start();
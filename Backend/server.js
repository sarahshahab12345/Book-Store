import express from "express"; 
import dotenv from "dotenv"; 
dotenv.config(); 
import bookRouter from "./routes/book-routes.js"; 
import connectToDb from "./config/db-config.js"; 
import cors from "cors"; 

connectToDb();

const server = express();

const port = process.env.PORT || 5001; 

server.use(express.json()); 

server.use(cors("*"));

server.use("/api/books", bookRouter);

server.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

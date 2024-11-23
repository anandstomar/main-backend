import express, { json } from "express";
const app = express();
import routes from "../routes/routes.js"; // Assuming routes.js is in the same directory

app.use(json()); // Middleware for JSON parsing
app.use("/api", routes); // Mount routes under "/api"

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


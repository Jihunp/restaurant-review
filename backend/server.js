import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

// for the server creation
const app = express()

app.use(cors())
// server can now read json through express
app.use(express.json())
// initial routes
app.use("/api/v1/restaurants", restaurants)
app.use("*", (req, res) => res.status(404).json({error: "not found"}))

export default app

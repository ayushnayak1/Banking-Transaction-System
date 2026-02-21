const express = require("express")
const cookieParser = require("cookie-parser")



const app = express()


app.use(express.json())
app.use(cookieParser())
const cors = require("cors");

app.use(cors({
  origin: "http://localhost:5173",  // your frontend
  credentials: true
}));

/**
 * - Routes required
 */
const authRouter = require("./routes/auth.route.js")
const accountRouter = require("./routes/account.route.js")
const transactionRoutes = require("./routes/transaction.route.js")

/**
 * - Use Routes
 */

app.get("/", (req, res) => {
    res.send("Ledger Service is up and running")
})

app.use("/api/auth", authRouter)
app.use("/api/accounts", accountRouter)
app.use("/api/transactions", transactionRoutes)

module.exports = app
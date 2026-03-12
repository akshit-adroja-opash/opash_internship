<<<<<<< HEAD
const express = require("express")
const cookieParser = require("cookie-parser")



const app = express()


app.use(express.json())
app.use(cookieParser())

/**
 * - Routes required
 */
const authRouter = require("./routes/auth.routes")
const accountRouter = require("./routes/account.routes")
const transactionRoutes = require("./routes/transaction.routes")

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
=======
const express = require('express');

const authRouter = require('./routes/auth.routes');

const app = express();

app.use(express.json());

app.use("/api/auth", authRouter);

module.exports = app;
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1

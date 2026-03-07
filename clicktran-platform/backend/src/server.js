const express = require("express")
const cors = require("cors")
const { PrismaClient } = require("@prisma/client")
const profileRoutes = require("./routes/profile")
const linksRoutes = require("./routes/links")

const prisma = new PrismaClient()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/profile", profileRoutes)
app.use("/links", linksRoutes)

app.listen(4000, () => {
    console.log("API running on port 4000")
})
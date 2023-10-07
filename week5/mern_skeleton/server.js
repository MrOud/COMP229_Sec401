const express = require('express')
const path = require('path')
const app = express()
const assestsRouter = require("./server/assets-router")

app.use("/src", assestsRouter)
app.use("/", express.static(path.join(__dirname, "public")))
app.get("/api/v1", (req, res) => {
    res.json({
        project: "React and Express Boilerplate",
        from: "Vader"
    })
})
app.get("/*", (_req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})
const { PORT = 5000 } = process.env
app.listen(PORT, () => {
    console.log()
    console.log(`App running on port ${PORT}`)
    console.log()
})
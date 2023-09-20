const express = require('express')

var app = express()

app.use("/projects", function (req, res) {
    res.send("Projects pages get loaded")
})

app.use("/about", function (req, res) {
    res.send("About pages get loaded")
})

app.use("/services", function (req, res) {
    res.send("Serivces pages get loaded")
})

app.use("/contact", function (req, res) {
    res.send("contact pages get loaded")
})

app.use("/", function (req, res) {
    res.send("Home page")
})

app.listen(4000)

console.log("Server now live @ http://127.0.0.1:4000")
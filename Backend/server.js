const express = require("express")
const app = express()
const PORT = 8080

app.get("/api/v1", (req, res) => {
    res.json({ "users": ["one", "two"] })
})

app.listen(PORT, () => { console.log(`Server started on ${PORT}`) })
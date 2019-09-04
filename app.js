var express = require("express");
var app = express();
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
app.get("/api/getNumbers", (req, res, next) => {
    res.json([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
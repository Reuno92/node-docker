const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hi There</h1>");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`listening on port http://localhost:${PORT}`));

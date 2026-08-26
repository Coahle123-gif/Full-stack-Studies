import express from "express";
const app = express();
const PORT = 40000;

app.get("/", (req, res) => {
    res.send("<h1>Hello, Express!</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>This is the About page!</h1><p>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</p>");
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
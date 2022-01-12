const express = require('express');
const app = express();
const routerFiles = require("./routes/upload");
const routerUsers = require("./routes/users");

const cors = require('./middleware/cors');

app.get('/', (req, res) => {res.json({statusAPI: "API is running"})});

app.use(express.json());
app.use(routerFiles)
app.use(cors.cacheandCorsController,routerUsers)
// res send 404 express error   
app.use((req, res, next) => {
    res.status(404).json({ error: "Not found" });
    next(); 
});



app.listen(3000, () => {console.log('LETS GOOO API!');});
// --------------- Packages --------------------
const express = require("express"); // backend web application
const app = express(); // instanstiate
const PORT = process.env.PORT || 8080; //if the enviroment is given a port --> use that, else use 8080
const db = require("./models"); // grab the model we created
// ---------------------------------------------


// --------------- Set-up ----------------------
app.use(express.urlencoded({extended : true})) // extended is true so we can post "nested objects"
app.use(express.json()); // set to use Json
app.use(express.static("public")); // serve static files such as images, CSS files, and JavaScript files
// ---------------------------------------------


// ---------- Create Server Methods ------------

app.get("/api/devices", async function(req, res) {
    const model = await db.Model.findAll({});
    res.json(model);
})

app.get("/api/devices/:id", async function(req, res) {
    const model = await db.Model.findOne({
        where : {
            id : req.params.id
        }
    });
    res.json(model);
})

app.post("/api/devices", async function(req, res) {
    // Gaurd Clase to ensure text was passed in
    if(!req.body.text){
        return res.status(400).json({
            error: "Missing the text Property",
            status: 400
        })
    }
    const model = await db.Model.create(req.body)
    res.json(model);
});

// ---------------------------------------------



// --------Sync the app to the mySql server------------
db.sequelize.sync().then(function() {
    app.listen(PORT, () => console.log('app is listening on PORT:${PORT}'));
});
// ----------------------------------------------------
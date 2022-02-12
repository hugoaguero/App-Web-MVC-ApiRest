const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const routes = require("./routes/index");
const app = express();

// settings
const portDefault = 3000;
app.set('port', process.env.PORT || portDefault);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use((req, res, next) => {
    console.log(`${req.url} + ${req.method}`);
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// routes
app.use(routes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// start server
app.listen(app.get('port'), () => {
    console.log(`Server listening on port:`, app.get('port'));
});
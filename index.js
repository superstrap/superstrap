const app = require("express")();
const ejs = require("ejs");
const port = 5151;

const projects = require("./projects");
const route = require("./route");

app.engine("html", ejs.renderFile);
app.set('view engine', "html");
app.set('views', __dirname + '/temp');

app.use(route.signIn);

app.use(require("express").static(__dirname + "/public"));

/*app.get("/", (req, res) => {
  res.render("index")
});*/

app.get("/", (req, res) => {
  res.render("demo")
});


app
  .get("/docs/getting-started/introduction", (req, res) => {
    res.render("docs/getting-started/introduction/index")
  })
  ;

app.use(route[404])

app.listen(port);

console.log("server started at port " + port);
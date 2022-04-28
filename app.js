const express = require("express");
const mainRouter = require("./routers/main")

const app = express();
const port = 3000;

app.use(express.static("public"))

app.use("/",mainRouter);
app.use("/about",mainRouter);

app.listen(port, ()=>{
    console.log("Servidor conrriendo en el puerto" + port);
});

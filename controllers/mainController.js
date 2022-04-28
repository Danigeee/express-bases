//llamar a path
const path = require("path");

//crear el objeto main controler
let mainController = {
    //crear un metodo que tenga el (req, res) para / y para /about y responder con un archivo que es la vista
    index: function(req,res){
        res.sendFile(path.join(__dirname,"../views/home.html"))
    },
    about: function(req,res){
        res.sendFile(path.join(__dirname,"../views/home.html"))
    }

};

//expoirtar el controlador 
module.exports = mainController;
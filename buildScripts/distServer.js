/*eslint-disable no-console*/
import express  from "express";
import path from "path";
import open from "open";
import compression from "compression";

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static("dist"));

// App Routing
app.get("/", function(req, res)
{
    res.sendFile(path.join(__dirname,"../dist/index.html"));
});

//API to get User data
app.get("/users", function (req,res){
    //Hard coding for simiplicity. Pretend this hits a real DB
    res.json([
        {"id":1, "firstName":"Bob", "lastName":"Smith", "email":"bob@gmail.com"},
        {"id":2, "firstName":"Tammy", "lastName":"Norton", "email":"tnorton@gmail.com"},
        {"id":3, "firstName":"Tina", "lastName":"Lee", "email":"lee.tina@gmail.com"}
    ]);

});

app.listen(port,function(err){
    if(err)
    {
        console.log(err);
    }
    else
    {
        open("http://localhost:"+ port)
    }
});
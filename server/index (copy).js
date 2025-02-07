const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mysql = require("mysql")
const cookieParser = require("cookie-parser")
const session = require("express-session")

const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}))
app.use(session({
    key: "userId",
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24
    }
}))

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "hackathon"
})

app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if(username || password == "") res.send("You must fill up all fields")
    const sqlRegister = "INSERT INTO users (username, password) VALUES (?,?)";
    db.query(sqlRegister, [username, password], (err, result) =>{
        if(err) console.log(err)
        if(result) console.log(result)
    })
})

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if(username || password == "") res.send("You must fill up all fields")
    const sqlLogin = "SELECT * FROM users WHERE username = ?;"
    db.query(sqlLogin, username, (err, result)=>{
        if(err) console.log(err);
        else{
            if(result.length>0) {
                if(result[0].password == password) req.session.user = result[0];
                else res.send("Incorrect password")
            }
            else res.send("User doesn't exist")
        }
    })
})


app.listen(3001, ()=>{
    console.log("Listening on port 3001")
})


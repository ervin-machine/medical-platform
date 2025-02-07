const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mysql = require("mysql")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const http = require("http")
const { resourceLimits } = require("worker_threads")
const app = express();
const server = http.createServer(app)
const io = require("socket.io")(server, {
	cors: {
		origin: "*",
		methods: [ "GET", "POST" ]
	}
});


app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(session({
    key: "userId",
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24 * 1000
    }
}))

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "db_teamone"
})

app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const position = req.body.position;
    const jmbg = req.body.jmbg;
    const token = req.body.token;

    if(!(username || password || position || jmbg || token == "")) { res.send("You must fill up all the fields"); return}
    if(position == "doctor" && token != "dr1"){ res.send("Wrong token"); return}
    if(position == "pharmacist" && token != "ph2") { res.send("Wrong token"); return}
    if(position == "patient" && token != "pt3") { res.send("Wrong token"); return}

    const sqlRegister = "INSERT INTO users (username, password, position, jmbg) VALUES (?,?,?,?)";
    db.query(sqlRegister, [username, password, position, jmbg], (err, result) =>{
        if(err) { console.log(err);  return}
        if(result) console.log(result)
    })


    const sqlChat = "INSERT INTO Chat (ImeChata) VALUES (?)";
    db.query(sqlChat, [username], (err, result) => {
        if(err) console.log(err);
        if(result) console.log(result);
    })

})

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
   
    const sqlLogin = "SELECT * FROM users WHERE username = ?;"
    db.query(sqlLogin, username, (err, result)=>{
        if(err) console.log(err);
        else{
            if(result.length>0) {
                if(result[0].password == password) {
                    req.session.user = result[0]
                    res.send({result: result[0], loggedIn: true})
                    console.log({result: result[0], loggedIn: true})
                }
                    
                else res.send("Incorrect password")
            }
            else res.send("User doesn't exist")
        }
    })  
})

app.post('/messagecall', (req, res) => {
    const { Poruka, IdPosiljaoca, DatumPoruke, chat_id } = req.body;
    const sqlMessage = "INSERT INTO Poruke (Poruka, IdPosiljaoca, DatumPoruke, chat_id) VALUES (?, ?, ?, ?)";
    db.query(sqlMessage, [Poruka, IdPosiljaoca, DatumPoruke, chat_id], (err, result) => {
        if(err) console.log(err);
        if(result) console.log(result);
    })
})
app.post('/messages', (req, res) => {
    const { Poruka, IdPosiljaoca, DatumPoruke, chat_id } = req.body;
    const sqlMessage = "INSERT INTO Poruke (Poruka, IdPosiljaoca, DatumPoruke, chat_id) VALUES (?, ?, ?, ?)";
    db.query(sqlMessage, [Poruka, IdPosiljaoca, DatumPoruke, chat_id], (err, result) => {
        if(err) console.log(err);
        if(result) console.log(result);
    })
})

app.get('/messageslist', (req, res) => {
    const sqlMessageList = "SELECT Poruke.Poruka, Chat.ID, Poruke.IdPosiljaoca, users.id, users.username FROM Poruke LEFT JOIN Chat ON Chat.ID = Poruke.chat_id LEFT JOIN users ON users.id = Poruke.IdPosiljaoca;";
    db.query(sqlMessageList, (err, result) => {
        if(err) console.log(err);
        if(result) res.send(result);
    })
})

app.get("/chatlist", (req, res) => {
    const sqlChatList = "SELECT * FROM Chat"
    db.query(sqlChatList, (err, result) => {
        if(err) console.log(err)
        if(result) res.send(result);
    })
})

app.get("/login", (req, res) => {
    if(req.session.user){
        res.send({
            loggedIn: true,
            user: req.session.user
        })
        console.log({
            loggedIn: true,
            user: req.session.user
        })
    }
    else {
        res.send({loggedIn: false});
    }
})

app.post("/patient", (req, res) => {
    const jmbg = req.body.jmbg;
    console.log(jmbg)
    
    const sqlPatient = "SELECT * FROM patients WHERE jmbg = ?;"
    db.query(sqlPatient, jmbg, (err, result)=>{
       if(result) console.log(result[0])
        if(err) console.log(err);
        else{
            if(result.length>0) {
                
                res.send(result[0]);
                    
                
            }
            else res.send("User doesn't exist")
        }
    })
    console.log(req.session.user)   
})

app.post("/addDiagnosis", (req, res) => {
    const jmbg = req.body.jmbg;
    const dg_name = req.body.dg_name;
    const dg_desc = req.body.dg_desc;
    const doctor = req.body.doctor;
    
    const sqlAddDiagnosis = "INSERT INTO diagnosis (jmbg, dg_name, dg_desc, dg_date, doctor) VALUES (?, ?, ?, CURDATE(), ?)"
    db.query(sqlAddDiagnosis, [jmbg, dg_name, dg_desc, doctor], (err, result)=>{
       if(result) console.log(result[0])
        if(err) console.log(err);
       
    })
})

app.post(`/diagnosis`, (req, res) => {
    const jmbg = req.body.jmbg
    const sqlDiagnosis = "SELECT * FROM diagnosis WHERE jmbg = ?"
    db.query(sqlDiagnosis, jmbg, (err, result) => {
        if(err) console.log(err)
        if(result) {res.send(result)
        console.log(result)};
    })
})

app.post("/AddAppointment", (req, res) => {

    console.log("trying to send")
    const jmbg = req.body.jmbg;
    const dateSc = req.body.dateSc;
    
    const sqlAddDiagnosis = "INSERT INTO appointment (jmbg, dateSc) VALUES (?,?)"
    db.query(sqlAddDiagnosis, [jmbg, dateSc], (err, result)=>{
       if(result) console.log(result[0])
        if(err) console.log(err);
       
    })
})

app.post(`/appointment`, (req, res) => {
    const jmbg = req.body.jmbg
    const sqlDiagnosis = "SELECT * FROM appointment WHERE jmbg = ?"
    db.query(sqlDiagnosis, jmbg, (err, result) => {
        if(err) console.log(err)
        if(result) {res.send(result)
        console.log(result)};
    })
})



io.on("connection", (socket) => {
	socket.emit("me", socket.id);

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});
});
server.listen(3001, ()=>{
    console.log("Listening on port 3001")
})


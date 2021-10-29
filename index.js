const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 2001;
 
/*
// System=1:
const handler=(req,res)=>{
    res.send("hello from node");
}

app.get("/",handler);
*/


// System-2:(Better)
app.get ('/', (req,res)=>{
    res.send("Wow! I am excited! Hello from my first ever node...Hey Whats up?")
});

const users=[
    {id:0, name:'Katrina', email:'shavana123@gmail.com', phone:'+880173837638'},
    {id:1, name:'Jacquline', email:'jacky123@gmail.com', phone:'+880173837639'},
    {id:2, name:'Sharadda', email:'sharadda123@gmail.com', phone:'+880173837630'},
    {id:3, name:'Kriti', email:'kriti123@gmail.com', phone:'+880173837611'},
    {id:4, name:'Deepika', email:'deepika123@gmail.com', phone:'+880173837612'},
    {id:5, name:'Anushka', email:'anushka123@gmail.com', phone:'+880173837613'},
    {id:6, name:'Parineeti', email:'pari123@gmail.com', phone:'+880173837614'}
]

app.get("/users",(req,res)=>{
    const search=req.query.search;
    // use query parameter
    if(search){
const searchResult=users.filter(user=> user.name.toLocaleLowerCase().includes(search));
res.send(searchResult);
    }
    else{
        res.send(users)
    }
});
//app.METHOD
app.post("/users", (req,res)=>{
    const newUser=req.body;
    newUser.id=users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

//dynamic API
app.get('/users/:id',(req,res)=>{
const id=req.params.id;
const user=users[id];
res.send(user);

})

app.get('/fruits', (req,res)=>{
    res.send(['mango','orange','guava'])
})

app.get('/fruits/mango/fazli', (req,res)=>{
    res.send('Yummy yummy tok marka fazli latest ')
})

app.listen(port,()=>{
    console.log('listening to port', port)
});
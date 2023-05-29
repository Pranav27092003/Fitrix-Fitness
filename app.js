 const express = require("express"); // imported the express module
const path = require("path");
const fs = require("fs");
const app = express(); // making app
const port = 80;

// EXPRESS SPECIFIC
app.use('/static', express.static('static'));
app.use(express.urlencoded());

// PUG SPECIFIC STUFF   
app.set('view engine','pug');// set the template engine as pug
app.set('views', path.join(__dirname,'views'));// set the views directory

// ENDPOINTS
app.get("/", (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('index.pug');
});

app.post('/' , (req,res)=>{

    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    locality = req.body.address
    contactnumber = req.body.contactnumber

 let outputToWrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${locality} and his contact number is ${contactnumber}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('index.pug', params);

});

// START THE SERVER
app.listen(port, ()=>{
    console.log(`This application started successfully on port ${port}`);
}); 
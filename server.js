const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios").default;

const PORT = process.env.PORT || 9000;

const users = [
    {email : "test@test.com", age : 32},
    {email : "test1@test.com", age : 33}
]
app.get("/api/users", (req, res) => {
    res.send(users);
})

app.get("/todo", (request, response) => {
    response.send({message : "SUCCESS"});
})

// app.get("/demo", (req, res) => {    
//     res.sendFile(path.join(__dirname, "/public/index.html"));
// })

// app.get("/some-action", (req, res) => {
//     axios.get("https://api.mapbox.com/geocoding/v5/mapbox.places/delhi.json?access_token=pk.eyJ1Ijoic3luZXJneTI0MTEiLCJhIjoiY2p4NXc0cm53MDZoODQwbHFuNzdzMzV5NCJ9.DKIDo6bcG51yLXf2DmlYcQ")
//         .then(response => console.log(response));
//     res.send({message : "Form Submitted"});
// })

app.listen(PORT, () => {
    console.log("Express Server running on Port 9000...");
})
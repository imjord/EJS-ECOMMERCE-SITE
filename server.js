const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./db/connection');


// **Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));



//Routes
// app.use(routes);

// wild
// app.use((req,res) => {
//     res.status(404).end();
// })

app.get('/', (req,res)=> {
    res.json({"message": "connected"})
})

// ** Open DB and Server
db.once('open', () => {
    console.log(`mongodb db connected`)
    app.listen(PORT, () => {
        console.log(`Server connected to ${PORT} 🌐`);
    })
})
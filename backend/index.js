const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
// const bodyParser = require("body-parser")
const app = express()
const Routes = require("./routes/route.js")
const MONGO_URL='mongodb://localhost:27017/schooldb'

const PORT = process.env.PORT || 5000
const db = MONGO_URL;

dotenv.config();

// app.use(bodyParser.json({ limit: '10mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use(express.json())
app.use(cors())

mongoose
    .connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log(`Connected to MongoDB at ${db}`);
        // Listing all collections after successful connection
        mongoose.connection.db.listCollections().toArray(function(err, collections) {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Collections:");
            collections.forEach(collection => console.log(collection.name));
        });
    })
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err));

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './config.env' });

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to MongoDB');
    }
});

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phonenum: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const User = mongoose.model('User', UserSchema);

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("App is Working");
});

app.post("/register", async (req, res) => {
    try {
        const user = new User(req.body);
        let result = await user.save();
        res.send(result);
    } catch (e) {
        res.status(500).send("Something Went Wrong");
    }
});

app.get("/get-submissions", async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (e) {
        res.status(500).send("Error fetching data");
    }
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

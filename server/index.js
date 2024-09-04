const mongoose = require('mongoose');









// MongoDB Connection
mongoose.connect('mongodb+srv://smoggysai555:saisharan@clusterappscomp.71d5ori.mongodb.net/?retryWrites=true&w=majority&appName=Clusterappscomp')
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));


// Schema for users of app




// Routes
const UserSchema = new mongoose.Schema({
    Fname: {
        type: String,
        required: true,
    },
    Lname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
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
const User = mongoose.model('users', UserSchema);
User.createIndexes();
 
// For backend and express

const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/hello", async(req, resp) => {
    const user= await User.find();

 
    resp.json(user);
    
});
 
app.post("/register", async (req, resp) => {
    try {
        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            resp.send(req.body);
            console.log(result);
        } else {
            console.log("User already register");
        }
 
    } catch (e) {
        resp.send("Something Went Wrong");
    }
});
app.listen(5001);

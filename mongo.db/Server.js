const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://sheema:Sheema123@cluster0.gws00yf.mongodb.net/?appName=Cluster0")

.then(() => {
    console.log("Connected to MongoDB");
})

    .catch((error) => {
        console.error(error);
    });
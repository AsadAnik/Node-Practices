const mongoose = require('mongoose');

// take Promise and make connection..
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test');

// Schema..
// Schema defines the types of data..
const carSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    strok: Boolean
});

// Make Model..
const Car = mongoose.model('Car', carSchema);




// Insert Data with help of Car instence..
const addCar = new Car({
    brand: 'Ferrari', 
    model: 'F1.z',
    year: 2000,
    strok: false
});

addCar.save((err, doc) => {
    if (err) return console.log(err);
    console.log(doc);
});




// Get/Read Data with find, findOne, findById method..
// find (to see all data)...
Car.find((err, doc) => {
    if (err) return console.log(err);
    console.log(doc);
});

// findOne (to see one data at a time)..
Car.findOne({year: 2007}, (err, doc) => {
    if (err) return console.log(err);
    console.log(doc);
});

// findById (to see data by it's id)..
Car.findById("61065c353f17420a4aa06549", (err, doc) => {
    if (err) return console.log(err);
    console.log(doc);
});




// Delete/Remove data with findOneAndRemove, findByIdAndRemove, remove, deleteOne, deleteMany..
// findOneAndRemove..
Car.findOneAndRemove({brand: 'Ford'}, (err, doc) => {
    if (err) return console.log(err);
    console.log(doc);
});

// findByIdAndRemove..
Car.findByIdAndRemove("610672fc742fa31a516ca8d8", (err, doc) => {
    if (err) return console.log(err);
    console.log(doc);
});

// remove..
Car.remove({year: 2006}, (err, doc) => {
    if (err) return console.log(err);
    console.log(doc);
});

// deleteOne..
Car.deleteOne({year: 1999}, (err, doc) => {
    if (err) return console.log(err);
    console.log(doc);
});

// deleteMany..
Car.deleteMany({year: 2005}, (err, doc) => {
    if (err) return console.log(err);
    console.log(doc);
});




// Update data with update, findByIdAndUpdate..
Car.update({_id: "610672d82383ef19f9efc01a"},{$set: {model: 'Flaster'}}, (err, doc) => {
    if (err) return console.log(err);
    console.log(doc);
});

// findByIdAndUpdate..
Car.findByIdAndUpdate("610672d82383ef19f9efc01a", { 
    $set: {
        model: 'Alien'
    } 
}, 
    { new: false },
    (err, doc) => {
        if (err) return console.log(err);
        console.log(doc);
});

// same thing with different idea..
Car.findById("610672d82383ef19f9efc01a", (err, car) => {
    if (err) return console.log(err);

    // update..
    car.set({
        year: 2021,
        strok: true
    });

    // save..
    car.save((err, doc) => {
        if (err) return console.log(err);
        console.log(doc);
    });
});
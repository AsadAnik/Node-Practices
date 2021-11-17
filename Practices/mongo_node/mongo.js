// got error collection is not a function..
// collection function supports on mongodb version "2.2.33"..
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/test';


// Make Connection with MongoDB..
MongoClient.connect(url, (err, db) => {
    if (err){
        console.log('Can\'t connected!');
    }
    console.log('Connected!');
    db.close();
});


// Inserting Data to MongoDB...
MongoClient.connect(url, (err, db) => {
    if (err) {
       return console.log(`Can't connected error is ${err}`);
    }

    // this gonna insert as data..
    const newCar = {
        brand: 'Bmw',
        model: 'RTX GTR',
        year: 2020,
    };

    // insert single data..
    db.collection('cars').insert(newCar, (err, res) => {
        if (err) {
            return console.log(`can't insert data ${err}`);
        }
        // get data..
        console.log(res.ops);

        // get timestamp..
        const timestamp = res.ops[0]._id.getTimestamp();
        console.log('TimeStamp here -> ', timestamp);
    });

    // insert multiple data..
    // the multiple data here..
    const newShipOfCollection = [
        { brand: 'Mistubeshi', model: 'corolla', year: 2017 }, 
        { brand: 'Nissan', model: 'GTR-5', year: 2021 }, 
        { brand: 'iSuzuki', model: 'Zibrea', year: 2020 }, 
    ];

    // inserting..
    db.collection('cars').insertMany(newShipOfCollection, (err, res) => {
        if (err){
            return console.log(`can't insert data ${err}`);
        }
        // get data..
        console.log(res.ops);

        // get also timestamp...
        const timestamp = res.ops[0]._id.getTimestamp();
        console.log('TimeStamp here -> ', timestamp);
    });

    db.close();
});


// Get or, Show data..
// All data showing from database..
MongoClient.connect(url, (err, db) => {
    if (err){
        console.log('Can\'t connected!');
    }

    // get all data from db..
    db.collection('cars').find().toArray().then(data => {
        console.log(data);
    });

    // get all data without promise..
    db.collection('cars').find().toArray((err, docs) => {
        console.log(docs);
    });

    // skip data and show..
    db.collection('cars').find().skip(2).toArray().then(data => {
        console.log(data);
    });

    // limit amount of data and show..
    db.collection('cars').find().limit(4).toArray().then(data => {
        console.log(data);
    });

    // sort data bottom to top and show..
    db.collection('cars').find().sort({_id: -1}).toArray().then(data => {
        console.log(data);
    });

    // find similar common data and show..
    db.collection('cars').find({year: 2020}).toArray().then(data => {
        console.log(data);
    });

    // find specific data and show..
    db.collection('cars').findOne({year: 2014}, (err, docs) => {
        console.log(docs);
    });

    // specific data and specific property..
    // model and year should not be shown because of 0 means false..
    db.collection('cars').findOne({year: 2020}, {model: 0, year: 0}, (err, docs) => {
        console.log(docs);
    });

    db.close();
});


// Delete Data...
MongoClient.connect(url, (err, db) => {
    if (err){
        console.log(`Connection error ${err}`);
    }

    // delete specific single data..
    db.collection('cars').deleteOne({brand: 'Nissan'}).then(data => {
        console.log(data);
    });

    // another way of delete single data..
    db.collection('cars').findOneAndDelete({model: 'RTX GTR'}).then(data => {
        console.log(`Deleted: ${data.deletedCount} items`);
    });

    // delete common items multiple data...
    db.collection('cars').deleteMany({year: 2018}).then(data => {
        console.log('Deleted items: ', data.deletedCount);
    });

    db.close();
});


// Update data..
MongoClient.connect(url, (err, db) => {
    if (err){
        return console.log(`Cannot connect with DB: ${err}`);
    }

    // update data..
    db.collection('cars').findOneAndUpdate({ brand: 'Mercidies' }, 
        { 
            $set: {brand: 'Mercidies', model: 'Benz - X'},
        })
        .then(data => {
            console.log(data);  
        }
    );

    // update with increments..
    db.collection('cars').findOneAndUpdate({ brand: 'Ferrari' }, {
        $set: {model: 'Fz'},
        $inc: {year: +2}
    }).then(data => {
        console.log(data);
    });

    // when not find data to update so create one with upsert..
    db.collection('cars').findOneAndUpdate({ brand: 'Land Rover' }, {
        $set: { model: 'Bult Bool', year: 2021 }
    }, {
        upsert: true
    }).then(data => {
        console.log(data);
    });

    // retrun existing data or new one with udpate..
    db.collection('cars').findOneAndUpdate({ brand: 'Range Rover' }, {
        $set: { model: 'Eagle Range', year: 2018 }
    }, {
        returnOriginal: true,
    }).then(data => {
        console.log(data);
    });

    db.close();
});
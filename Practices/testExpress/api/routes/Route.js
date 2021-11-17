//Creating for Routing system for Express ....
const express = require('express');
const Router = express.Router();

///The Virtual Database (Custom)..
let apiList = [];

//POST..
Router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'API Published on GET method!'
    })
})

//GET..
Router.get('/', (req, res, next) => {
    // res.status(200).json(staffs);
    // res.json(apiList);

    if(apiList.length > 0){
        res.json(apiList);
    }else{
        res.json(staffs);
    }
    res.status(200);
})

///The Dynamic_Route for API...
//GET..
Router.get('/:id', (req, res, next) => {
    const name = req.params.id.toUpperCase();
    const url = req.url;

    res.json({
        name,
        address: url
    })
})
//POST..
Router.post('/:id', (req, res, next) => {

    //Post's cames from the body-parser..
    const name = req.body.name;
    const email = req.body.email;
    
    //Keep data into Virtual Database..
    apiList.push({
        name,
        email
    })

    res.status(201).json({
        message: `The Dynamic Route ${req.url}`,
        statusCode: '201',
        status: 'Data Saved...'
    })
})

//Another Multiple Routes..
//PUT..
Router.put('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'I am PUT'
    })
})
//PATCH..
Router.patch('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'I am PATCH'
    })
})
//DELETE..
Router.delete('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'I am DELETE!'
    })
})

///Some Data..
const staffs = [
    {
        name: 'Alexes Devil',
        age: 45,
        passion: 'Software Developer'
    }, 
    {
        name: 'John Daubt',
        age: 30,
        passion: 'IT Professional'
    }, 
    {
        name: 'Asfar Afraan',
        age: 22,
        passion: 'Security Professional'
    }
];

module.exports = Router;
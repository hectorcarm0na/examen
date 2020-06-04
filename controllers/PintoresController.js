let mongoose = require('mongoose');
let pintores = require('../models/pintores');

let pintoresController = {};

/*LISTAR*/
pintoresController.list = (req, res)=>{
    pintores.find({})
        .limit(20)
        .skip(0)
        .exec((err, estatal)=>{
            if (err){
                console.log('Error:',err);
            }
            res.render('../views//index',{
                pintores: pintor,
                title: "listado de pintores",
                year: new Date().getFullYear()
            });
        })
};

module.exports = pintoresController;
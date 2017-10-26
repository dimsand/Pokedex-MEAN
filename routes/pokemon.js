var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Pokemon = require('../models/Pokemon.js');

/* GET ALL POKEMONS */
router.get('/', function(req, res, next) {
    console.log('test');
  Pokemon.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE POKEMON BY ID */
router.get('/id/:id', function(req, res, next) {
    Pokemon.findOne({ 'id': req.params.id }, function (err, pokemon) {
        if (err) return next(err);
        console.log("POKEMON")
        console.log(pokemon)
        res.json(pokemon);
    })
});

/* GET SINGLE POKEMON BY NAME */
router.get('/name/:name', function(req, res, next) {
    Pokemon.findOne({ 'name': req.params.name }, function (err, pokemon) {
        if (err) return next(err);
        console.log("POKEMON")
        console.log(pokemon)
        res.json(pokemon);
    })
});

/* SAVE POKEMON */
router.post('/', function(req, res, next) {
    console.log(req.body);
    Pokemon.create(req.body, function (err, post) {
        if (err) return next(err);
        console.log("POKEMON SAVED OK");
        res.json(post);
    });
});

/* UPDATE POKEMON */
router.put('/:id', function(req, res, next) {
  Pokemon.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE POKEMON */
router.delete('/:id', function(req, res, next) {
  Pokemon.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
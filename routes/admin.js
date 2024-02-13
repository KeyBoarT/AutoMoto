const express = require('express');
const router = express.Router();

const models = [
    {name: "Mercedes Vito", type: "Panelvan", image:"vito.png", price: 1250000, year: 2024, brandimg: 'chery-brand.png', brand: 'Mercedes Benz'},
    {name: "Renault Megane 4", type: "Sedan", image:"megane-4.png", price: 1100000, year: 2024, brandimg: 'chery-brand.png', brand: 'Renault'},
]

router.get('/add-product', (req, res, next) => {
    res.render('add-product', {title: 'Yeni araç Ekle'});
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    models.push({name: req.body.name, type: req.body.type, image: req.body.image, price: req.body.price, year: req.body.year, brandimg: req.body.brandimg, brand: req.body.brand});
    res.redirect('/');
});

exports.routes = router;
exports.models = models;
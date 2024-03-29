const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');
const cardController = require('./controllers/cardController');
const searchController = require('./controllers/searchController');


router.get('/', mainController.homePage);
router.get('/card/:id', cardController.cardDetails);
router.get('/search', searchController.searchPage);


module.exports = router;
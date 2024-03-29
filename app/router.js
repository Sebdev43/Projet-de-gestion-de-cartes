const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');
const cardController = require('./controllers/cardController');
const searchController = require('./controllers/searchController');
const desckController = require('./controllers/desckController');


router.get('/', mainController.homePage);
router.get('/card/:id', cardController.cardDetails);
router.get('/search', searchController.searchPage);
router.get('/search/element', searchController.searchByElement);
router.get('/add-to-deck/:cardId', desckController.addToDeck);
router.get('/deck', desckController.viewDeck);
router.get('/remove-from-deck/:cardId', desckController.removeFromDeck);


module.exports = router;
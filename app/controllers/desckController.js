const dataMapper = require('../dataMapper');
const datamapper = require('../dataMapper');


const desckController = {
    addToDeck: async (req, res) => {
        const cardId = req.params.cardId;

        if (!req.session.deck) {
            req.session.deck = [];
        }

        if (req.session.deck.length < 5 && !req.session.deck.includes(cardId)) {
            req.session.deck.push(cardId);
            console.log(req.session.deck);
        }

    res.redirect('back');
    },
    viewDeck: async (req, res) => {
        let deckCards = [];
        if (req.session.deck && req.session.deck.length > 0) {
            try {
                deckCards = await datamapper.getCardsByIds(req.session.deck);
                console.log(deckCards)
                res.render('deck', { deck: deckCards });
            } catch (error){
                console.error(error);
                res.status(500).send("Erreur lors de la récupération des cartes du deck.");
            }
        } else {
            console.log(deckCards)
            res.render('deck', { deck: deckCards });
        }
    },
    removeFromDeck: (req, res) => {
        const cardId = req.params.cardId;

        if (req.session.deck){
            const index = req.session.deck.indexOf(cardId);
            if (index > -1) {
                req.session.deck.splice(index, 1);
            }
        }
        res.redirect('/deck');
    },
};

module.exports = desckController;
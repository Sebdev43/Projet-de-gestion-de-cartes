const dataMapper = require('../dataMapper');

const cardController = {
    cardDetails: async (req, res) => {
        try {
            const cardId = req.params.id;
            const card = await dataMapper.getCard(cardId);
            if (!card) {
                return res.status(404).send('card not found');
            }
            res.render('cardDetails', { card });
        } catch (error) {
            console.error(error);
            res.status(500).send(`An error occurred: ${error.message}`);
    }
    }
};

module.exports = cardController;
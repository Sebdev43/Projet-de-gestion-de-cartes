const dataMapper = require('../dataMapper');

const searchController = {
  
  searchPage: (req, res) => {
    const searchType = null;
    const cards = [];
    res.render('search', { searchType, cards });
  },

  // Nouvelle méthode pour gérer la recherche par élément
  searchByElement: async (req, res) => {
    try {
      const { element } = req.query;
      // Convertit 'null' en une valeur utilisable pour la requête SQL
      const cards = await dataMapper.searchCardsByElement(element === 'null' ? 'aucun' : element);
      res.render('search', { cards, searchType: 'element' });
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occurred: ${error.message}`);
    }
  },
  searchByLevel: async (req, res) => {
    try {
      const {level} = req.query;
      const cards = await dataMapper.searchCardsByLevel(level);
      res.render('search', { cards, searchType: 'level' });
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occurred: ${error.message}`);
    }
  },
  searchByValue: async (req, res) => {
    try {
      const { direction, value } = req.query;
      const cards = await dataMapper.searchCardsByValue(direction, parseInt(value, 10));
      console.log(`Recherche par valeur, Direction: ${direction}, Valeur: ${value}`);

      res.render('search', { cards, searchType: 'values' });
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occurred: ${error.message}`);
    }
  },
  searchByName: async (req, res) => {
    try {
      const { name } = req.query;
      const cards = await dataMapper.searchCardsByName(name);
      res.render('search', { cards, searchType: 'name'});
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occurred: ${error.message}`);
    }
  },
};



module.exports = searchController;
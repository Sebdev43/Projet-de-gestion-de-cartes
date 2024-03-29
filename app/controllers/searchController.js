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
  }
};



module.exports = searchController;
const database = require('./database');

const dataMapper = {
  async getAllCards() {
    const query = "SELECT * FROM card";
    const result = await database.query(query);
    return result.rows;
  },
  //méthode qui prend un ID de carte en parmaètre et retourne les détails de cette carte
  async getCard(cardId) {
    const query = 'SELECT * FROM card WHERE id = $1';
    const values = [cardId];
    const result = await database.query(query, values);
    return result.rows[0];
  },
  //méthode pour rechercher des cartes par élément
  async searchCardsByElement(element) {
    const query = element === 'aucun'
    ? "SELECT * FROM card WHERE element IS NULL"
    : "SELECT * FROM card WHERE element = $1";
    const values = element === 'aucun' ? [] : [element];
    const result = await database.query(query, values);
    return result.rows;
    //Cette méthode permet de gérer le cas spécial ou l'utilisateur souhaite trouver des cartes sans élément (`element === 'aucun'`)
  },
};


module.exports = dataMapper;

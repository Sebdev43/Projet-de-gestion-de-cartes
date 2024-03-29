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

  async getCardsByIds(cardIds) {
    const query = 'SELECT * FROM card WHERE id = ANY($1)';
    const values = [cardIds];
    const result = await database.query(query, values);
    return result.rows;
  },

  async searchCardsByLevel(level) {
    const query = 'SELECT * FROM card WHERE level = $1';
    const values = [level];
    const result = await database.query(query, values);
    return result.rows;
  },
  async searchCardsByValue(direction, value) {
   
    let columnName;
    switch(direction) {
      case 'north':
        columnName = 'value_north';
        break;
      case 'east':
        columnName = 'value_east';
        break;
      case 'south':
        columnName = 'value_south';
        break;
      case 'west':
        columnName = 'value_west';
        break;
      default:
        throw new Error("Direction invalide");
    }
  
    const query = `SELECT * FROM card WHERE ${columnName} >= $1`;
    const values = [value];
    
    try {
      const result = await database.query(query, values);
      return result.rows;
    } catch (error) {
      console.error("Erreur lors de la recherche par valeur :", error);
      throw error; 
    }
  },
  async searchCardsByName(name) {
    const query = "SELECT * FROM card WHERE name ILIKE $1";
    const values = [`%${name}%`];
    const result = await database.query(query, values);
    return result.rows;
  },
  
};


module.exports = dataMapper;

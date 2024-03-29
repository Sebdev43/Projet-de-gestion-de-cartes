const database = require('./database');

const dataMapper = {
  async getAllCards() {
    const query = "SELECT * FROM card";
    const result = await database.query(query);
    return result.rows;
  },
  async getCard(cardId) {
    const query = 'SELECT * FROM card WHERE id = $1';
    const values = [cardId];
    const result = await database.query(query, values);
    return result.rows[0];
  }
};


module.exports = dataMapper;

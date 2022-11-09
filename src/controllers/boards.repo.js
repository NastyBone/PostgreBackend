const pool = require("../pool");
const toCamelCase = require("../utils/toCamelCase");

class BoardRepo {
  static async find() {
    const { rows } = await pool.query(`SELECT * FROM boards`);
    return toCamelCase(rows);
  }
  static async findById(boardId) {
    const { rows } = await pool.query(`SELECT * FROM boards WHERE id = $1`, [
      boardId,
    ]);
    return toCamelCase(rows)
  }
  //meterle bump al board
}

module.exports = BoardRepo;

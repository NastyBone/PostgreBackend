const pool = require("../pool");
const toCamelCase = require("../utils/toCamelCase");

class BoardRepo {
  static async find() {
    const { rows } = await pool.query(`SELECT * FROM boards ORDER BY bumped_at`);
    return toCamelCase(rows);
  }
  static async findById(boardId) {
    const { rows } = await pool.query(`SELECT * FROM boards WHERE id = $1`, [
      boardId,
    ]);
    return toCamelCase(rows)[0]
  }
  
  static async bumpBoard(boardId) {
    const { rows } = await pool.query(
      `UPDATE boards SET bumped_at = CURRENT_TIMESTAMP WHERE id = $1 RETURNING *;`,
      [boardId]
    );
    return toCamelCase(rows)[0]
  }
}

module.exports = BoardRepo;

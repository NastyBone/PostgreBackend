const pool = require("../pool");
const toCamelCase = require("../utils/toCamelCase");

class ThreadRepo {
  static async find(threadId) {
    const { rows } = await pool.query(
      `SELECT id, name, content, created_at, bumped_at, board_id FROM threads WHERE id = $1;`,
      [threadId]
    );
    return toCamelCase(rows);
  }
  static async insert(name, content, boardId, passwordDelete) {
    const { rows } = await pool.query(
      `
        INSERT INTO threads (name, content, board_id, password_delete) VALUES ($1, $2, $3, $4) RETURNING *;
        `,
      [name, content, boardId, passwordDelete]
    );
    return toCamelCase(rows);
  }
  static async report(threadId) {
    const { rows } = await pool.query(
      `UPDATE threads SET reported = TRUE WHERE id = $1 RETURNING *`,
      [threadId]
    );
    return toCamelCase(rows);
  }
  static async delete(threadId, passwordDelete) {
    const { rows } = await pool.query(
      `SELECT password_delete FROM threads WHERE id = $1`,
      [threadId]
    );
    const result = toCamelCase(rows)[0];
    if (!!result) {
      if (result.passwordDelete == passwordDelete) {
        const { rows } = await pool.query(
          `DELETE FROM threads WHERE id = $1 RETURNING *`,
          [threadId]
        );
        return toCamelCase(rows);
      } else {
        return { error: "Password doesn't match" };
      }
    } else {
        return {error: "Thread not found"}
    }
  }
}

module.exports = ThreadRepo;

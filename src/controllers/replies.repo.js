const pool = require("../pool");
const toCamelCase = require("../utils/toCamelCase");

class RepliesRepo {
  static async find(threadId) {
    const { rows } = pool.query(
      `SELECT id, content, created_at, thread_id FROM threads WHERE thread_id = $1`,
      [threadId]
    );
    return toCamelCase(rows);
  }

  static async insert(threadId, content, passwordDelete) {
    const { rows } = await pool.query(
      `INSERT INTO replies (thread_id, content, password_delete) VALUES ($1, $2, $3) RETURNING *`,
      [threadId, content, passwordDelete]
    );
    return toCamelCase(rows);
  }

  static async report(replyId) {
    const { rows } = await pool.query(
      `
    UPDATE replies
    SET reported = TRUE 
    WHERE id = $1
    `,
      [replyId]
    );
    return toCamelCase(rows);
  }

  static async delete(replyId, passwordDelete) {
    const { rows } = await pool.query(
      `SELECT password_delete FROM replies WHERE id = $1`,
      [replyId]
    );
    const result = toCamelCase(rows)[0];
    if (!!result) {
      if (result.passwordDelete == passwordDelete) {
        const { rows } = await pool.query(
          `DELETE FROM replies WHERE id = $1 RETURNING *`,
          [replyId]
        );
        return toCamelCase(rows);
      } else {
        return { error: "Password doesn't match" };
      }
    } else {
      return { error: "Thread not found" };
    }
  }
}

module.exports = RepliesRepo;

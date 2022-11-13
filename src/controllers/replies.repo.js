const pool = require("../pool");
const toCamelCase = require("../utils/toCamelCase");

class RepliesRepo {
  static async find(threadId) {
    const { rows } = await pool.query(
      `SELECT id, content, created_at, thread_id FROM replies WHERE thread_id = $1 ORDER BY created_at;`,
      [threadId]
    );

    if (!!rows) {
      return toCamelCase(rows);
    } else {
      return []
    }
  }

  static async findAllWithLimit() {
    const { rows } = await pool.query(`SELECT thread_id, id, content, created_at, reply_id
    FROM
          (SELECT thread_id, id, content, created_at, reply_id,
          ROW_NUMBER() OVER (PARTITION BY thread_id ORDER BY created_at) as replies_order

    FROM replies) AS replies_from_threads
    WHERE replies_order <= 2;`);

    return toCamelCase(rows)
  }

  static async insert(threadId, content, passwordDelete, replyId) {
    const { rows } = await pool.query(
      `INSERT INTO replies (thread_id, content, password_delete, reply_id) VALUES ($1, $2, $3, $4) RETURNING *`,
      [threadId, content, passwordDelete, replyId]
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

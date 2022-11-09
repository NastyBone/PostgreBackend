const pool = require("../pool");
const toCamelCase = require("../utils/toCamelCase");

class RepliesRepo {
  static async find() {
    return 'replies find'
  }

  static async insert(content, deletePassword) {
    return 'replies insert'
  }

  static async report(id) {
    return 'replies report'

  }

  static async delete(id, deletePassword) {
    return 'replies delete'
  }


}

module.exports = RepliesRepo

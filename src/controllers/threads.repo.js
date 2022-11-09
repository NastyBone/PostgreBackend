const pool = require("../pool");
const toCamelCase = require("../utils/toCamelCase");

class ThreadRepo {
    static async find(threadId){
        return 'thread find'
    }
    static async insert(boardId){
        return 'thread insert'
    }
    static async report(threadId){
        return 'thread report'
    }
    static async delete(threadId, deletePassword){
        return 'thread delete'
    }
}

module.exports = ThreadRepo 
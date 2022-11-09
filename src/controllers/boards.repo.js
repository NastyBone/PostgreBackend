const pool = require('../pool');
const toCamelCase = require('../utils/toCamelCase')

class BoardRepo {
    static async find(){
        return 'board find'
    }
    static async findById(id){
        return 'board find id' 
    }
        
}

module.exports = BoardRepo
const pg = require('pg')
class Pool {
  _pool = null;
  connect(options) {
    this._pool = new pg.Pool(options);
    return this._pool.query(`SELECT 1+1`)
  }
  close() {
    this._pool.close();
  }

  query(sql, params){
    return this._pool.query(sql,params)
  }

}
module.exports = new Pool()
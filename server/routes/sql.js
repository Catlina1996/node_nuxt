let mysql = require('mysql');

function OptPool() {
  this.flags = true;
  this.pool = mysql.createPool({
      host     : 'localhost',
      user     : 'user',
      password : '120315864',
      database : 'user',
      port: '3306'
  });
  this.getPool = function () {
      if(this.flags) {
        this.pool.on('connection', function () {
            this.flags = false;
        })
      }
      return this.pool;
  }
}

module.exports = OptPool;
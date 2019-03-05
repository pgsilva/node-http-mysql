function PagamentoDao(connection) {
  this._connection = connection;
}

PagamentoDao.prototype.salva = function(pagamento, callback) {
  this._connection.query("INSERT INTO pagamento SET ?", pagamento, callback);
};

PagamentoDao.prototype.lista = function(callback) {
  this._connection.query("select * from pagamento", callback);
};

PagamentoDao.prototype.buscaPorId = function(id, callback) {
  this._connection.query(
    "select * from pagamento where id = ?",
    [id],
    callback
  );
};

PagamentoDao.prototype.atualiza = function(pagamento, callback) {
  this._connection.query(
    "update pagamento set status = ? where id = ?",
    [pagamento.status, pagamento.id],
    callback
  );
};

module.exports = function() {
  return PagamentoDao;
};

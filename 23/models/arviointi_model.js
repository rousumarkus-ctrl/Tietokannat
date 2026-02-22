const db = require('../database').default;

const arviointi = {
  getAll: (callback) => db.query('select * from arviointi', callback),
  getOne: (id, callback) =>
    db.query('select * from arviointi where idArviointi=?', [id], callback),
  add: (arviointi, callback) =>
    db.query(
      'insert into arviointi (Paivamaara,Arvosana,idOpiskelija,idOpintojakso) values(?,?,?,?)',
      [
        arviointi.paivamaara,
        arviointi.arvosana,
        arviointi.idOpiskelija,
        arviointi.idOpintojakso,
      ],
      callback,
    ),
  delete: (id, callback) =>
    db.query('delete from arviointi where idArviointi=?', [id], callback),
  update: (id, arviointi, callback) =>
    db.query(
      'update arviointi set Paivamaara=?,Arvosana=?, idOpiskelija=?, idOpintojakso=? where idArviointi=?',
      [
        arviointi.paivamaara,
        arviointi.arvosana,
        arviointi.idOpiskelija,
        arviointi.idOpintojakso,
        id,
      ],
      callback,
    ),
};
module.exports = arviointi;

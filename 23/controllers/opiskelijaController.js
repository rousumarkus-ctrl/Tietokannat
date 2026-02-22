const opiskelija = require('../models/opiskelija_model');

exports.getAllOpiskelijas = (request, response) => {
  opiskelija.getAll((err, dbResult) => {
    if (err) {
      response.json(err);
    } else {
      console.log(dbResult);
      response.json(dbResult);
    }
  });
};

exports.getOneOpiskelija = (request, response) => {
  opiskelija.getOne(request.params.id, (err, dbResult) => {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
};

exports.addOpiskelija = (request, response) => {
  opiskelija.add(request.body, (err, dbResult) => {
    console.log(err);
    console.log(dbResult);
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
};

exports.deleteOpiskelija = (request, response) => {
  opiskelija.delete(request.params.id, (err, dbResult) => {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
};

exports.updateOpiskelija = (request, response) => {
  opiskelija.update(request.params.id, request.body, (err, dbResult) => {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
};

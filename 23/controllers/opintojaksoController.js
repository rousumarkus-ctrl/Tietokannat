const opintojakso = require('../models/opintojakso_model');

exports.getAllOpintojaksos = (request, response) => {
  opintojakso.getAll((err, dbResult) => {
    if (err) {
      response.json(err);
    } else {
      console.log(dbResult);
      response.json(dbResult);
    }
  });
};

exports.getOneOpintojakso = (request, response) => {
  opintojakso.getOne(request.params.id, (err, dbResult) => {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
};

exports.addOpintojakso = (request, response) => {
  opintojakso.add(request.body, (err, dbResult) => {
    console.log(err);
    console.log(dbResult);
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
};

exports.deleteOpintojakso = (request, response) => {
  opintojakso.delete(request.params.id, (err, dbResult) => {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
};

exports.updateOpintojakso = (request, response) => {
  opintojakso.update(request.params.id, request.body, (err, dbResult) => {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
};

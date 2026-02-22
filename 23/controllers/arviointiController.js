const arviointi = require('../models/arviointi_model');

exports.getAllArviointis = (request, response) => {
  arviointi.getAll((err, dbResult) => {
    if (err) {
      response.json(err);
    } else {
      console.log(dbResult);
      response.json(dbResult);
    }
  });
};

exports.getOneArviointi = (request, response) => {
  arviointi.getOne(request.params.id, (err, dbResult) => {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
};

exports.addArviointi = (request, response) => {
  arviointi.add(request.body, (err, dbResult) => {
    console.log(err);
    console.log(dbResult);
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
};

exports.deleteArviointi = (request, response) => {
  arviointi.delete(request.params.id, (err, dbResult) => {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
};

exports.updateArviointi = (request, response) => {
  arviointi.update(request.params.id, request.body, (err, dbResult) => {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
};

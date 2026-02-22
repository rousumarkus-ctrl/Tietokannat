const borrower = require('../models/borrower_model');

exports.getAllBorrowers = (request, response) => {
  borrower.getAll((err, dbResult) => {
    if (err) {
      response.json(err);
    } else {
      console.log(dbResult);
      response.json(dbResult);
    }
  });
};

exports.getOneBorrower = (request, response) => {
  borrower.getOne(request.params.id, (err, dbResult) => {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
};

exports.addBorrower = (request, response) => {
  borrower.add(request.body, (err, dbResult) => {
    console.log(err);
    console.log(dbResult);
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
};

exports.deleteBorrower = (request, response) => {
  borrower.delete(request.params.id, (err, dbResult) => {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
};

exports.updateBorrower = (request, response) => {
  borrower.update(request.params.id, request.body, (err, dbResult) => {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
};

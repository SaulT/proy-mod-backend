const ModelSales = require('../models/Sales');

const createSale = (req, res) => {
  ModelSales.create(req.body)
    .then((row) => {
      res.status(201).send(row)
    })
    .catch((err) => {
      res.status(400).send(err.message)
    })
}

const findAllSales = (req, res) => {
  ModelSales.findAll()
    .then((row) => {
      res.status(200).send(row)
    })
    .catch((err) => {
      res.status(400).send(err.message)
    })
}

const findOneSale = (req, res) => {
  ModelSales.findOne(req.params.idSale)
    .then((row) => {
      res.status(200).send(row)
    })
    .catch((err) => {
      res.status(400).send(err.message)
    })
}

const updateOneSale = (req, res) => {
  ModelSales.update(req.params.idSale, req.body)
    .then((row) => {
      res.status(200).send(row)
    })
    .catch((err) => {
      res.status(400).send(err.message)
    })
}

const destroyOneSale = (req, res) => {
  ModelSales.destroy(req.params.idSale)
    .then(() => {
      res.status(204).send()
    })
    .catch((err) => {
      res.status(400).send(err.message)
    })
}

const softDeleteOneSale = (req, res) => {
  ModelSales.softDelete(req.params.idSale)
    .then(() => {
      res.status(204).send()
    })
    .catch((err) => {
      res.status(400).send(err.message)
    })
}

module.exports = {
  createSale,
  findAllSales,
  findOneSale,
  updateOneSale,
  destroyOneSale,
  softDeleteOneSale
}
const knex = require('../config');

const create = (bodySale) => {
  return knex
    .insert(bodySale)
    .into('venta')
    .returning(['venta_id', 'cliente_id', 'tienda_id', 'fecha'])
}

const findAll = () => {
  return knex
    .select(['venta_id', 'cliente_id', 'tienda_id', 'fecha'])
    .from('venta')
}

const findOne = (saleId) => {
  return knex
    .select(['venta_id', 'cliente_id', 'tienda_id', 'fecha'])
    .from('venta')
    .where({ venta_id: saleId });
}

const update = (saleId, bodyToUpdate) => {
  return knex
    .update(bodyToUpdate)
    .from('venta')
    .where({ venta_id: saleId })
    .returning(['venta_id', 'cliente_id', 'tienda_id', 'fecha'])
}

const destroy = (saleId) => {
  return knex
    .del()
    .from('venta')
    .where({ venta_id: saleId })
}

const softDelete = (saleId) => {
  return knex
    .update({ active: false })
    .from('venta')
    .where({ venta_id: saleId })
}

module.exports = {
  create,
  findAll,
  findOne,
  update,
  destroy,
  softDelete
}
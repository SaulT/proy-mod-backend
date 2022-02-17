const knex = require('../config');

const create = (bodyProduct) => {
  return knex
    .insert(bodyProduct)
    .into('producto')
    .returning(['producto_id', 'nombre', 'descripcion', 'precio', 'sku'])
}

const findAll = () => {
  return knex
    .select(['producto_id', 'nombre', 'descripcion', 'precio', 'sku'])
    .from('producto')
}

const findOne = (productId) => {
  return knex
    .select(['producto_id', 'nombre', 'descripcion', 'precio', 'sku'])
    .from('producto')
    .where({ producto_id: productId });
}

const update = (productId, bodyToUpdate) => {
  return knex
    .update(bodyToUpdate)
    .from('producto')
    .where({ producto_id: productId })
    .returning(['producto_id', 'nombre', 'descripcion', 'precio', 'sku'])
}

const destroy = (productId) => {
  return knex
    .del()
    .from('producto')
    .where({ producto_id: productId })
}

const softDelete = (productId) => {
  return knex
    .update({ active: false })
    .from('producto')
    .where({ producto_id: productId })
}

module.exports = {
  create,
  findAll,
  findOne,
  update,
  destroy,
  softDelete
}
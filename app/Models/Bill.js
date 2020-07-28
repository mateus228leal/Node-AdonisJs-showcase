'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Bill extends Model {

  user() {
    return this.belongsToMany('App/Models/User').pivotTable('bills_users');
  }

  solicitations() {
    return this.belongsToMany('App/Models/Solicitation').pivotTable('bills_solicitation');
  }
}

module.exports = Bill

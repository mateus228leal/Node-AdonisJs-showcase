'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SolicitationsSchema extends Schema {
  up () {
    this.create('solicitations', (table) => {
      table.increments();

      table.integer('from_user_id').references('id')
        .inTable('users');
      table.integer('to_user_id').references('id')
        .inTable('users');
      table.integer('bill_id').references('id')
        .inTable('bills');
      
      table.timestamps();
    })
  }

  down () {
    this.drop('solicitations')
  }
}

module.exports = SolicitationsSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BillsSolicitationsSchema extends Schema {
  up () {
    this.create('bills_solicitations', (table) => {
      table.increments();

      table.integer('bill_id').references('id')
        .inTable('bills');
      table.integer('solicitation_id').references('id')
        .inTable('solicitations');
      

      table.timestamps();
    })
  }

  down () {
    this.drop('bills_solicitations')
  }
}

module.exports = BillsSolicitationsSchema

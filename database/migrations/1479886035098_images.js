'use strict'

const Schema = use('Schema')

class ImagesSchema extends Schema {

  up () {
    this.create('images', (table) => {
      table.increments()
      table.string('image').notNullable()
      table.string('path').notNullable()
       table.integer('property_id').unsigned().references('id').inTable('properties')
      table.timestamps()
    })
  }

  down () {
    this.drop('images')
  }

}

module.exports = ImagesSchema

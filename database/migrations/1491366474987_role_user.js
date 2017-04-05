'use strict'

const Schema = use('Schema')

class RoleUserTableSchema extends Schema {

  up () {
    this.create('role_user', (table) => {
      table.increments()
      table.integer('role_id').unsigned()
      table.integer('user_id').unsigned()
    })
  }

  down () {
    this.drop('role_user')
  }

}

module.exports = RoleUserTableSchema

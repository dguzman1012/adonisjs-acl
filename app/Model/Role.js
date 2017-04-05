'use strict'

const Lucid = use('Lucid')

class Role extends Lucid {

  static get createTimestamp () {
    return null
  }

  static get updateTimestamp () {
    return null
  }

  /*
  |--------------------------------------------------------------------------
  | Relationship Methods
  |--------------------------------------------------------------------------
  */
  /**
  * Many-To-Many Relationship Method for accessing the Role.users
  *
  * @return Object
  */
  users () {
    return this.belongsToMany('App/Model/User')
  }

  /**
  * Many-To-Many Relationship Method for Role.permissions
  *
  * @return Object
  */
  permissions () {
    return this.belongsToMany('App/Model/Permission')
  }

}

module.exports = Role

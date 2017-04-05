'use strict'

const Lucid = use('Lucid')

class Permission extends Lucid {

  static get createTimestamp () {
    return null
  }

  static get updateTimestamp () {
    return null
  }
  
  /**
  * Many-To-Many Relationship Method for Permission.roles
  *
  * @return Object
  */
  roles () {
    return this.belongsToMany('App/Model/Role')
  }

}

module.exports = Permission

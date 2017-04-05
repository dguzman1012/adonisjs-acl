'use strict'

const Lucid = use('Lucid')
const Hash = use('Hash')
var moment = use('moment')

class User extends Lucid {

  static boot () {
    super.boot()

    /**
     * Hashing password before storing to the
     * database.
     */
    this.addHook('beforeCreate', function * (next) {
      this.password = yield Hash.make(this.password)
      yield next
    })
  }

  static get hidden () {
    return ['password','password_temp','remember_token']
  }

  static get rules () { 
    return {
      username: 'required|unique:users',
      email: 'required|email|unique:users'
    }
  }

  static get dateFormat () {
    return 'YYYY-MM-DD HH:mm:ss'
  }

  getCreatedAt(){
    return moment(this.created_at).format('d F Y')
  }

  apiTokens () {
    return this.hasMany('App/Model/Token')
  }

  /*
  |--------------------------------------------------------------------------
  | ACL Methods
  |--------------------------------------------------------------------------
  */

  /**
   * Checks a Permission
   *
   * @param  String permission Slug of a permission (i.e: manage_user)
   * @return Boolean true if has permission, otherwise false
   */
  can(permission){
    return (permission != null) && this.checkPermission(permission)
  }

  /**
   * Check if the permission matches with any permission user has
   *
   * @param  String permission slug of a permission
   * @return Boolean true if permission exists, otherwise false
   */
  checkPermission(perm){
    return false;
  }

  /*
  |--------------------------------------------------------------------------
  | Relationship Methods
  |--------------------------------------------------------------------------
  */
  /**
  * Many-To-Many Relationship Method for accessing the User.roles
  *
  * @return Object
  */
  roles () {
    return this.belongsToMany('App/Model/Role')
  }


}

module.exports = User

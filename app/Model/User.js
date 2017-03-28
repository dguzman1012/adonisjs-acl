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

  getCreatedAt(){
    return moment(this.created_at).format('d F Y')
  }

  apiTokens () {
    return this.hasMany('App/Model/Token')
  }

}

module.exports = User

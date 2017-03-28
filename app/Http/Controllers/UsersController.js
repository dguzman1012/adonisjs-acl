'use strict'
const User = use('App/Model/User')
const Validator = use('Validator')
const Hash = use('Hash')

class UsersController {

  * index(request, response) {    
    const users = yield User.query()    
    yield response.sendView('users.index', {
      users:users
    })
    
  }

  * create(request, response) {
    //
    yield response.sendView('users.create', {})
  }

  * store(request, response) {
    const user = new User;
    user.username = request.input("username");
    user.email = request.input("email");
    user.password = yield Hash.make(request.input('password'));
    
    var userData = request.all();
    const validation = yield Validator.validate(userData, User.rules)
    if (validation.fails()) {
      yield request.withOut('password').andWith({ error_message: validation.messages()[0] }).flash()
      response.redirect('back')      
    }else{
      yield user.save();
      var message = {
        title: 'Success',
        text: 'User created successfully',
        type: 'success'
      }
      yield request.with({message: message}).flash()
      response.redirect('/users')
    }


  }

  * show(request, response) {
    //
  }

  * edit(request, response) {
    const id = request.param("id")
    const user = yield User.find(id);
    if (user){
      yield response.sendView('users.edit', {
        user:user,
      })      
    }else{
      var message = {
        title: 'Atention!',
        text: 'Unable to find user to edit',
        type: 'warning'
      }
      yield request.with({message: message}).flash()
      response.redirect('/users')
    }    
  }

  * update(request, response) {
    const id = request.param('id')
    const user = yield User.find(id);
    if (user){      
      user.username = request.input("username");
      user.email = request.input("email");
      if (request.input("password")){
        user.password = yield Hash.make(request.input('password'));
      }
      var rules = {        
        username: `required|unique:users,username,id,${user.id}`,
        email: `required|unique:users,email,id,${user.id}`,
      }
      var userData = request.all();
      const validation = yield Validator.validate(userData, rules)
      if (validation.fails()) {
        yield request.withOut('password').andWith({ error_message: validation.messages()[0] }).flash()
        response.redirect('back')      
      }else{
        yield user.save();
        var message = {
          title: 'Success',
          text: 'User updated successfully',
          type: 'success'
        }
        yield request.with({message: message}).flash()
        response.redirect('/users')
      }
    }else{
      var message = {
        title: 'Atention!',
        text: 'Unable to find user to update',
        type: 'warning'
      }
      yield request.with({message: message}).flash()
      response.redirect('/users')
    }
  }

  * destroy(request, response) {
    const id = request.param('id')
    const user = yield User.find(id);
    if (user){      
      try {
        yield user.delete()
        response.json({success:true, message: 'User has been deleted'});
      } catch (e) {
        response.json({success:false, message: 'Error, deleting the user', error: e});
      }
    }else{      
      response.json({success:false, message: 'Unable to find user to delete'});
    }

    response.send(request.params());
  }

}

module.exports = UsersController

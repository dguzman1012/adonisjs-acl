'use strict'

class CheckPermission {

  * handle (request, response, next, permission) {
    // here goes your middleware logic
    // yield next to pass the request to next middleware or controller
    const isLoggedIn = yield request.auth.check()
	if (isLoggedIn) {
		const user = yield request.auth.getUser()
		if (yield user.can(permission)) {
        	yield next
		}
	}

	if (request.ajax()){
		response.forbidden('You do not have permission to see that section');
	}else{
		var message = {
			title: 'Error',
			text: 'You do not have permission to see that section',
			type: 'error'
		}
		yield request.with({message: message}).flash()
		response.redirect('/')
	}
  }

}

module.exports = CheckPermission

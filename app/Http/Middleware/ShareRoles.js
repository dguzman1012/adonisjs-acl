'use strict'

class ShareRoles {

  * handle (request, response, next) {
    // here goes your middleware logic
    // yield next to pass the request to next middleware or controller
    const isLoggedIn = yield request.auth.check()
	if (isLoggedIn) {
		const user = yield request.auth.getUser()		
		var user_roles = JSON.parse(JSON.stringify(yield user.roles().fetch()))		
		var my_roles = []
		for (var i in user_roles){
			my_roles.push(user_roles[i].role_slug);
		}
		yield request.with({ my_roles: my_roles }).flash()		
	}
    yield next
  }

}

module.exports = ShareRoles

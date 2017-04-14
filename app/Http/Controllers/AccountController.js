'use strict'

class AccountController {

	* getLogin (request, response) {
		const isLoggedIn = yield request.auth.check()
		if (isLoggedIn) {
		  response.redirect('/')
		}
		yield response.sendView('login')
	}

	* postLogin (request, response) {
		const email = request.input('email')
	    const password = request.input('password')
	 	try {
			const login = yield request.auth.attempt(email, password)
		    if (login) {
		    	const user = yield request.auth.getUser()		
				var user_roles = JSON.parse(JSON.stringify(yield user.roles().fetch()))		
				var my_roles = []
				for (var i in user_roles){
					my_roles.push(user_roles[i].role_slug);
				}
				yield request.with({ my_roles: my_roles }).flash()
		    	response.redirect('/')
		    }else{
		    	response.redirect('back')
		    }
		} catch (e) {
			yield request.with({error: e.message}).flash()
			response.redirect('back')
		}

	}

	* getLogout (request, response){
		const isLoggedIn = yield request.auth.check()
		if (!isLoggedIn) {
		  response.redirect('/login')
		}else{
			yield request.auth.logout()
			response.redirect('/')
		}
	}

}

module.exports = AccountController

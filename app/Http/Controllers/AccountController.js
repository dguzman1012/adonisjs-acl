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

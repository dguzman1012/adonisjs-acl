'use strict'

class HomeController {
	* getIndex (request, response) {		
		yield response.sendView('dashboard')
	}
}

module.exports = HomeController

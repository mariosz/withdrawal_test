var withdrawal= {
	/*
	timeout: 2000,
	clickSubmit: function() {
		return this.click("@submitWithdraw");
	},
	*/
	validateForm: function() {
		return this.waitForElementVisible('body', 2000)
			.verify.visible('@username')
			.verify.visible('@password')
			//.verify.value('@submit', '')
			//.verify.elementNotPresent('@error')
	},
	fillInForm: function(username, password) {
		return this//.waitForElementVisible('body', 1000)
			.setValue('@username', username)
			.setValue('@password', password)
	},
	submit: function() {
		return this.click('@submit')
		//return this.verify.value('@submit', '')
		//	.click('@submit')
	},
	validateFormWithdraw: function() {
		return this.waitForElementVisible('body', 2000)
			.verify.visible('@amount')
			.verify.visible('@address')
			//.verify.value('@submitWithdraw', '')
			//.verify.elementNotPresent('@error')
	},
	fillInFormWithdraw: function(amount, address) {
		return this.waitForElementVisible('body', 2000)
			.setValue('@amount', amount)
			.setValue('@address', address)
	},
	submitWithdraw: function() {
		return this.click('@submitWithdraw')
		browser
        .pause(2000)
		//return this.verify.value('@submitWithdraw', '')
		//	.click('@submitWithdraw')
	},
	validateMessagePresent: function(element, message) {
		return this.waitForElementPresent(element, 2000/*this.timeout*/, false)
		.verify.containsText(element, message);
	},
	validateMessageNotPresent: function(element, message) {
		return this.waitForElementNotPresent(element, 2000/*this.timeout*/, false)
		//.verify.containsText(element, message);
	},
	clearInput: function(elementName) {
		return this.clearValue(`@${elementName}`);
	},
	updateAddress: function(address) {
		return this.setValue("@address", address)
		//.click("@submitWithdraw");
	},
};


module.exports = {
	commands: [withdrawal],
	url: function() { 
		return this.api.launchUrl; 
	},
	elements: {
		username: {
			selector: "//input[@name=\"player[login]\"]",
			locateStrategy: "xpath"
			//selector: 'input[name="player[login]"]'
		},
		password: {
			selector: "//input[@name=\"player[password]\"]",
			locateStrategy: "xpath"
			//selector: 'input[name="player[password]"]'
		},
		amount: {
			selector: "//input[@name=\"amount\"]",
			locateStrategy: "xpath"
			//selector: 'input[name=amount]'
		},
		address: {
			selector: "//input[@name=\"crypto_address\"]",
			locateStrategy: "xpath"
			//selector: 'input[name=crypto_address]'
		},
		submit: {
			selector: "//button//span[text()=\"Submit\"]",
			locateStrategy: "xpath"
		},
		submitWithdraw: {
			selector: "//button//span[text()=\"Withdraw\"]",
			locateStrategy: "xpath"
		},
		error: {
			selector: "(//span[@class=\"error-message\"])[1]",
			locateStrategy: "xpath"
		},
		errorAddress: {
			selector: "(//span[@class=\"error-message\"])[2]",
			locateStrategy: "xpath"
		},
	}
};
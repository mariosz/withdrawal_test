var withdrawal= {
	validateForm: function() {
		return this.waitForElementVisible('body', 2000)
			.verify.visible('@username')
			.verify.visible('@password')
	},
	validateFormWithdraw: function() {
		return this.waitForElementVisible('body', 2000)
			.verify.visible('@amount')
			.verify.visible('@address')
	},
	fillInForm: function(username, password) {
		return this.setValue('@username', username)
			.setValue('@password', password)
	},
	fillInFormWithdraw: function(amount, address) {
		return this.waitForElementVisible('body', 2000)
			.setValue('@amount', amount)
			.setValue('@address', address)
	},
	submit: function() {
		return this.click('@submit')
	},
	validateMessagePresent: function(element, message) {
		return this.verify.elementPresent(element)
		.verify.containsText(element, message);
	},
	validateMessageNotPresent: function(element, message) {
		return this.verify.elementNotPresent(element)
	},
	validateButtonDisabled: function(element) {
		return this.expect.element(element).to.have.attribute('disabled');
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
		},
		password: {
			selector: "//input[@name=\"player[password]\"]",
			locateStrategy: "xpath"
		},
		amount: {
			selector: "//input[@name=\"amount\"]",
			locateStrategy: "xpath"
		},
		address: {
			selector: "//input[@name=\"crypto_address\"]",
			locateStrategy: "xpath"
		},
		submit: {
			selector: "//button//span[text()=\"Submit\"]",
			locateStrategy: "xpath"
		},
		submitWithdraw: {
			selector: ".bottom.no-bonus.zero-balance-wrap > button"
		},
		errorAddress1: {
			selector: "(//span[@class=\"error-message\"])[2]",
			locateStrategy: "xpath"
		},
		errorAddress2: {
			selector: ".label.formsy-input.required.invalid.has-field-label > span.error-message"
		},
	}
};
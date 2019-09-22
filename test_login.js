const assert = require('assert');
 
describe('Tutorials Ninja Login Form', () => {
	it('should not allow login with invalid username', () => {
		browser.url('http://tutorialsninja.com/demo');
		browser.pause('2000');
		$('/html[1]/body[1]/nav[1]/div[1]/div[2]/ul[1]/li[2]/a[1]').click();
		browser.pause('2000');
		$('=Login').click();
                browser.pause('2000');
		$('#input-email').addValue('asdaad');
		$('#input-password').addValue('asd@123$');
		$('[type="submit"]').click(); 
		browser.pause('2000');
		const error = $('/HTML[1]/BODY[1]/DIV[2]/DIV[1]').getText();
		console.log(error);
		assert.equal(error, 'Warning: No match for E-Mail Address and/or Password.');
		browser.pause('2000');
	});
});
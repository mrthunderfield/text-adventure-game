var $ = require('jquery');
var helpers = require('../../helpers');

var ButtonInput = function(key, callback) {

	this.key = key || 32; // space
	this.callback = callback || function() {};

	this.onAction = helpers.scope(this.onAction, this);
};

ButtonInput.prototype = {

	constructor: ButtonInput,

	listen: function() {
		var self = this;

		$(window).on("keydown", function(e) {
			if(e.keyCode === self.key) {
				self.onAction(e);
			}
		});
	},

	onAction: function(e) {
		e.preventDefault();
		callback();
	}
};

module.exports = ButtonInput;
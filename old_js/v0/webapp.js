var engine = require("./engine");
var $ = require("jquery");
var uitext = require("./uitext");

var webapp = function() {

	engine.apply(this);
	this.prototype = Object.create(engine);

	var self = this;
	var lastCommand = "";

	var $display;

	this.start = function() {
		$display = $("#screen");
		doInit();
		startListeners();
	};

	this.display = function(text) {
		$display.append("<p>"+text+"</p>");
	};

	var doInit = function() {
		self.display(self.getInitContent());
	};

	var startListeners = function() {
		$("#input").on("keyup", parseCommand)
	};

	var parseCommand = function(e) {
		lastCommand = $(this).val();
		var content = self.doCommand(lastCommand);
		if(content !== false) doOutput(content); 
	};

	var doOutput = function(content) {
		self.display("> " + lastCommand);
		self.display(content);
		$("#input").val("");
	};
};

module.exports = new webapp();
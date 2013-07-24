#!/bin/env node

var cgi = require('cgi');

var mycgi = new cgi("/home/njs/hello.cgi");

var visit_count = 0;

var myhandler = function(req,res,next){
	mycgi(req,res,next);
	console.log(++visit_count);
};

require('http').createServer(myhandler).listen(3000);

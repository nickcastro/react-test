//model/comments.js
'use strict';
//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create new instance of the mongoose.schema. the schema takes an object that shows
//the shape of your database entries.
var ActiveSchema = new Schema({
	uid: String,
	FieldName: String,
	crop: String,
	location: String,
	soil: String,
	plantDate: String
},	
{ collection : 'active' });

//export our module to use in server.js
module.exports = mongoose.model('Active', ActiveSchema);
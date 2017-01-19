const mongoose = require('mongoose');
const createModel = mongoose.model.bind(mongoose);
const Schema = mongoose.Schema;

// ----------------------
// USERS
// ----------------------
const taskSchema = new Schema({
	user: {type: String, required: true},
	name: {type: String, required: true},
	notes: String,
	day: Date,
	saturday: Date,
	done: {type: Boolean, default: false},
	isSomeday: {type: Boolean, default: false},
	createdAt: {type: Date, default: Date.now}
})

module.exports = {
   Task: createModel(' Task', taskSchema),
}

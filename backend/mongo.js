require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.MONGODB_URI;
mongoose.set('strictQuery', false);

mongoose
	.connect(url)
	.then(() => {
		console.log('connection has started');
	})
	.catch((err) => console.log(err));

const employeeSchema = new mongoose.Schema({
	name: String,
	email: String,
	designation: String,
	department: String,
	accountStatus: String,
	platformStatus: String,
});
employeeSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject.__v;
	},
});

const departmentSchema = new mongoose.Schema({
	departmentName: String,
});
departmentSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject.__v;
	},
});

const Department = mongoose.model('Department', departmentSchema);
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = {
	Department,
	Employee,
};

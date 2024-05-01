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

// const Reserve = mongoose.model('Seat', seatSchema);

employeeSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject.__v;
	},
});

module.exports = mongoose.model('Employee', employeeSchema);

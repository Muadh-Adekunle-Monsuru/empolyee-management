const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const Employee = require('./mongo');

app.get('/', (req, res) => {
	Employee.find({}).then((workers) => {
		console.log(workers);
		res.json(workers);
	});
});

app.post('/add', (request, response) => {
	let newEmployee = request.body;
	console.log(newEmployee);
	const newEmp = new Employee(newEmployee);
	newEmp.save().then((res) => console.log('Employee save succefully', res));
	response.json('saved successfully');
});

app.post('/delete', (request, response) => {
	let newEmployee = request.body;
	console.log(newEmployee);
	Employee.deleteOne(newEmployee).then((res) =>
		console.log('Employee deleted succefully', res)
	);
	response.json('deleted successfully');
});

app.post('/update', (request, response) => {
	let newEmployee = request.body;
	console.log(newEmployee);
	Employee.findOneAndUpdate({ _id: newEmployee._id }, newEmployee, {
		new: true,
	}).then((res) => response.json(res));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});

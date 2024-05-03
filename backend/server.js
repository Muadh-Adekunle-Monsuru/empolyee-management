const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { Department, Employee } = require('./mongo');

app.get('/', (req, res) => {
	Employee.find({}).then((workers) => {
		// console.log(workers);
		res.json(workers);
	});
});

app.post('/add', (request, response) => {
	let newEmployee = request.body;
	console.log(newEmployee);
	const newEmp = new Employee(newEmployee);
	newEmp.save().then((res) => response.json(res));
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

app.get('/departments', (req, res) => {
	Department.find({}).then((workers) => {
		res.json(workers);
	});
});

app.post('/addept', (req, res) => {
	console.log(req.body);
	const newDept = new Department(req.body);
	newDept.save().then((response) => res.json(response));
});
app.post('/deletedept', (request, response) => {
	console.log(request.body);
	Department.deleteOne(request.body).then((res) => response.json(res));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});

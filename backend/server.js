const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
	origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));

app.use(express.json());

const db = require('./models');
const Role = db.role;

db.mongoose
	.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
		userNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('Successfully connected to MongoDB 😎');
		initial();
	})
	.catch((err) => {
		console.error('Connection error', err);
		process.exit();
	});
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send('<h1>You have successfully connected</h1>');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});

function initial() {
	Role.estimatedDocumentCount((err, count) => {
		if (!err && count === 0) {
			new Role({
				name: 'user',
			}).save((err) => {
				if (err) {
					console.log('error', err);
				}

				console.log("added 'user' to roles collection");
			});

			new Role({
				name: 'moderator',
			}).save((err) => {
				if (err) {
					console.log('error', err);
				}

				console.log("added 'moderator' to roles collection");
			});

			new Role({
				name: 'admin',
			}).save((err) => {
				if (err) {
					console.log('error', err);
				}

				console.log("added 'admin' to roles collection");
			});
		}
	});
}

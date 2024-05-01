const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const sdk = require('node-appwrite');

const appwriteURL = 'https://cloud.appwrite.io/v1';

const client = new sdk.Client()
	.setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
	.setProject('5df5acd0d48c2'); // Your project ID
app.get('/', (req, res) => {
	res.send('<h1>You have successfully connected</h1>');
});


app.get('/login', (req, res) => {

const account = new sdk.Account(client);

const result = await account.createEmailPasswordSession(
    'email@example.com', // email
    'password' // password
);

})
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});

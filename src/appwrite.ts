import { Client, Account } from 'appwrite';

export const client = new Client();

client
	.setEndpoint('https://cloud.appwrite.io/v1')
	.setProject('662fef4900235db0b9e1'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';

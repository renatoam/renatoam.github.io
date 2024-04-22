import { Client, Account, Databases } from 'appwrite';

const appwrite = new Client()
appwrite
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('662588ed697200a09b70');

export const account = new Account(appwrite)
export const databases = new Databases(appwrite)
export { ID } from 'appwrite'

# Chairoon Server

## Install

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

- Clone or download `this project folder` and then unzip the files.

## For Frontend
Go to "client" folder then read README.md for more information.

## For Backend
Follow the command to run the client site:
- Install all necessary code packages.  
```sh
$ npm install
```
- Runs the app in the development mode. 

```sh
$ npm start
```
- add a .env file and include the following environment variables.

```sh
PORT="your backend port number || 3001"
CLIENT_URL="your frontend port url || http://localhost:3000"
DATABASE_PASSWORD="your database password"
DATABASE="your database url"
JWT_SECRET="your jwt secret"
ZEGO_APP_ID="your zego id"
ZEGO_SERVER_SECRET="your zego secret"
SG_API_KEY="your sendGrid API key"
CLOUDINARY_CLOUD_NAME="your cloudinary name"
CLOUDINARY_API_KEY="your cloudinary api key"
CLOUDINARY_SECRET_KEY="your cloudinary secret key"
```


## Learn More

To learn Express, check out the [Express documentation](https://expressjs.com/).


## Contributors

This project presented by © Muhammad Nafis.
# MixedDrinksApp


It is a web application that allows users to browse and search for mixed drink recipes. User can also save their favorite recipes for future reference.

***

## Installation

Clone the mixedDrinksApp repository to your local machine using the following command:

```
git clone https://github.com/PawelObrzut/mixedDrinksApp.git
```

After cloning the repository, navigate to the project directories - there are seperate for the client and for the server - install the dependencies and start localhosts by running:

```
npm install
npm run start
```

Your will also need to create .env file in the server directory and set a variable called MONGO_KEY equal to your private access key to mongoDB Atlas claud service.

***

## TechStack

Client is built in React with the use of React Router Dom and Free Cocktail API https://www.thecocktaildb.com/api.php. Server is made in Express.js with mongoClient connection to mongoDB database.

***

## License

This project is licensed under the MIT License.
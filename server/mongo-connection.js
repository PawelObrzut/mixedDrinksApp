const { MongoClient } = require('mongodb');
require('dotenv').config()
const url = `mongodb+srv://Pawel:${process.env.MONGO_KEY}@cluster0.czc7qsk.mongodb.net/?retryWrites=true&w=majority`;
const dataBaseName = 'coctail-recipes';

let client;
let drinks;

const connectToMongo = async () => {
  client = await MongoClient.connect(url, { useNewUrlParser: true });
  const db = client.db(dataBaseName);
  drinks = db.collection('drinks');
};

const saveDrink = async (drink) => {
  await connectToMongo();
  const newDrink = await drinks.insertOne(drink);
  setTimeout(() => client.close(), 1000);
  return newDrink;
};

const getDrinks = async () => {
  await connectToMongo();
  const drinksCollection = await drinks.find().toArray();
  setTimeout(() => client.close(), 1000);
  return drinksCollection;
};

const deleteDrink = async id => {
  await connectToMongo();
  await drinks.deleteOne({ 'id': id });
  setTimeout(() => client.close(), 1000);
  return;
};

module.exports = {
  saveDrink,
  getDrinks,
  deleteDrink
}

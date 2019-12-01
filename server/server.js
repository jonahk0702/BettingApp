const express = require('express');
const bodyParser = require('body-parser'); 
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex')

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const createBet = require('./controllers/createBet');
const displayBet = require('./controllers/displayBet');
const returnBets = require('./controllers/returnBets');
const betAgainst = require('./controllers/betAgainst');
const betFor = require('./controllers/betFor');

const db = knex({
	client: 'pg',
	connection : {
	host : '127.0.0.1', //here it is hosted
	user : 'postgres',
		host : '127.0.0.1',
		user : 'postgres',
		password : 'test',
		database : 'bettingapp'
	}
});

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res)=>{
	res.send(database.users);
})

app.post('/signin', (req, res) => {
	signin.handleSignin(req, res, db, bcrypt)
})

app.post('/register', (req, res) => {
	register.handleRegister(req, res, db, bcrypt)
})

app.post('/createBet', (req, res) => {
	createBet.handleCreateBet(req, res, db)
})

app.post('/displayBet', (req, res) => {
	displayBet.handleDisplayBet(req, res, db, bcrypt)
})

app.post('/returnBets', (req, res) => {
	returnBets.handleReturnBets(req, res, db)
})

app.post('/betAgainst', (req, res) => {
	betAgainst.handleBetAgainst(req, res, db)
})

app.post('/betFor', (req, res) => {
	betFor.handleBetFor(req, res, db)
})

const PORT = process.env.PORT
app.listen(3000, () => {

	console.log("app is running on port 3000");
});
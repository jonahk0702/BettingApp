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
<<<<<<< HEAD

app.post('/buyBalance', (req, res) =>{
	buyBalance.handleBuyBalance(req, res, db)
})

=======
/*app.get('/profile/:id', (req, res) => {
	const { id } = req.params; 
	let found = false; 
	database.users.forEach(user => {
		if (user.id === id) {
			found = true;
			return res.json(user);
			
		}
	})
	if(!found){
		res.status(400).json("Not found ");
	}
})
*/
>>>>>>> ebc4634295611544ff19891fd5ded83d726296a0
const PORT = process.env.PORT
app.listen(3000, () => {

	console.log("app is running on port 3000");
});
//the acutal plan
/* - Maybe start all the way from the begining 
   - Maybe just build the array, and move forward on ma, 
   - 
*/


/*The first thing to make is npm init -m
Then npm install nodmon --save-dev. this just hekp wheb develoting
under scripts chahnge test to start and the whole message to nodemon + file name
npm install express
I got post man now. it tests server befor connecting to front
to ever use req.body use body parser. Probs alawys, its npm install body-parser
some really great Bcrypt options
- bcrypt.hash("bacon", null,null, function(err, hash){
	//Store hash in passwrod DB
});
- bcrypt.compare("Bacon", hash, function(err, res) {
	//res == true if matches else fales
});
- bcrypt
*/
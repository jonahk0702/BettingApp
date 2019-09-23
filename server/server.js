const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');


const app = express();

app.use(bodyParser.json());

app.use(cors());

const database = {
	users: [
		{
			id: '123',
			name: 'John',
			email: 'john@gmail.com',
			password: 'cookies',
			enteries: 0, 
			joined: new Date() 
		}, 
		{
			id: '1234',
			name: 'Sally',
			email: 'Sally@gmail.com',
			password: 'chips',
			enteries: 0,
			joined: new Date() 
		}
	]
}

app.get('/', (req, res)=>{
	res.send(database.users);
})

app.post('/signin', (req, res) => {  

	if(req.body.email === database.users[0].email &&
		req.body.password === database.users[0].password){
			res.json(database.users[0]);
	}else{
		res.status(400).json('erro login in');
	}
})

app.post('/register', (req, res) => {
	const {email, name, password , Country, dateOfBirth, gender, IdNumber } = req.body;
	bcrypt.hash(password, null,null, function(err, hash){
		console.log(hash);
	});
	database.users.push({
		id: '124',
			name: name,
			email: email,
			password: password,
			Country: Country,
			gender: gender,
			IdNumber: IdNumber,
			enteries: 0,
			joined: new Date()  
	})
	res.json(database.users[database.users.length -1]);
})

app.get('/profile/:id', (req, res) => {
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

app.put("/image", (req, res) => {
	const { id } = req.body; 
	let found = false; 
	database.users.forEach(user => {
		if (user.id === id) {
			found = true;
			user.enteries ++;
			return res.json(user.enteries);
			
		}
	})
	if(!found){
		res.status(400).json("Not found ");
	}

})
app.listen(3000, () => {

	console.log("app is running on 3000");
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
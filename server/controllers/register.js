const handleRegister = (req, res, db, bcrypt) => {
	const {email, name, password, country, gender, idnumber, birthday, surname } = req.body;
	const hash = bcrypt.hashSync(password);

	db.transaction(function(trx) {
	db('users').transacting(trx)
	.select('*').from('users')
	.then(data => {
		db('login')
		.insert({
			hash:hash,
			email: email
		})
		.then(data => {
			db('users')
			.insert({
				email: email,
	 			name : name, 
	 			idnumber : idnumber,
	 			country : country,
	 			gender : gender,
				surname: surname,
	 			birthday: birthday,
				joined: new Date(),
				balance:0,
			
			})
			.then(data => {
				db('records')
				.insert({
					email:email,
					amount:0
				})
				.then(data => {
					res.json("Success");

				})
			})
		})
	})
	.then(trx.commit)
 		.catch(trx.rollback)
})
	.catch(err => res.status(400).json("Unable to register"))
}



module.exports = {
	handleRegister:handleRegister
}

//111111111aA
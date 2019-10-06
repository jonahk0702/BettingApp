const handleRegister = (req, res, db, bcrypt) => {
	const {email, name, password, country, dateOfBirth, gender, idnumber, birthday, surname } = req.body;
	const hash = bcrypt.hashSync(password);
	db.transaction(trx => {
		trx.insert({
			hash: hash,
			email:email
		}) 
		.into('login')
		.returning('email')
		.then(Logemail => {
			return trx('users')
			.returning('*')
			.insert({
				email: Logemail[0],
				name : name, 
				idnumber : idnumber,
				country : country,
				gender : gender,
				surname: surname,
				birthday: birthday,
				joined: new Date()
			})
			.then(user => {
				res.json(user[0]);
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
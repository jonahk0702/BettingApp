const handleDisplayBet = (req, res, db) => {  
	db.select('id').from('bets')
	.where('id', '!=', '0')
	.then(data => {
		const isValid = true;
		if(isValid){
			return db.select('*').from('users')
			.where('id', '!=', '0')
			.then(user => {
				res.json(user[0].id)

			})
			.catch(err => res.status(400).json('unable to get user'))
		}else{
			res.status(400).json('wrong credentials');	
		}

	})
	.catch(err => res.status(400).json('wrong'))
}
module.exports = {
	handleDisplayBet:handleDisplayBet
}
const handleReturnBets = (req, res, db, amount) => {   
	db.select('id').from('login')
	
	.then(data => {
		const isValid = true;
		if(isValid){
			return db.select('*').from('bets')
			.then(user => {
				res.json(user)
			})
			.catch(err => res.status(400).json('unable to get user'))
		}else{
			res.status(400).json('wrong credentials');	
		}

	})
	.catch(err => res.status(400).json('wrong'))
}
module.exports = {
	handleReturnBets:handleReturnBets
}
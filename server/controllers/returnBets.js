const handleReturnBets = (req, res, db, amount) => {
	

	db.select('id').from('login')
	
	.then(data => {
		return db.select('*').from('matchingoffers')
		.then(user => {
			res.json(user)
		})
		.catch(err => res.status(400).json('unable to get user'))	
		
					
		

	})	
	.catch(err => res.status(400).json('wrong'))
}
module.exports = {
	handleReturnBets:handleReturnBets
}
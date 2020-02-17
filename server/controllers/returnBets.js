const handleReturnBets = (req, res, db, amount) => {
	const {sorter, } = req.body;

	db.select('id').from('login')
	
	.then(data => {
		const isValid = true;
		if(isValid){
			if(sorter == "expiry"){
				return db.select('*').from('bets')
				.orderBy(sorter, 'desc')
				.then(user => {
					res.json(user)
				})
				.catch(err => res.status(400).json('unable to get user'))	
			}
			else{
				return db.select('*').from('bets')
				.orderBy(sorter)
				.then(user => {
					res.json(user)
				})
				.catch(err => res.status(400).json('unable to get user'))	
			}
			

			
			
		}else{
			res.status(400).json('wrong credentials');	
		}

	})
	.catch(err => res.status(400).json('wrong'))
}
module.exports = {
	handleReturnBets:handleReturnBets
}
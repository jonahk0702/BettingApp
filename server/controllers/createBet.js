const handleCreateBet = (req, res, db) => {
	const { description, amountfor, total, expiry, userid } = req.body; 
	db('bets')
	.returning('*')
	.insert({
		description: description,
		amountfor : amountfor,
		amountagainst: 0,
		total: amountfor,
		expiry:expiry,
		usersfor: userid + "-",
		usersagainst: "",
		odds: 2,
		popular: 1
		
	})
	.then(bet => {
		db.select('betfor', 'amount').from('records')
		.where('email', '=', req.body.email)
		.then(data => {
			db('records')
			.where('email', '=', req.body.email)
			.update({
				betfor :  data[0].betfor + req.body.userid + "-",
				amount: (data[0].amount + 1)
			})
			.then(resp => {
				db('records')
				.where('email', '=', req.body.email)
				.update({
					amountfor :  amountfor,
					amountagainst : 0000
				})
				.then(user => {
					res.json("Success");
				})
			})
		})
		
	})
	.catch(err => res.status(400).json('Unable to bet here'))
	
}

module.exports = {
	handleCreateBet:handleCreateBet
}
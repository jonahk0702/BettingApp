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
		odds: 2,
		popular: 1,
		id: req.body.id
		
	})
	.then(bet => { 
		db('transactions')
			.insert({
				betid: 'a',//req.body.betid,
				userid: req.body.userId,
				amount: req.body.amount,
				//odds:  (Math.round( (data[0].amountagainst + req.body.amount) / (data[0].amountfor + req.body.amount) * 10000) / 10000 ),
				date: new Date(),
				type: 'for'
			})
			.then(user => {
				res.json("Success");
			})
			
		})
		
	
	.catch(err => res.status(400).json('Unable to bet here'))
	
}

module.exports = {
	handleCreateBet:handleCreateBet
}
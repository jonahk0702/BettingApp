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
		res.json(bet[0]);
	})
	.catch(err => res.status(400).json('Unable to bet here'))
	
}

module.exports = {
	handleCreateBet:handleCreateBet
}
const handleCreateBet = (req, res, db) => {
	const { description, amountfor, total, expiry, userid } = req.body; 
	db('bets')
	.returning('*')
	.insert({
		description: description,
		amountfor : amountfor,
		amountagainst: 0,
		total: amountfor,
		expiry:'2018/05/05',
		usersfor: userid + "-",
		usersagainst: ""
		
	})
	.then(bet => {
		res.json(bet[0]);
	})
	.catch(err => res.status(400).json('Unable to bet here'))
	
}

module.exports = {
	handleCreateBet:handleCreateBet
}
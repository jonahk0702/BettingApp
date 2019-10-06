const handleCreateBet = (req, res, db) => {
	const { description, amountfor, total, expiry, amountagainst } = req.body; 
	db('bets')
	.returning('*')
	.insert({
		description:description,
		amountfor : amountfor,
		total: total,
		expiry:'2018/05/05',
		amountagainst: amountagainst
	})
	.then(bet => {
		res.json(bet[0]);
	})
	.catch(err => res.status(400).json('Unable to bet here'))
	
}

module.exports = {
	handleCreateBet:handleCreateBet
}
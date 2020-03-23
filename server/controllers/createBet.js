const handleCreateBet = (req, res, db) => {
	const { description, total, expiry, userid, bettype, hour } = req.body; 
	db.select('balance')
	.from('users')
	.where('id', '=', userid)
	.then(date => {
		let balance = date[0].balance; 
		if(balance >= total){
			if(bettype === "match"){
				db('matchingoffers')
				.returning('*')
				.insert({
					description: description,
					creator: userid,
					amount : total,
					date: new Date(),
					betid: req.body.id, 
					expires: expiry+ "/" + hour
				})
				.then(user => {
					db('users')
					.where('id', '=', userid)
					.update({
						balance: (balance - total)
					})
					.then(data => {
						res.json("Success");
					})
				})
					
				
				.catch(err => res.status(400).json('Unable to bet here'))

			}
		}

		})
	
}

module.exports = {
	handleCreateBet:handleCreateBet
}
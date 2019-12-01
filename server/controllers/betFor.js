const handleBetFor = (req, res, db) =>{   

	db.transaction(function(trx) {
	db('users').transacting(trx)
	.select("balance").from('users')
	.where('email', '=', req.body.email)
	.then(resp => {
		let have = resp[0].balance;
		if(have > req.body.price){
			db('users')
			.where('email', '=', req.body.email)
			.update({balance : (have - req.body.price)})
			.then(resp => {
				db.select('betfor').from("records")
				.where('email', '=', req.body.email)
				.then(data => { 
					db('records')
					.where('email', '=', req.body.email)
					.update({betfor :  data[0].betfor + req.body.betid})
				.then(resp => {
						db.select('amountfor').from('bets')
						.where('id', '=', req.body.betid)
						.then(data => {
							db('bets')
							.where('id', '=', req.body.betid)
							.update({amountfor :  data[0].amountfor + req.body.price})
							.then(user => {
								res.json("success");
							})
						})
					}) 
				})

			})		
		}
		if(have < req.body.price){
			res.json("Do not have enough Bs");
		}
	    })

	    .then(trx.commit)
	    .catch(trx.rollback);
	})
	
	.catch(function(err) {
	  console.error(err);
	});
}


module.exports = {
	handleBetFor:handleBetFor
}
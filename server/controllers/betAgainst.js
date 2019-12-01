const handleBetAgainst = (req, res, db) =>{   
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
				db.select('betagainst').from("records")
				.where('email', '=', req.body.email)
				.then(data => { 
					db('records')
					.where('email', '=', req.body.email)
					.update({betagainst :  data[0].betfor + req.body.betid})
				.then(resp => {
						db.select('amountagainst').from('bets')
						.where('id', '=', req.body.betid)
						.then(data => {
							db('bets')
							.where('id', '=', req.body.betid)
							.update({amountagainst :  data[0].amountfor + req.body.price})
							.then(user => {
								res.json("success");
							})
						})
					}) 
				})

			})	

				

		}
		if(have < req.body.price){
			res.json("too poor");
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
	handleBetAgainst:handleBetAgainst
}
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
				db.select('betfor', 'betagainst', 'amountfor', 'amountagainst', 'amount').from("records")
				.where('email', '=', req.body.email)
				.then(data => { 
					db('records')
					.where('email', '=', req.body.email)
					.update({
						betfor :  data[0].betfor + req.body.betid + "-",
						betagainst: data[0].betagainst + 0 + "-",
						amountfor: data[0].amountfor + '-' + req.body.price,
						amountagainst: data[0].amountagainst +  "-0",
						amount: (data[0].amount + 1)	 
					})
					.then(resp => {
						db.select('amountfor').from('bets')
						.where('id', '=', 56)
						.then(data => {
							db('bets')
							.where('id', '=', req.body.betid)
							.update({amountfor :  (data[0].amountfor + req.body.price )})
							.then(resp => {

								db.select('amountfor', 'amountagainst', 'total', 'usersfor').from('bets')
								.where('id', '=', req.body.betid)
								.then(data => {
									db('bets')
									.where('id', '=', req.body.betid)
									.update({
										odds: (Math.round(( ((data[0].amountfor + data[0].total) / (data[0].amountagainst + data[0].total) )  ) * 1000) / 1000),
										usersfor: data[0].usersfor + "-" + req.body.userId	
											})

									.then(user => {
										db.select('popular').from('bets')
										.where('id', '=', req.body.betid)
										.then(data => {
											db('bets')
											.where('id', '=', req.body.betid)
											.update({popular :  (data[0].popular + 1)})
											.then(user =>{
												db.select('usersfor').from('bets')
												.where ('id', '=', req.body.betid)
												.then(data => {
													db('bets')
													.where('id', '=', req.body.betid)
													.update({usersfor: data[0].usersfor + req.body.userId})
												})
												.then(users => {
													res.json(user);

												})
											.catch(err => res.status(400).json('fail 1'))

											}).catch(err => res.status(400).json('fail 2'))


										}).catch(err => res.status(400).json('fail 3'))
										
									}).catch(err => res.status(400).json('fail 4'))
								}).catch(err => res.status(400).json('fail 5'))
							})	.catch(err => res.status(400).json('fail 6'))		
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
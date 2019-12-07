const handleBetFor = (req, res, db) =>{   
	db.transaction(function(trx) {
	db('users').transacting(trx)
	.select("balance").from('users')
	.where('email', '=', req.body.email)
	.then(resp => {
		let have = resp[0].balance;
		if(have > req.body.amount){

			db('users')
			.where('email', '=', req.body.email)
			.update({balance : (have - req.body.amount)})
			.then(resp => {
				db.select('betfor', 'betagainst', 'amountfor', 'amountagainst', 'amount').from("records")
				.where('email', '=', req.body.email)
				.then(data => { 
					db('records')
					.where('email', '=', req.body.email)
					.update({
						betfor :  data[0].betfor + "-" + req.body.betid ,
						betagainst: data[0].betagainst + "-"+ "000000",
						amountfor: data[0].amountfor + '-' + (req.body.price),
						amountagainst: data[0].amountagainst +  "-000000",
						amount: (data[0].amount + 1)	 
					})
					
							.then(resp => {

								db.select('amountfor', 'amountagainst', 'total', 'usersfor', 'amountfor', 'popular').from('bets')
								.where('id', '=', req.body.betid)
								.then(data => {
									db('bets')
									.where('id', '=', req.body.betid)
									.update({
										popular :  (data[0].popular + 1),
										amountfor:(data[0].amountfor + (req.body.amount)) ,
										odds: (Math.round(( ((data[0].amountfor + data[0].total) / (data[0].amountagainst + data[0].total) )  ) * 1000) / 1000),
										usersfor: data[0].usersfor + "-" + req.body.userId	
									})
									.then(users => {
										res.json(req.body.price);
									}).catch(err => res.status(400).json('fail 1'))
								}).catch(err => res.status(400).json('fail 2'))
							}).catch(err => res.status(400).json('fail 3'))
				})
})
		

				

		}
		if(have < req.body.amount){
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
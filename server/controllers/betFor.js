const handleBetFor = (req, res, db) =>{   
	const {email, amount, betid, userId, price} = req.body;
	db.transaction(function(trx) {
	db('users').transacting(trx)
	.select("balance").from('users')
	.where('email', '=', email)
	.then(resp => {
		let have = resp[0].balance; 
		if(have > amount){
 		
			db('users')
			.where('email', '=', email)
			.update({balance : (have - amount)})
			.then(resp => {
				db.select('amountfor', 'amountagainst').from('bets')
				.where('id', '=', 'HSalwn')
				.then(data => {				

				//STart here 
					db('transactions')
					.insert({

						betid: betid,
						userid: userId,
						amount: amount,
						odds:  (Math.round( (data[0].amountagainst + amount) / (data[0].amountfor + amount) * 10000) / 10000 ),
						date: new Date(),
						type: 'for'
					})
					.then(resp => {
						db.select('amountfor', 'amountagainst', 'total', 'amountfor', 'popular').from('bets')
						.where('id', '=', betid)
						.then(data => {
							db('bets')
							.where('id', '=', betid)
							.update({
								popular :  (data[0].popular + 1),
								amountfor:(data[0].amountfor + (amount)) ,
								odds: (Math.round(( ((data[0].amountfor + data[0].total) / (data[0].amountagainst + data[0].total) )  ) * 1000) / 1000), 	
							})
							.then(users => {
								res.json(price);
							}).catch(err => res.status(400).json('fail 1'))
						}).catch(err => res.status(400).json('fail 2'))
					}).catch(err => res.status(400).json('fail 3'))
				})
			})	
		}

		if(have < amount){
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
const handleJoinGroup = (req, res, db) => {   
	
	const {userid, code, email } = req.body; 
	db.transaction(function(trx) {
	db('users').transacting(trx)
	.select('groups').from('users')
	.then(data => {
		db.select('groupid').from('groupseps')
		.where('email', '=', email)			
		.then(data => { 
			
				db('groupseps')
					.insert({
						email:email,
			 			groupid: code
					
					})
					
					.then(data => {
						db.select('size').from('groups')
						.where('id', '=', code)
						.then(data => {
							db('groups')
							.where('id', '=', code)
							.update({
								size: data[0].size + 1 
							})
							.then(data => {
								res.json("Success");
							}) 
						})
					})
				
			
			
		})
	})
	.then(trx.commit) 
 	.catch(trx.rollback)

})
	.catch(err => res.status(400).json("Unable to register"))
}

module.exports = {
	handleJoinGroup:handleJoinGroup
} 
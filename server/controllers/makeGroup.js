const handleMakeGroup = (req, res, db) => {
	const {id, name, subject, email} = req.body;
	db.transaction(function(trx) {
	db('users').transacting(trx)
	.select('groups').from('users')
	.then(data => {
		if(data[0].groups.length < 64){
		db('groups')
		.insert({
			id: id,
			name: name,
			subject: subject,
			size: 1
		})
		.then(data => {
			db.select('groups').from('users')
			.where('email', '=', email)	
			.then(data => {
				db('users')
				.where('email', '=', email)
				.update({
					groups: data[0].groups + "," + id
				})
				.then(data => {
					res.json("Success");
				})
			})
		})
	}else{
		res.json("Too many");
	}
})
	.then(trx.commit)
 		.catch(trx.rollback)
})
	.catch(err => res.status(400).json("Unable to register"))
}

 

module.exports = {
	handleMakeGroup:handleMakeGroup
}

//null, VAnZt, 4l?Wt, vgo3n, l7pu1, fDEYV, kydqE, G@iZU, qUhIJ, Y86P@, 4JG
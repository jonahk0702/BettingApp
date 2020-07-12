const handleMakeGroup = (req, res, db) => {
	
	const {id, name, subject, email} = req.body;
		db('groups').returning('*').insert({
			id: id,
			name: name,
			subject: subject,
			size: 1
		})
		.then(data => {
			db('groupseps').returning('*').insert({
				groupid: id,
				email: email
				})
			.then(data => {
				res.json("Success")
			})	
		})
}

 

module.exports = {
	handleMakeGroup:handleMakeGroup
}

//null, VAnZt, 4l?Wt, vgo3n, l7pu1, fDEYV, kydqE, G@iZU, qUhIJ, Y86P@, 4JG
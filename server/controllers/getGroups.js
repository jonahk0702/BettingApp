 const handleGetGroups = (req, res, db) => {
	const {id} = req.body;
    return db('groupseps')
	.select('groupid')
	.where('userid', '=', id)
	.then(data => {
		if(data.length === 1){
		db('groups').select('*').where('id','=', data[0].groupid)
		.then(groups =>{
		res.json(groups)
		})
		.catch(err => res.status(400).json("not right"))
	}
	else{
		db('groups').select('*').whereIn('id', data)
		.then(groups =>{
		res.json(groups)
		})
		.catch(err => res.status(400).json("really not right"))
	}
	})	
	.catch(err => res.status(400).json("Fuck off"))
}

module.exports = {
	handleGetGroups:handleGetGroups
}
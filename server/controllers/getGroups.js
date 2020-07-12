 const handleGetGroups = (req, res, db) => {
 	const {email} = req.body;
 	let groupid;
    db('groupseps')
	.select('groupid')
	.where('email', '=', email)
	.then(data => {
		groupid = data[0]
		db('groups').select('*').where('id', '=', groupid)
		.then(group =>{
			res.json(group)
		})
	})	

	.catch(err => res.status(400).json('wrong'))

}
module.exports = {
	handleGetGroups:handleGetGroups
}
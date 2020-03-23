 const handleGetGroups = (req, res, db) => {
 	const {email} = req.body;
 	let arr = [];
	return db('groupseps')
	.select('groupid')
	.where('email', '=', email)
	.then(user => {

		res.json(user)
	})	

	.catch(err => res.status(400).json('wrong'))

}
module.exports = {
	handleGetGroups:handleGetGroups
}
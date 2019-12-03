const handleGetId = (req, res, db) => {   
	return db.select('*').from('users')
	.where('email', '=', req.body.email)
	.then(user => { 
		res.json(user[0].id)
	})
	.catch(err => res.status(400).json('unable to get user'))

}
module.exports = {
	handleGetId:handleGetId
} 
const handleGetBalance = (req, res, db) => {   

	return db('users')
	.select('balance')
	.where('id', '=', req.body.id)
	.then(user => {
		res.json(user[0].balance)
	})	

	.catch(err => res.status(400).json('wrong'))
}
module.exports = {
	handleGetBalance:handleGetBalance
}
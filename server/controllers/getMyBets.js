 const handleGetMyBets = (req, res, db) => {   
	db.select('*').from('records')
	.where('email', '=', req.body.email)
	
	.then(data => {
		res.json(data[0])

	})
	.catch(err => res.status(400).json('wrong'))
}
module.exports = {
	handleGetMyBets:handleGetMyBets
} 
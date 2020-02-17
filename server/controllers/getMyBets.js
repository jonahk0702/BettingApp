 const handleGetMyBets = (req, res, db) => {   
 	const { email } = req.body;
	db.select('*').from('transactions')
	.where('email', '=', email)
	
	.then(data => {
		res.json(data[0])
 
	})
	.catch(err => res.status(400).json('wrong'))
}
module.exports = {
	handleGetMyBets:handleGetMyBets
}
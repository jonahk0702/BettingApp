 const handleGetMyBets = (req, res, db) => {   
 	const { userId } = req.body;
	db.select('*').from('matchedbets')
	.where('better', '=', userId)
	.orWhere('creator', '=', userId)
	
	.then(data => {
		res.json(data)
 
	})
	.catch(err => res.status(400).json('wrong'))
}
module.exports = {
	handleGetMyBets:handleGetMyBets
}
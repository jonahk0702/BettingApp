const handleCheckId = (req, res, db) => {   
	return db.select('id').from(req.body.table)
	.where('id', '=', req.body.id)
	.then(user => { 
		if(user[0].id){
			res.json("reject")
		}
	})
	.catch(err => res.json('Good'))

}
module.exports = {
	handleCheckId:handleCheckId
} 
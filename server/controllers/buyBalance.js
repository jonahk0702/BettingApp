const handleBuyBalance = (req, resp, db) =>{  
    db.select('balance').from('users').where('email', '=', req.body.email)

    .then(data =>{
        db('users').where('email', '=', req.body.email)
        .update({
            balance: data[0].balance + req.body.amount
        })
        .then(data =>{
            resp.json('success')
        })
    })
    }


module.exports = {
	handleBuyBalance:handleBuyBalance
}
const handleBuyBalance = (req, resp, db) =>{  
    db.where('id', '=', req.body.id)
      .update({
          status: 'balance' + 100,
          thisKeyIsSkipped: undefined
      })
    }


module.exports = {
	handleBuyBalance:handleBuyBalance
}
const handleChooseMatchWinTaken = (req, resp, db) =>{  
    const {betid} = req.body;

    db('matchpending')
    .where('betid', '=', betid)
    .update({
    
       balance: (balance - total)
    }).then(data => {
        resp.json("All done");
    })
    
}

module.exports = {
	handleChooseMatchWinTaken:handleChooseMatchWinTaken
} 
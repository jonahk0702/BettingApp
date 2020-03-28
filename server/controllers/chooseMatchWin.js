const handleChooseMatchWin = (req, resp, db) =>{  
    const {betid} = req.body;

    let bool = true;

    db.select('*').from('matchpending')
   .where('betid', '=', betid)
    .then(data => {
        resp.json(data);
    })

}

module.exports = {
	handleChooseMatchWin:handleChooseMatchWin
} 
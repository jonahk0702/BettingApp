const handleChooseMatchWinp2 = (req, resp, db) =>{  
    const {creator, amount, betid, side, sideWon, better} = req.body;
    let amCreator = "";
    if(side == "creator"){
        amCreator = 'true';
    }else{
        amCreator = 'false';
    }
    // I am assuming that there is no record for this bet yet...
    if(amCreator == 'true'){
        db('matchpending')
        .insert({
            betid: betid,
            creator:creator,
            better: "better",
            amount: amount,
            creatorside: sideWon

        })
        .then(data => {
            resp.json("All done");
        })
    }else{
        db('matchpending')
        .insert({
            betid: betid,
            creator:creator,
            better: better,
            amount: amount,
            betterside : sideWon

        })
        .then(data => {
            resp.json("All done");
        })
    }
}

module.exports = {
	handleChooseMatchWinp2:handleChooseMatchWinp2
} 
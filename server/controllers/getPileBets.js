 const handleGetPileBets = (req, res, db) => {   
 	let emptyBet = [];
 	let betIds = []; 
 	const { userId, database, expiredBets, setting } = req.body;
 		if(setting === 'starts'){
			db(database)
			.select('*')
			.innerJoin('pileons', 'pileons.betid', '=', 'pilestransactions.betid')
			.where('userid', '=', userId)
			.andWhereNot('currentagainst', '=', 0)
			.andWhereNot('currentagainst', '=', 0)
			.then(data => {
				res.json(data)
		 
			})
			.catch(err => res.status(400).json('wrong'))
	}
	if(setting === 'untaken'){
		db('pilestransactions')
		.select('*')
		.where('userid', '=', userId)
		.then(data => {
			for(let i = 0; i < data.length; i ++){
				betIds.push(data[i].betid)
			}

			db('pileons')
			.select('*')
			.whereIn('betid', betIds)
			.andWhere('currentfor', '=', 0)
			.orWhere('currentagainst', '=', 0)
			.then(data => {
				res.json(data);
			})

		})
	}
	if(setting === 'dones'){
		db('expiredpiletrans')
		.select('*')
		.where('userid', '=', userId)
		.then(data => {
			for(let i = 0; i < data.length; i ++){
				betIds.push(data[i].betid)
			}

			db('exiredpiles')
			.select('*')
			.whereIn('betid', betIds)
			.then(data => {
				res.json(data);
			})

		})			
	}
	
}
module.exports = {
	handleGetPileBets:handleGetPileBets
}
//what I am trying to do?
		/*
		get all betid from this user
		check if betid has an empty side
		*/
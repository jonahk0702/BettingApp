 const handleGetGroups = (req, res, db) => {
 const {email, id} = req.body;   
	let holder = "";
	db.select('groupid').from('groupseps')
	.where('email', '=', email)
	.then(data => {
		res.json(data[0].groups);
		
	// let arrArray = [];
	// 	let better = "";
 //        for(let i = 5; i < data[0].groups.length; i ++){
 //  	        if(data[0].groups[i] !== ','){
 //            	better += data[0].groups[i]; 
 //           	}
 //  	    }

 //  	    let array = [];
 //  	    let times = (better.length / 5);
 //  	    for(let i = 0; i < times; i ++){
 //          array.push(better.substring(i * 5, (i * 5 ) + 5));
 //        }
 //  	    	db.select('*').from('groups')
	// 		.whereIn('id', array)
	// 		.then(data => {
	// 			res.json(data);
	// 	})
				
	}) 
	.catch(err => res.status(400).json("Wrong"))
}
module.exports = {
	handleGetGroups:handleGetGroups
}
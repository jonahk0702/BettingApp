import React from 'react';
import IndividaulBet from "./IndividaulBet";

let betArray;
let holder;
class betManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	a:1
    };
  }

  render(){



	// const betComponent = betArray.map((bet, i) => {
	// 	return <IndividaulBet name = {betArray[i].description}/>

	// })
	return(
		<div>
			{holder}
		
		</div>
	);
}
}

export default betManager; 
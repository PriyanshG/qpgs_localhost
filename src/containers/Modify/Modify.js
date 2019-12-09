import React from  'react';

const Modify=()=>{

	return(

		<div  >
	
			<h1 className='center' > Modify Question </h1>
			<div className='mh5'>
				<div className='mv3 fontlg'>
				  	<strong >Modify your question: </strong> 
				</div>
				 <p>
				 Question Id :
				 </p>
				 <div className='mv2' style={{display:'flex' ,flexDirection:'column'}} >
				  <textarea className='mv2 inputRes' type="text" name="FirstName" placeholder="Your Question" ></textarea>
				 <div style={{display:'flex'}} >

				  	<span className='mr2'> Time required to solve the question:</span>
					  <label className='mr2'>
					  	<input type='radio' value='optional'/>5Minutes
					  </label>
					  <label className='mr2'>
					  	<input type='radio' value='optional'/>10Minutes
					  </label>
					  <label>
					  	<input type='radio' value='optional'/>15Minutes
					  </label>
				  </div>
				  <button className="button1 mt4"> Modify Question </button>
				 </div>
			</div>
		</div>
	)
};

export default Modify;
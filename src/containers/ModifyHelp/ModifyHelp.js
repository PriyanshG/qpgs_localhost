import React ,{useState}from  'react';

import {useHistory} from "react-router-dom";
const ModifyHelp=()=>{

	const history=useHistory();
/*	console.log('adddd');*/

	const [statement,setStatement]=useState('');
	const [difficulty,setDifficulty]=useState('');


	const onStatementChange=(event)=>{
		setStatement(event.target.value);
	}
	const onDiffLow=()=>{
		setDifficulty('Low');
	}

	const onDiffMedium=()=>{
		setDifficulty('Medium');
	}
	const onDiffHigh=()=>{
		setDifficulty('Tough');
	}

	const uid=Number(localStorage.getItem('uid'));
	const modifyQuestion=()=>{

	    fetch('http://localhost:3000/profile/modify',{
	      method:'PUT',
	      headers:{'Content-Type':'application/json'},
	      body:JSON.stringify({
	       qid:Number(localStorage.getItem('qid')),
	       statement:statement,
	       difficulty:difficulty,
	       offsett:0
	      }),
	    })
	    .then(response=>response.json())
	    .then(data=>{
	      if(data==='success'){
	        
	        // localStorage.setItem('userData',user.name);
	        history.push("/profile");
	      }
	    })
	}
	return(

		<div  >
	
			<h1 className='center' > Modify Question </h1>
			<div className='mh5'>
				<div className='mv3 fontlg'>
				  	<strong >Type your question below: </strong> 
				 </div>
				 <div className='mv2' style={{display:'flex' ,flexDirection:'column'}} >
				  <textarea onChange={onStatementChange} className='mv2 inputRes' type="text" name="FirstName" placeholder="Your Question" ></textarea>
				  <div style={{display:'flex'}} >

				  	<span className='mr2'> Time required to solve the question:</span>
					  <label className='mr2'>
					  	<input onClick={onDiffLow} type='radio' value='optional'/>5Minutes
					  </label>
					  <label className='mr2'>
					  	<input onClick={onDiffMedium}  type='radio' value='optional'/>10Minutes
					  </label>
					  <label>
					  	<input onClick={onDiffHigh} type='radio' value='optional'/>15Minutes
					  </label>
				  </div>
				  <button onClick={modifyQuestion} className="button1 mt4"> Modify Question </button>
				 </div>

			</div>
		</div>
	)
};

export default ModifyHelp;
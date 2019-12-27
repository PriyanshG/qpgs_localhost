import React, {useState,useEffect} from  'react';
import {
  useHistory,
  useRouteMatch,

} from "react-router-dom";

import './Show.css';

const Show=()=>{

	const history=useHistory();

	const { path } = useRouteMatch();
	const [qCode,setQCode]=useState(0);
	const [flag,setFlag]=useState(0);
	
	const [questions, setQuestions] = useState([{
													qid: 0,
													statement: "",
													difficulty: ""
												}]);

	const isModify = path === '/profile/modify';
	const isDelete = path === '/profile/delete';


	const uid=Number(localStorage.getItem('uid'));
	useEffect(()=>{
	
		  fetch('http://localhost:3000/profile/show',{
	      method:'POST',
	      headers:{'Content-Type':'application/json'},
	      body:JSON.stringify({
	       	uid:uid,
	      }),
	    })
		.then(response=> response.json())
		.then(res => {
			console.log('length',res.length);
			if(res==='Not FOund'){
				setFlag(1);
				alert('No questions');
				history.push('/profile')
			}
			setQuestions(res);
		})
	   
	},[]);

	const onModify=()=>{
		localStorage.setItem('qid',qCode);
		history.push('/profile/modifyquestion')

	}

	const onDelete=()=>{
		localStorage.setItem('qid',qCode);

		const qid=Number(localStorage.getItem('qid'));	
		fetch('http://localhost:3000/profile/delete',{
	      method:'DELETE',
	      headers:{'Content-Type':'application/json'},
	      body:JSON.stringify({
	       	qid:qid,
	      }),
	    })
	    .then(response=>response.json())
	    .then(data=>{
	    	if(data==='success')
	    		history.push('/profile')
	    })
	}

	const onQCodeChange=(event)=>{
		setQCode(event.target.value);

	}
	const table = questions.map(obj => {
		return (
			<tr>
				<td>{obj.qid}</td>
				<td>{obj.statementt}</td>
				<td>{obj.difficulty}</td>
			</tr>
		)
	})
	return(

		<div  >
			<h1 className='center' >Questions </h1>
			<div className='center' style={{width:'90%'}}>
				<table>
					<tr>
						<th>Question Code</th>
						<th>Question Statement</th>
						<th>Difficulty</th>
					</tr>
						{table}
				</table>

			</div>
			{isModify &&
				<div className='center mv4' style={{width:'90%' , }}>
					<input  onChange={onQCodeChange} placeholder="Question code you want to modify. " style={{width:'20%' , 'text-align':'center' , border: '2px solid #86D472' , 'border-radius': '10px' }}/>
					<button onClick={onModify} className='button1' style={{width:'80%' ,  border: '2px solid #86D472' , 'border-radius': '10px'}}>Modify Question</button>
					
				</div>
			}
			{isDelete &&
				<div className='center mv4' style={{width:'90%' , }}>
					<input  onChange={onQCodeChange} placeholder="Question code you want to modify. " style={{width:'20%' , 'text-align':'center' , border: '2px solid #86D472' , 'border-radius': '10px' }}/>
					<button onClick={onDelete} className='button1' style={{width:'80%' ,  border: '2px solid #86D472' , 'border-radius': '10px'}}>Delete Question</button>
					
				</div>
			}

			

	
		</div>
	)
};

export default Show;
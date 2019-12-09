import React, { useEffect } from  'react';
import './Qpgs.css'
// import {Link,useRouteMatch,} from "react-router-dom";

const Qgps =({ questions })=>{
	let table;
	const Institute=localStorage.getItem('Institute');
	const Course=localStorage.getItem('Course');

	const Session=localStorage.getItem('Session');
	const ques=JSON.parse(localStorage.getItem("ques"));
	const time=localStorage.getItem('time');
	const Marks=localStorage.getItem('Marks');
	useEffect(() => {
		 document.body.style.backgroundColor = "white"
		},[]);
		console.log('sdfg', questions.length, Array.isArray(questions));
		let i=1;
		table = ques.map(elem => {
			console.log('sdf');
			if(elem){
			
			return (
				<tr style={{backgroundColor:'white'}} key="i++">
					
					
					<td style={{border: '2px solid white','text-align': 'center', 'padding': '8px'}}>{i++}</td>
					<td style={{border: '2px solid white','text-align': 'left', 'padding': '8px'}}>{`${elem.statementt} `}</td>
				</tr>
			)
			}
		})
	// });
	
	return(

		<div style={{'text-align': 'center', margin:'50px'}}>
			<h1>{Institute}</h1>
			<h2>{Session}</h2>
			<h2>{`Subject : ${Course} `} </h2>
			<div style={{display: 'flex', 'font-weight':'bold', 'justify-content':'space-between'}}>

				<p>{`Time : ${time} Minutes`} </p>
				<p>{`Maximum Marks : ${Marks}`}</p>
			</div>
			{table}
			
		</div>
	)
};

export default Qgps;
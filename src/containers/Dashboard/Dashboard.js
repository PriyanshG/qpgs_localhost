import React ,{useState}from  'react';
import './Dashboard.css';
import {Link,useRouteMatch,} from "react-router-dom";

const Dashboard =()=>{

	const [questions,setQuestions]=useState([]);
	const user={
		name:localStorage.getItem('userName'),
		uid:Number(localStorage.getItem('uid')),
	}
	
	let {url } = useRouteMatch();
	return(

		<div  className='bgcolor sze90 pa2' style={{display:'flex' ,flexDirection:'column',justifyContent:'space-around' }}>
		{console.log('dash',user)}
			<h2 className='center'> {`Namaste!!! Welcome ${user.name}`}</h2>
			<div >
				<div className='flo_ar'>
				<Link to={`${url}/add`} className="button"> Add Question </Link>
				<Link to={`${url}/modify`} className="button"> Modify Question </Link>
				{/*<button className="button"> Modify Question </button>*/}
				<Link to={`${url}/show`}className="button"> Show Questions </Link>
				</div>
			</div>
			<div>
				<div className='flo_ar'>
					<Link to={`${url}/delete`}className="button"> Delete Questions </Link>
					<Link to={`${url}/operation`}className="button"> Generate Question Paper</Link>
				
				</div>
			</div>
		</div>
	)
};

export default Dashboard;
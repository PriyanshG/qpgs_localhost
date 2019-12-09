import React ,{useEffect} from 'react';
import './Content.css';
import {
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Home from '../../containers/Home/Home';
import Register from '../../containers/Register/Register';
import Login from '../../containers/Login/Login';
import Dashboard from '../../containers/Dashboard/Dashboard';
import Add from '../../containers/Add/Add';
import Show from '../../containers/Show/Show';
import ModifyHelp from '../../containers/ModifyHelp/ModifyHelp';
import Operation from '../../containers/Operation/Operation';



const Content =({setQuestions,quest,loadUser})=>{



	const history=useHistory();

		const uid=Number(localStorage.getItem('uid'));
	useEffect(()=>{

		console.log('efect');
		if(uid===0)
			history.push('/');
	},[uid])
	return (
	
		<div  className='bgcolor sze90 pa2' style={{ overflow: 'auto'}}>

		<Switch>
			<Route exact path="/">
				<Home />
			</Route> 
			<Route exact path="/register">
				<Register loadUser={loadUser} />
			</Route> 
			<Route exact path="/login">
				<Login loadUser={loadUser} />
			</Route> 
			
			<Route exact path="/profile">
		
				<Dashboard />
			</Route> 
			<Route exact path="/profile/add">
				<Add />
			</Route> 
			<Route exact path={["/profile/modify", "/profile/show","/profile/delete"]}>
				<Show />
			</Route> 
			<Route exact path={"/profile/modifyquestion"}>
				<ModifyHelp />
			</Route> 
			<Route exact path={"/profile/operation"}>
				<Operation quest={quest} setQuestions={setQuestions} />
			</Route> 
		{/*	<Route exact path={"/profile/qpgs"}>
				<Qpgs />
			</Route> 
			*/}
		</Switch> 
		</div>


	 
	);
};

export default Content;

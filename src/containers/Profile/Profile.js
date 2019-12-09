import React from 'react';
import './Profile.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';
import Add from '../Add/Add';
const Profile =()=>{
			console.log('reached');

	return(
		<div className='bgcolor sze90 pa2' >
			<Switch>
{/*				<Route exact path="/profile/add">
					<Dashboard />
				</Route>*/}
				<Route exact path="/profile">
				<Dashboard />
					
				</Route>
			</Switch>
		</div>
	);
};
export default Profile;
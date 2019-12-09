import React ,{useState}from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import 'tachyons'
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import {Switch} from "react-router-dom";
import Qpgs from './components/Qpgs/Qpgs';



	/*route:'show',
	issigned:false*/

/*class App extends Component{*/
const App=()=>{

	
	const [questions, setQuestions] = useState([]);
	const [user,loadFuncUser]=useState({
									uid:0,
									name:'',
									email:'',
									joinedDate:''
									});

/*	const alterLoginFlag=()=>{
		console.log('sfs',dbool)
		localStorage.removeItem('issigned');
		localStorage.setItem('issigned',dbool);
	}*/

	
	const loadUser=(user)=>{

		loadFuncUser(user);
		localStorage.setItem('userName',user.name)
		localStorage.setItem('uid',user.uid)
	}
	

	/*const checkIn=(route)=>{
		const uid=localStorage.getItem('uId')
		console.log(uid); 
		if(uid===0)
			history.push("/login");
	}*/
		return (
			<div>
			<Switch>
				<Route exact path="/profile/qpgs">
					<Qpgs questions={questions}  />
				</Route>
				<Route>
					<Navbar  />
					<Content setQuestions={setQuestions} quest={questions} loadUser={loadUser} />
					<Footer />
				</Route>
			</Switch>
			</div>
		)};
export default App;

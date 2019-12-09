import React ,{useState,useEffect}from 'react';

import {useHistory} from "react-router-dom";
import Qpgs from '../../components/Qpgs/Qpgs';


const Operation =({ setQuestions,quest })=>{


	/*const [questions, setQuestions] = useState([{
													qid: 0,
													statement: "",
													difficulty: ""
												}]);*/

	const [data,setData]=useState({
		time:0,
		marks:0,
		easy:0,
		medium:0,
		tough:0
	})
const [institute,setInstitute]=useState('');
const [semseter,setSemseter]=useState('');
const [subjectCode,setSubjectCode]=useState('');
useEffect(() => {
		 document.body.style.backgroundColor = '#FEC08C';
		},[]);
	const [ret1,setret1]=useState(false);
	const [ret2,setret2]=useState(false);
	const [ret3,setret3]=useState(false);

	const onTimeChange=(event)=>{
		setData({...data,time:event.target.value})
		localStorage.setItem('time',event.target.value);

	}
	const onSessionChange=(event)=>{
		setInstitute(event.target.value);
		localStorage.setItem('Session',event.target.value);
	}
	const onInstituteChange=(event)=>{
		setSemseter(event.target.value);
		localStorage.setItem('Institute',event.target.value);
	}
	const onCourseChange=(event)=>{
		setSubjectCode(event.target.value);
		localStorage.setItem('Course',event.target.value);
	}
	
	const onMarksChange=(event)=>{
		setData({...data,marks:event.target.value})
		localStorage.setItem('Marks',event.target.value);

	}
	const onEasyChange=(event)=>{
		setData({...data,easy:event.target.value})

	}
	const onMediumChange=(event)=>{
		setData({...data,medium:event.target.value})

	}
	const onToughChange=(event)=>{
		setData({...data,tough:event.target.value})
		console.log(data);

	}

	const history=useHistory();

	useEffect(()=>{
		if(ret1 && ret2 && ret3){

		// console.log('fata', A[0]);
		// setQuestions(A);
		// console.log('sdfsafa1',A,typeof A);
/*
		for(let i=0;i<quest.length;i++){
			console.log('sdf11',quest[i].qid);
			fetch('https://serene-river-38708.herokuapp.com/profile/on',{
		      method:'PUT',
		      headers:{'Content-Type':'application/json'},
		      body:JSON.stringify({
		       	uid:quest[i].qid,
		      }),
		    })
		    .then(response=>{console.log('ss',response)})


		}
*/
		localStorage.setItem('ques',JSON.stringify(quest));
		history.push({
			  pathname: '/profile/qpgs'
			})

		}
	},[ret1,ret2,ret3])
	function randomIntInc(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low)
}
	const generate=(event)=>{

		if(data.marks<=0 || data.time<=0 || data.easy<=0 || data.medium<=0 || data.tough<=0)
   		 return alert('Invalid Input');
   		console.log((data.easy+data.medium+data.tough));
   		if(Number(data.easy)+Number(data.medium)+Number(data.tough)!=100)
   			return alert('Total Percentage should be 100 ')
    	event.preventDefault();
		const easyQ=Math.floor(data.easy*data.time/500);
		const mediumQ=Math.floor(data.medium*data.time/1000);
		const toughQ=Math.floor(data.tough*data.time/1500);

		console.log('ma ka ',typeof A);
		const uid=Number(localStorage.getItem('uid'));
		fetch('https://serene-river-38708.herokuapp.com/profile/operation',{
	      method:'POST',
	      headers:{'Content-Type':'application/json'},
	      body:JSON.stringify({
	       	uid:uid,
	       	difficulty:'easy'
	      }),
	    })
		.then(response=> response.json())
		.then(questions => {
			const set1=new Set();
			for(let i=0;i<Math.min(easyQ,questions.length);i++){

				let x=randomIntInc(0,questions.length-1)
				while(set1.has(x)===true){
					x=randomIntInc(0,questions.length-1);

				}
				console.log('dsf1',questions[x].qid);
				set1.add(x);
				setQuestions((prevA) => {
					prevA.push(questions[x]);
					return prevA;
				})
			}

			
				/*setQuestions(questions);*/
		})
		.then(()=>setret1(true));


		fetch('https://serene-river-38708.herokuapp.com/profile/operation',{
	      method:'POST',
	      headers:{'Content-Type':'application/json'},
	      body:JSON.stringify({
	       	uid:uid,
	       	difficulty:'medium'
	      }),
	    })
		.then(response=> response.json())
		.then(questions => {

			const set1=new Set();
			for(let i=0;i<Math.min(mediumQ,questions.length);i++){
				let x=randomIntInc(0,questions.length-1)
				while(set1.has(x)===true){
					x=randomIntInc(0,questions.length-1);

				}
				console.log('dsf1',questions[x].qid);
				set1.add(x);
				setQuestions((prevA) => {
					prevA.push(questions[x]);
					return prevA;
				})
			}
				/*setQuestions(questions);*/
		})
		.then(()=>setret2(true));


		fetch('https://serene-river-38708.herokuapp.com/profile/operation',{
	      method:'POST',
	      headers:{'Content-Type':'application/json'},
	      body:JSON.stringify({
	       	uid:uid,
	       	difficulty:'tough'
	      }),
	    })
		.then(response=> response.json())
		.then(questions => {

			const set1=new Set();
			for(let i=0;i<Math.min(toughQ,questions.length);i++){
				let x=randomIntInc(0,questions.length-1)
				while(set1.has(x)===true){
					x=randomIntInc(0,questions.length-1);

				}
				console.log('dsf1',questions[x].qid);
				set1.add(x);
				console.log('difficulty');
				setQuestions((prevA) => {
					prevA.push(questions[x]);
					return prevA;
				})
			}
				/*setQuestions(questions);*/
		})
		.then(()=> setret3(true));
		

	/*	return (<Qpgs />)*/

	}
	return (
		<div>
			  <main className="pa4 black-80 center">
                <form className="measure">
                  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <div className="mt3">
                      <label className="db fw6 lh-copy f6" htmlFor="email-address">Institute <span style={{color:'red'}}> *</span></label>
                      <input  onChange={onInstituteChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
                    </div>
                    <div className="mt3">
                      <label className="db fw6 lh-copy f6" htmlFor="email-address">Semester<span style={{color:'red'}}> *</span></label>
                      <input onChange={onSessionChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="session"  id="session"/>
                    </div>
                    <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="password">Subject Code<span style={{color:'red'}}> *</span></label>
                      <input onChange={onCourseChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="course"  id="course"/>
                    </div>	
                    <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="password">Time<span style={{color:'red'}}> *</span></label>
                      <input onChange={onTimeChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="time"  id="time"/>
                    </div>
                    <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="password">Marks<span style={{color:'red'}}> *</span></label>
                      <input onChange={onMarksChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="marks"  id="marks"/>
                    </div>
                    <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="password">Difficulty Pecentage<span style={{color:'red'}}> *</span></label>
                      <input onChange={onEasyChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="easy"  id="easy" placeholder="EASY"/>
                       <input onChange={onMediumChange}  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="medium"  id="medium" placeholder="MEDIUM"/>
                        <input onChange={onToughChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="tough"  id="tough" placeholder="TOUGH"/>
                    </div>
                  
                  </fieldset>
                  <div className="center">
                    <input  onClick={generate} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Generate"/>
                  </div>
                
                </form>
              </main>
		</div>
	);
}
export default Operation;
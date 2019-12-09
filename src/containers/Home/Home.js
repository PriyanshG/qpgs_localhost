import React from 'react'
import logo from '../../images/logo.png';
import './Home.css'

const Home= ()=>{
	return(

			<div className='divide50 sze20'>
			
					<div id="divB" >
					{	/*<img src={defimg} height='100%' />*/}
					</div>
			
					<div className='bgcolor  pa4' style={{ overflow: 'auto'}}>
						<img src={logo}  alt='Logo' className='imageLogo' />
						<p className='textsz' style={{textAlign:'justify' }}>The project “QUESTION PAPER GENERATING SYSTEM” (In short QPGS) will enable college authorities to automatically generate question papers out of existing question bank in the database.
						</p>
						<p className='textsz' style={{textAlign:'justify'}}>
						QPGS will help the college authorities to generate question paper easily. The QPGS will have capability to process different unique sets of papers automatically. It takes over the entire tedious task and does the manual, laborious work swiftly and efficiently. The QPGS is the one \& only software for setting examination question paper. Software is very useful for small medium and large-scale institutes. The software will use the database to harness the question paper where the database could consist thousands of questions. The software will produce random question paper set such that the question does not repeat in the same paper. The software will empower the college with a powerful tool to generate question papers in a very short span of time thus saving a lot of their precious time.
						</p> 

					</div> 
				</div> 
)};

export default Home;




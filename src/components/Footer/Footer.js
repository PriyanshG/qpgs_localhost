import React from 'react'
import {Link} from "react-router-dom";
import './Footer.css'

const Footer=()=>{
	return(
		<footer className="pv2 ph5-m ph6-l mid-gray">
		  <small className="f6 db tc">© 2019<b className="ttu">APPU</b>., All Rights Reserved</small>
		  <div className="tc mt3">
		   <Link to ="/team"><span title="Language" className="f6 dib ph2 link mid-gray dim">Team</span></Link>
		    {/*<a href="/privacy/"  title="Privacy" class="f6 dib ph2 link mid-gray dim">Privacy</a>*/}
		  </div>
		</footer>

	);

}

export default Footer;

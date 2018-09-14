import React, { Component } from 'react';
import css from '../css/style.css';



class Signup extends Component{
	render(){
		return(
			<div className="main-area">
				<div className="container">
					<section className="left-section full-height">
						<a className="logo" hre="#"><img src="../media/logo.png" alt="logo"/></a>
					<div className="display-table">
						<div className="display-table-cell">
							<div className="main-content">
								<h1 className="title"><b>Launching<br/>Soon!<br/></b></h1>
							<p> Inspired by Jen Sincero’s book <i>You Are A
							Badass</i>, I was motivated to apply this same
							attitude throughout my coding journey. This 
							podcast series is all about highlighting 
							amazing women who is currently or aspiring  to 
							make their mark in tech. , this coder was 
							motivated to apply that same attitude 
							throughout her own journey. 
							<br/>
							Sometimes, all it takes is just reminding
							yourself how much of a badass you are!</p>
						<div className="email-input-area">
								<form method="post" action="mailto:thebadasscoder@gmail.com" encType="multipart/form-data">
									<input className="email-input" name="email" type="text" placeholder="Enter your email"/>
									<button className="submit-btn" name="submit" type="submit" value="submit"><b>JOIN US</b></button>
								</form>
							</div>
							<p className="post-desc">Sign up now to get an early notification of our first episode!</p>
						</div> 
					</div>
				</div>
					</section>
					<section className="right-section">
						<div className="display-table center-text">
							<div className="display-table-cell">

							</div>
						</div>
					</section>
				</div>
			</div>

		)
	}
}

export default Signup;
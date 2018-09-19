import React, { Component } from 'react';
import css from '../css/style.css';


class Signup extends Component{
	constructor(){
		super()
		this.state = {
			email: '', save: []
		}
	}
	handleChange(e){
		this.setState({email: e.target.value})
	}
	handleSubmit(e){
		e.preventDefault();
		this.state.save.push(this.state.email);
	}
	render(){
		return(
			<div className="main-area">
				<div className="container">
					<section className="left-section full-height">
						<a className="logo" href="#"><img src="../media/logo.png" alt="logo"/></a>
					<div className="display-table">
						<div className="display-table-cell">
							<div className="main-content">
								<h1 className="title"><b>Launching<br/>Soon!<br/></b></h1>
							<p> Inspired by Jen Sincero’s book <i>You Are A
							Badass</i>, I was motivated to apply this same
							attitude throughout my coding journey. This 
							podcast series is all about highlighting 
							amazing women who is currently  
							making their mark in tech.
							<br/>
							Sometimes, all it takes is just reminding
							yourself how much of a badass you are!</p>
						<div className="email-input-area">
								<form onSubmit={this.handleSubmit.bind(this)}>
									<input className="email-input" defaultValue={this.state.email}  onChange={this.handleChange.bind(this)}name="Email" placeholder="Enter your email"/>
									<button className="submit-btn" type="submit" value="submit"><b>JOIN US</b></button>
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
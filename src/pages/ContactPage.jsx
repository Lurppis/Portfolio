import React, { Component } from 'react';

class ContactPage extends Component {
	render() {
		return(
			<div>
				<div className='page-header'>
					<h1>Contact me</h1>
				</div>
				<div className='container'>
					<h1>My site is getting a little tune up and need some love.</h1>

					<p>I apologize for the inconvenience, but I'm performing some maintenance and working at new project.
					<br />
					You can still contact me at <a href="mailto:marcinpilarczyk@me.com?subject=Hire">
marcinpilarczyk@me.com</a> or via phone 530-740-711!</p>
					<span>-- Marcin Pilarczyk</span>
					<hr />

					<div className="container_social">
						<a className="sns_btn btn_facebook" rel="noopener noreferrer" href="https://www.facebook.com/people/Marcin-Pilarczyk/100000366427387" target='_blank'>
							<i className="fa fa-facebook"></i>
						</a>
						<a className="sns_btn btn_github" href="https://github.com/Lurppis" rel="author">
							<i className="fa fa-github"></i>
						</a>
						<a className="sns_btn btn_googleplus" href="https://www.instagram.com/lurppisek93/" rel="author">
							<i className="fa fa-instagram"></i>
						</a>
						<a className="sns_btn btn_email" href="mailto:marcinpilarczyk@me.com?subject=Hire" rel="author">
							<i className="fa fa-envelope"></i>
						</a>
					</div>
				</div>

			</div>
		);
	}
}

export default ContactPage;
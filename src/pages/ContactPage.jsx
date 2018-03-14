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

					<div class="container_social">
						<a class="sns_btn btn_facebook" href="#" rel="author">
							<i class="fa fa-facebook"></i>
						</a>
						<a class="sns_btn btn_github" href="#" rel="author">
							<i class="fa fa-github"></i>
						</a>
						<a class="sns_btn btn_googleplus" href="#" rel="author">
							<i class="fa fa-instagram"></i>
						</a>
						<a class="sns_btn btn_email" href="mailto:marcinpilarczyk@me.com?subject=Hire" rel="author">
							<i class="fa fa-envelope"></i>
						</a>
					</div>
				</div>

			</div>
		);
	}
}

export default ContactPage;
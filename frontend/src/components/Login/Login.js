import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../actions';
import logo from '../../images/logo.svg';
import companyName from '../../images/company-name.svg';

import './Login.css';

const Login = class extends Component {
	constructor(props) {
		super(props);

		// reset login status
		this.props.dispatch(userActions.logout());

		this.state = {
			username: '',
			password: '',
			submitted: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleonFocus = this.handleonFocus.bind(this);
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

handleonFocus(e) {
	// console.log(111123);
  // 这里添加类模块类名 .focus

	$(e.target).css('border-bottom','2px solid #0076ff');
}

	handleSubmit(e) {
		e.preventDefault();

		this.setState({ submitted: true });
		const { username, password } = this.state;
		const { dispatch } = this.props;
		if (username && password) {
			dispatch(userActions.login(username, password));
		}
	}

	render() {
		const { loggingIn } = this.props;
		const { username, password, submitted } = this.state;
		return (
			<div className="loginWrap">
				<div className="login">
					<div className="logo">
						<img alt="Made for goods" title="Made for goods" src={logo} />
					</div>
					<div className="companyName">
						<img
							alt="Made for goods"
							title="Made for goods"
							src={companyName}
						/>
					</div>
					<div className="font-login-title loginDesc"></div>
					<form name="form" onSubmit={this.handleSubmit}>
						<div
							className={
								'form-group' + (submitted && !username ? ' has-error' : '')
							}
						>
							<input
								type="text"
								name="username"
								value={username}
								onChange={this.handleChange}
								placeholder="Email"
								onFocus = {this.handleonFocus}
							/>
							{submitted &&
								!username && (
									<div className="help-block">Username is required</div>
								)}
						</div>
						<div
							className={
								'form-group' + (submitted && !password ? ' has-error' : '')
							}
						>
							<input
								type="password"
								name="password"
								value={password}
								onChange={this.handleChange}
								placeholder="Enter your password"
							/>
							{submitted &&
								!password && (
									<div className="help-block">Password is required</div>
								)}
						</div>
						<div className="form-group">
							<button
								className={"btn btn-primary font-login-title" + (loggingIn ? 'active-loading': '')}
								style={{ color: 'white' }}
							>
								{/* <span>Login</span> */}
							</button>
							{loggingIn && (
								<img
									alt="login"
									src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
								/>
							)}
						</div>
					</form>
				</div>
			</div>
		);
	}
};

function mapStateToProps(state) {
	const { loggingIn } = state.authentication;
	return {
		loggingIn
	};
}

const connectedLogin = connect(mapStateToProps)(Login);
export { connectedLogin as Login };

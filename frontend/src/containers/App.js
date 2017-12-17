import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ActionLanguage from 'material-ui/svg-icons/action/language';
import { Glyphicon, Popover, OverlayTrigger, Button } from 'react-bootstrap';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NavigationExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import NavigationExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import DeviceAccessTime from 'material-ui/svg-icons/device/access-time';
import SocialNotifications from 'material-ui/svg-icons/social/notifications';
import swal from 'sweetalert2';

//import 'bootstrap/dist/css/bootstrap.css';
import { history, request } from '../utils';
import { alertActions } from '../actions';
import CustomerGeneral from '../components/CustomerPages/CustomerGeneral.js';
import CustomerStatistics from '../components/CustomerPages/CustomerStatistics.js';
import GoodGeneral from '../components/GoodPages/GoodGeneral.js';
import GoodStatistics from '../components/GoodPages/GoodStatistics.js';
import ConsumerStatistics from '../components/ConsumerPages/ConsumerStatistics.js';
import ConsumerGeneral from '../components/ConsumerPages/ConsumerGeneral.js';

import { Home } from '../components/Home';
import { Login } from '../components/Login';
import { MfgRoute } from '../containers';
import intl from 'react-intl-universal';
import zhCN from '../locales/zh_CN';
import enUS from '../locales/en_US';
import './app.css';
import { userActions } from '../actions/userAction';
import { searchActions } from '../actions/searchAction';
import symbolsLogo from '../images/symbols-logo.png';
import reactJpg from '../images/avatar.png';

let language;
let searchLinkPrefix = '';
let searchLink = '';
let searchText;
let searchScope = ['客户', '货物', '消费者', '标签', '货物主数据'];
let historyContent = [];

const locales = {
	en: enUS,
	zh: zhCN
};

const App = class extends Component {
	constructor(props) {
		super(props);
		// this line is required to work on plunker because the app preview runs on a subfolder url
		//history.push('/');
		const { dispatch } = this.props;
		history.listen((location, action) => {
			// clear alert on location change
			dispatch(alertActions.clear());
		});
		this.languageClick = this.languageClick.bind(this);
		language = language || localStorage.getItem('lang');
		if (language) {
			switch (language) {
				case 'en':
					this.state = {
						initDone: false,
						language: language
					};
					break;
				default:
					this.state = {
						initDone: false,
						language: 'zh'
					};
			}
		} else {
			this.state = {
				initDone: false,
				language: 'zh'
			};
		}
		this.props.dispatch(searchActions.getAll());
	}

	componentDidMount() {
		this.loadLocales();
	}

	componentWillReceiveProps() {
		if (this.props.lang == undefined) return;
		this.setState({ language: this.props.lang }, () => {
			this.loadLocales();
		});
	}

	searchInputOnFocus(event) {
		event.target.style.backgroundColor = 'white';
		//head search
		let searchTips = ReactDOM.findDOMNode(this.refs.searchTips);
		searchTips.style.display = 'block';
		// searchTips.onmousedown = function(ev) {
		// 	var oevent = ev || event;
		// 	var distanceX = oevent.clientX - searchTips.offsetLeft;
		// 	var distanceY = oevent.clientY - searchTips.offsetTop;
		// 	document.onmousemove = function(ev) {
		// 		var oevent = ev || event;
		// 		searchTips.style.marginLeft = oevent.clientX - distanceX + 'px';
		// 		searchTips.style.marginTop = 180 + oevent.clientY - distanceY + 'px';
		// 	};
		// 	document.onmouseup = function() {
		// 		document.onmousemove = null;
		// 		document.onmouseup = null;
		// 		searchTips.style.marginTop = '250px';
		// 		searchTips.style.marginLeft = null;
		// 	};
		// };
		// mainBoard
		let mainBoard = ReactDOM.findDOMNode(this.refs.content);
		mainBoard.setAttribute('class', 'mask-layer');
		// let appNonClickable = ReactDOM.findDOMNode(this.refs.appNonClickable);
		// let appClickable = ReactDOM.findDOMNode(this.refs.appClickable);
		// appNonClickable.style.display = 'flex';
		// appClickable.style.display = 'none';
	}

	searchInputOnBlur(event) {
		event.target.style.backgroundColor = '#e1e2e7';
	}

	searchonInputChange(event) {
		let removeIcon = ReactDOM.findDOMNode(this.refs.removeIcon);
		if (event.target.value) {
			removeIcon.style.display = 'block';
		} else {
			removeIcon.style.display = 'none';
		}
	}

	searchonInputOnKeyup = e => {
		let searchInput = ReactDOM.findDOMNode(this.refs.searchInput);
		searchLink = searchLinkPrefix + searchInput.value;
		if (e.keyCode === 13) {
			if (searchLinkPrefix) {
				history.push(searchLink);
				searchActions.createHistory(searchInput.value, searchLink);
				this.resetParamter();
				this.hideSearchTips(null);
			} else {
				swal({
					title: 'Oops!',
					text: '请指定搜索范围，目前只支持货物和客户!',
					type: 'warning',
					// showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: '知道了!',
					allowOutsideClick: false
				}).then(result => {
					// if (result.value) {
					//   swal(
					//     '棒!',
					//     '你真聪明',
					//     'success'
					//   )
					// }
				});
			}
		}
	};

	selectScope(event, tip) {
		let searchInput = ReactDOM.findDOMNode(this.refs.searchInput);
		searchInput.focus();
		searchInput.setAttribute('placeholder', '搜索' + tip);
		searchText = '搜索' + tip;
		// set link prefix
		switch (tip) {
			case '货物':
				searchLinkPrefix = '/goodGeneral/';
				break;
			case '客户':
				searchLinkPrefix = '/customerGeneral/';
				break;
			default:
		}
		// head search
		let searchTips = ReactDOM.findDOMNode(this.refs.searchTips);
		searchTips.style.display = 'none';
	}

	hideSearchTips(event) {
		if (document.getElementsByClassName('mask-layer').length === 0) {
			return;
		}
		// mainBoard
		let mainBoard = ReactDOM.findDOMNode(this.refs.content);
		mainBoard.style.display = 'block';
		mainBoard.setAttribute('class', '');
		// head search
		let searchTips = ReactDOM.findDOMNode(this.refs.searchTips);
		searchTips.style.display = 'none';
		// input search
		let searchInput = ReactDOM.findDOMNode(this.refs.searchInput);
		searchInput.blur();
		this.resetParamter();
		searchInput.value = '';
		searchInput.setAttribute('placeholder', searchText);
		let removeIcon = ReactDOM.findDOMNode(this.refs.removeIcon);
		removeIcon.style.display = 'none';
		// switch app clickable
		// let appNonClickable = ReactDOM.findDOMNode(this.refs.appNonClickable);
		// let appClickable = ReactDOM.findDOMNode(this.refs.appClickable);
		// appNonClickable.style.display = 'none';
		// appClickable.style.display = 'flex';
	}

	resetParamter() {
		searchLinkPrefix = '';
		searchLink = '';
		searchText = intl.get('search');
	}

	deleteOneHistory(content, key) {
		searchActions.deleteOne(content.id);
		let historyItem = ReactDOM.findDOMNode(this.refs['historyItem' + key]);
		historyItem.remove();
	}

	loadLocales() {
		// react-intl-universal is singleton, so you should init it only once in your app

		intl
			.init({
				currentLocale: this.state.language,
				locales
			})
			.then(() => {
				this.setState({ initDone: true });
			});
	}

	languageClick(event, language) {
		let screen = ReactDOM.findDOMNode(this.refs.screen);
		screen.click();
		if (language !== this.state.language) {
			this.props.dispatch(userActions.switchLanguage(language));
		}
	}

	hideAndShowHeaderNavigation(event, type) {
		let navigationExpandLess = ReactDOM.findDOMNode(
			this.refs.navigationExpandLess
		);
		let navigationExpandMore = ReactDOM.findDOMNode(
			this.refs.navigationExpandMore
		);
		let searchBar = ReactDOM.findDOMNode(this.refs.searchBar);
		let content = ReactDOM.findDOMNode(this.refs.content);
		switch (type) {
			case 'hide':
				navigationExpandLess.style.display = 'none';
				navigationExpandMore.style.display = 'block';
				searchBar.style.transition = 'margin .2s linear';
				searchBar.style.marginTop = '-60px';
				content.style.height = '100%';
				break;
			case 'show':
				navigationExpandLess.style.display = 'block';
				navigationExpandMore.style.display = 'none';
				searchBar.style.marginTop = '0px';
				content.style.height = '850px';
				break;
			default:
		}
	}

	render() {
		const currentUrl = history.location.pathname;
		// i18n
		searchText = intl.get('search');
		let logout = intl.get('logout');
		const searchScopeText = intl.get('search.scope');
		const searchHistoryText = intl.get('search.history');
		let languageText = intl.get('language.text');
		let switchLanguageText = intl.get('switch.language.text');
		const switchLanguage = (
			<Popover
				id="popover-trigger-click-root-close"
				title={switchLanguageText}
				ref="languageOverlay"
			>
				<div className="language-overlay">
					<Button onClick={event => this.languageClick(event, 'zh')}>
						<span>{intl.get('chinese')} </span>
					</Button>
					<Button onClick={event => this.languageClick(event, 'en')}>
						<span>{intl.get('english')} </span>
					</Button>
				</div>
			</Popover>
		);
		// data handle
		historyContent = this.props.searchHistory || [];
		if (historyContent.length > 7) {
			historyContent = historyContent.slice(0, 7);
		}
		historyContent.forEach((item, i) => {
			if (item.name.length > 40) {
				item.name = item.name.substring(0, 40) + '...';
			}
		});
		const user = localStorage.getItem('user')
			? localStorage.getItem('user')
			: '';
		const popoverBottom = (
			<Popover id="popover-trigger-click-root-close" title={user}>
				<div className="popover-user">
					<div className="head-img">
						<img height="50" width="50" src={reactJpg} alt="head-portrait" />
					</div>
					<Router history={history}>
						<Link to="/login" style={{ textDecoration: 'none' }}>
							<Button>
								<span>{logout} </span>
								<Glyphicon glyph="log-out" />
							</Button>
						</Link>
					</Router>
				</div>
			</Popover>
		);
		let homeButton = null;
		let footer = null;
		let header = null;
		let loginHeight;
		if (currentUrl === '/login') {
			loginHeight = '100%';
		}
		if (request.isLogin()) {
			if (currentUrl !== '/') {
				homeButton = (
					<Link to="/">
						<ActionHome style={{ marginRight: '13' }} />
					</Link>
				);
			}
			footer = (
				<div className="language-switch">
					<span className="foot-mfg">
						<span>Copyright © 2014-2017 madeforgoods | </span>
						<span>沪ICP备15022666号 |</span>
						<span className="foot-version">version: 2017.12</span>
					</span>
					<div className="foot-language">
						<span className="text" ref="languageText">
							{languageText}
						</span>
						<MuiThemeProvider muiTheme={getMuiTheme()}>
							<OverlayTrigger
								container={this}
								trigger="click"
								rootClose
								placement="top"
								overlay={switchLanguage}
							>
								<ActionLanguage style={{ cursor: 'pointer', color: 'white' }} />
							</OverlayTrigger>
						</MuiThemeProvider>
					</div>
				</div>
			);
			header = (
				<Router history={history}>
					<div className="search-bar" ref="searchBar">
						<div className="search-left">
							<Link to="/" title="回到主页">
								<img height="31" width="195" src={symbolsLogo} alt="mfg" />
							</Link>
						</div>
						<div className="search-mid">
							<input
								className="search-input"
								placeholder={searchText}
								onFocus={event => this.searchInputOnFocus(event)}
								onBlur={event => this.searchInputOnBlur(event)}
								onChange={event => this.searchonInputChange(event)}
								onKeyUp={event => this.searchonInputOnKeyup(event)}
								ref="searchInput"
							/>
							<div className="search-icon" ref="inputIcon">
								<Glyphicon glyph="search" />
							</div>
							<div
								className="home-remove-icon"
								ref="removeIcon"
								style={{ display: 'none' }}
								onClick={event => this.hideSearchTips(event)}
							>
								<MuiThemeProvider muiTheme={getMuiTheme()}>
									<NavigationClose />
								</MuiThemeProvider>
							</div>
							<div
								className="search-tips"
								ref="searchTips"
								style={{ display: 'none' }}
							>
								<div className="scope">
									<span className="tip-text text-grey">{searchScopeText}</span>
									{searchScope.map((tip, key) => (
										<div
											key={key}
											className="border"
											onClick={event => this.selectScope(event, tip)}
										>
											{tip}
										</div>
									))}
								</div>
								<div className="history">
									<span className="tip-text text-grey">
										{searchHistoryText}
									</span>
									{historyContent.map((content, key) => (
										<div key={key} className="item" ref={'historyItem' + key}>
											<div className="item-left">
												<MuiThemeProvider muiTheme={getMuiTheme()}>
													<DeviceAccessTime />
												</MuiThemeProvider>
												<Link
													to={content.link}
													className="text"
													onClick={event => this.hideSearchTips(event)}
												>
													{content.name}
												</Link>
											</div>
											<div
												className="remove"
												onClick={event => this.deleteOneHistory(content, key)}
											>
												<MuiThemeProvider muiTheme={getMuiTheme()}>
													<ActionDeleteForever />
												</MuiThemeProvider>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
						{/* right */}
						{/* <div className="search-right"> */}
						<div className="home-button-link">
							<MuiThemeProvider muiTheme={getMuiTheme()}>
								{homeButton}
								{/* <NavigationExpandLess
										ref="navigationExpandLess"
										style={{ display: 'block' }}
										onClick={event =>
											this.hideAndShowHeaderNavigation(event, 'hide')}
									/> */}
								{/* <SocialNotifications /> */}
							</MuiThemeProvider>
						</div>
						<div className="head-sculpture">
							<OverlayTrigger
								container={this}
								trigger="click"
								rootClose
								placement="bottom"
								overlay={popoverBottom}
							>
								<img
									height="42"
									width="42"
									style={{ borderRadius: '25px' }}
									alt="head sculpture"
									src={reactJpg}
								/>
							</OverlayTrigger>
						</div>
					</div>
					{/* </div> */}
				</Router>
			);
		}
		return (
			<div className="screen" ref="screen">		
				<div id="warning" className="rtBox"></div>
				{header}
				<MuiThemeProvider muiTheme={getMuiTheme()}>
					<NavigationExpandMore
						ref="navigationExpandMore"
						onClick={event => this.hideAndShowHeaderNavigation(event, 'show')}
						style={{
							display: 'none',
							marginLeft: '98%',
							position: 'absolute',
							zIndex: 100
						}}
					/>
				</MuiThemeProvider>
				<div
					ref="content"
					style={{ width: '100%', height: loginHeight ? loginHeight : '850px' }}
					onClick={event => this.hideSearchTips(event)}
				>
					<Router history={history}>
						<Switch>
							<MfgRoute exact path="/" component={Home} />
							<MfgRoute
								path="/customerGeneral/:id"
								component={CustomerGeneral}
							/>
							<MfgRoute
								path="/customerStatistics"
								component={CustomerStatistics}
							/>
							<MfgRoute path="/goodStatistics" component={GoodStatistics} />
							<MfgRoute path="/goodGeneral/:code" component={GoodGeneral} />
							<MfgRoute
								path="/consumerStatistics"
								component={ConsumerStatistics}
							/>
							<MfgRoute path="/consumerGeneral" component={ConsumerGeneral} />
							<Route path="/login" component={Login} />
						</Switch>
					</Router>
				</div>
				{footer}
			</div>
		);
	}
};

function getScrollTop() {  
        var scrollPos;  
        if (window.pageYOffset) {  
        scrollPos = window.pageYOffset; }  
        else if (document.compatMode && document.compatMode != 'BackCompat')  
        { scrollPos = document.documentElement.scrollTop; }  
        else if (document.body) { scrollPos = document.body.scrollTop; }   
        return scrollPos;   
}

$(function () {
    // $('.search-bar').nextAll('div').eq(0).children().css('marginTop','60px')
    // let h2=document.documentElement.clientHeight?document.documentElement.clientHeight:document.body.clientHeight
    // let h3=document.documentElement.scrollHeight?document.documentElement.scrollHeight:document.body.scrollHeight;
    // let bb = document.querySelector('.language-switch');
    // let tt = document.querySelector('.search-bar');
    // let scrollHeight = $(document).height();
    // let windowHeight = $(this).height();

    window.onscroll = function() {
        // let scrollTop = $(window).scrollTop();
        // if(scrollTop + windowHeight + 60 >= scrollHeight){
        //     bb.style.display = 'flex';
        // } else {
        //     bb.style.display = 'none';
        // }
        // if(h1 == 0) {
        //     tt.style.position = 'relative';
        //     $('.search-bar').nextAll('div').eq(0).children().css('marginTop','120px')
        //     // tips('success','112332')
        // }else if(h1 > 0) {
        //     tt.style.position = 'fixed';
        //     $('.search-bar').nextAll('div').eq(0).children().css('marginTop','180px')
        // }
    }
})



  window.tips = function(type, data) {
    let  tip = "";
    switch (type) {
      case "success":
        tip = $("<div class='successBox clearfix showBox'><p>" + data + "</p></div>");
        break;
      case "warning":
        tip = $("<div class='warningBox clearfix showBox'><p>" + data + "</p></div>");
        break;
    }
    $("#warning").append(tip);
    setTimeout(function () {
      tip.remove();
    }, 4000);
  };

function mapStateToProps(state) {
	const { alert } = state;
	const { lang, userInfo } = state.authentication;
	const { searchHistory } = state.searchReducer;
	return {
		alert,
		lang,
		userInfo,
		searchHistory
	};
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };

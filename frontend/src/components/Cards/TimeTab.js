import React, { Component } from 'react';
import intl from 'react-intl-universal';

import './TitleWithTime.css';

// let selectTimeTab = function(){
// 	this.timeTab ='week';
// 	console.log('a')
// }

let selectTimeTabMy = function(tmpTimeTab){
	// this.timeTab=tmpTimeTab
	// console.log('aa')
	// console.log(this)
}

const TimeTab = ({ timeTab, selectTimeTab }) => (
	<div className="title-time-fix">

  <ul className="nav nav-tabs " role="tablist">
    <li role="presentation" className={timeTab == 'day' ? 'active' : null}><a href="#day;" onClick={selectTimeTabMy.bind(TimeTab,'day')} aria-controls="home" role="tab" data-toggle="tab">{intl.get('day')}</a></li>
    <li role="presentation" className={timeTab == 'week' ? 'active' : null}><a href="#week;" onClick={selectTimeTabMy} role="tab" data-toggle="tab">{intl.get('week')}</a></li>
    <li role="presentation" className={timeTab == 'month' ? 'active' : null}><a href="#month;" onClick={selectTimeTabMy} role="tab" data-toggle="tab">{intl.get('month')}</a></li>
    <li role="presentation" className={timeTab == 'all' ? 'active' : null}><a href="#all;" onClick={selectTimeTabMy} role="tab" data-toggle="tab">{intl.get('all')}</a></li>
  </ul>

  {/* <div class="tab-content">
    <div role="tabpanel" class="tab-pane active" id="home">...</div>
    <div role="tabpanel" class="tab-pane" id="profile">...</div>
    <div role="tabpanel" class="tab-pane" id="messages">...</div>
    <div role="tabpanel" class="tab-pane" id="settings">...</div>
  </div> */}

</div>
	// <div className="title-time buttom-border">
	// 	<div className="time-text">
	// 		<span
	// 			className={timeTab == 'day' ? 'selected' : null}
	// 			onClick={selectTimeTab}
	// 		>
	// 			{intl.get('day')}
	// 		</span>
	// 		<span
	// 			className={timeTab == 'week' ? 'selected' : null}
	// 			onClick={selectTimeTab}
	// 		>
	// 			{intl.get('week')}
	// 		</span>
	// 		<span
	// 			className={timeTab == 'month' ? 'selected' : null}
	// 			onClick={selectTimeTab}
	// 		>
	// 			{intl.get('month')}
	// 		</span>
	// 		<span
	// 			className={timeTab == undefined ? 'selected' : null}
	// 			onClick={selectTimeTab}
	// 		>
	// 			{intl.get('all')}
	// 		</span>
	// 	</div>
	// </div>
);

export default TimeTab;

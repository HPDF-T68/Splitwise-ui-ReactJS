import React, { Component } from 'react';
import Styles from '../Styles.js';

class DashboardAside extends  Component{
	render(){
		return(
			<img style={Styles.hasuraLogo} src="/images/Hasura_HD.webp" />
		);
	}
}

export default DashboardAside;
import React, { Component } from 'react';
import muiTheme from '../muiTheme.js';
import Styles from '../Styles.js';
import DetailsList from  './DetailsList.js';

import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

class DashboardMain extends Component{
	render(){
		return(
			<Paper style={Styles.dashboardMain}>
				<div style={Styles.dashboardBanner}>			
					<b style={Styles.dashboardHeader}>Dashboard</b>
					<span style={{'marginLeft':'150px'}}>
						<FlatButton style={Styles.flatAddBill} labelStyle={Styles.dasboardFlatLabel}
		                        backgroundColor='#ff4e00' hoverColor='#ff9d00' rippleColor='#efefef' 
		                        label="Add a bill" />
		                &nbsp;&nbsp;&nbsp;
						<FlatButton style={Styles.flatSettleUp} labelStyle={Styles.dasboardFlatLabel}
		                        backgroundColor='#08ce00' hoverColor='#64dd17' rippleColor='#efefef' 
		                        label="Settle up" />
					</span>
				</div>
				<Divider style={{'backgroundColor': muiTheme.palette.primaryHeaderColor}}/>
				<div style={Styles.dashboardBanner}>
					<div style={Styles.dashboardBannerText}>
						<div>
							total balance<br />
							<span style={Styles.account}>$ {this.props.account.totalBalance}</span>
						</div>
						<div style={Styles.dashboardBannerMid}>
							you owe<br />
							<span style={Styles.account}>$ {this.props.account.youOwe}</span>
						</div>
						<div>
							you are owed<br />
							<span style={Styles.account}>$ {this.props.account.youAreOwed}</span>
						</div>
					</div>
				</div>
				<DetailsList />
			</Paper>
		);
	}
}

export default DashboardMain;
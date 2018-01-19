import React, { Component } from 'react';
import Styles from '../Styles.js';
import DashboardMenu from '../components/DashboardMenu.js';
import DashboardMain from '../components/DashboardMain.js';

class Dashboard extends Component{
    render(){
        return(
            <div style={{display:'flex', flexDirection:'row', marginLeft:'200px'}}>
                <DashboardMenu friends={this.props.friends}     groups={this.props.groups} />
                <DashboardMain account={this.props.account} />
            </div>
        );
    }
}

export default Dashboard;
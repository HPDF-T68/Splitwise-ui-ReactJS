import React, { Component } from 'react';
import Styles from '../Styles.js';
import DashboardMenu from '../components/DashboardMenu.js';
import DashboardMain from '../components/DashboardMain.js';
import DashboardAside from '../components/DashboardAside.js';

class Dashboard extends Component{
    render(){
        return(
            <div style={{display:'flex', flexDirection:'row', marginLeft:'190px'}}>
                <DashboardMenu friends={this.props.friends}     groups={this.props.groups} />
                <DashboardMain account={this.props.account} />
                <DashboardAside />
            </div>
        );
    }
}

export default Dashboard;
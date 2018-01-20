import React, { Component } from 'react';
import muiTheme from '../muiTheme.js';
import Styles from '../Styles.js';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import MenuItem from 'material-ui/MenuItem';

import Menu from 'material-ui/Menu';
//<i class="material-icons">description</i>
//<i class="material-icons">bookmark_border</i>
class DetailsList extends Component{
	render(){
		return(
			<div>
		    	<List>
		    		<ListItem
		    			leftIcon={
		    				<div style={Styles.flexRow}>
		    					<span style={Styles.listTimestamp}>
		    						<span style={Styles.listMonth}>MNT</span><br/>
		    						<span style={Styles.listDate}>99</span>
		    					</span>
		    					<i class="material-icons" style={Styles.listBill}>bookmark_border</i>
		    				</div>
		    			}
          				primaryText={<span style={Styles.listPrimary}>Primary Name of expense<br/></span>}
          				secondaryText={<span style={Styles.listSecondary}>Secondary</span>}
          				rightIcon={
		    				<div style={Styles.listPayment}>
		    					<span style={Styles.listPayedBy}>
		    						<span style={Styles.listPayName}>Paid by friend</span><br/>
									<span style={Styles.listPayAmt}>$ 99</span>
								</span>
		    					<span>
		    						<span style={Styles.listPayName}>Lent by friend</span><br/>
									<span style={Styles.listLentAmt}>$ 99</span>
		    					</span>
		    				</div>
		    			}
        			/>
        			<Divider style={Styles.listDivider} />
		    	</List>
			</div>
		);
	}
}

export default DetailsList;
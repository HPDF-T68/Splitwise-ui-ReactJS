import muiTheme from './muiTheme.js';

const Styles = {
    appbarTitle:    {cursor: 'pointer', marginLeft: 200, width: 'wrap-content',
                     fontSize: 16, fontFamily: 'serif', letterSpacing: 4},
    subheader:      {color:muiTheme.palette.subHeaderColor, fontWeight:100},
    appbarAvatar:   {marginRight:130, marginTop:0, width: 300, color: muiTheme.palette.primaryTextColor},
    labelText:      {textTransform: 'none', color: muiTheme.palette.primaryTextColor },
    LoginSignupImg: {height:200, marginLeft:420, marginTop:100, marginRight:60},
    LoginSignupDiv: {marginTop:70},

    flatLogin:      {lineHeight: '25px', height:25, borderRadius:5, marginTop:5, border:'1px solid #06b11a'},
    flatSignup:     {lineHeight: '25px', height:25, borderRadius:5, marginTop:5, border:'1px solid #de0000'},
    
    flatSignMeUp:   {height:50, fontSize:30, borderRadius:5, marginTop:5, border:'1px solid #de0000',
                    boxShadow: '0px 0px 3px #bfbfbf'},
    labelSignMeUp:  {textTransform: 'none', color: muiTheme.palette.primaryTextColor, fontSize:20,
                    textShadow: '0px -1px 0px #5d5d5d'},

    dashboardBanner:{backgroundColor:muiTheme.palette.banner,  padding:15},    
    dashboardMain:  {margin:'0px 5px 0px 20px', minHeight: '100vh'},
    dashboardBannerText:{fontSize:14, color:muiTheme.palette.subTextColor, display:'flex',
                        justifyContent:'space-around', textAlign:'center'},
    dashboardBannerMid: {padding:'0px 50px', borderLeft:'1px solid #9e9e9e', borderRight:'1px solid #9e9e9e'},

    dasboardFlatLabel:{textTransform: 'none', color: muiTheme.palette.primaryTextColor, fontSize:16},
    flatAddBill:    {lineHeight:'38px', height:'40px', borderRadius:5, marginTop:5, border:'1px solid #de0000'},
    flatSettleUp:   {lineHeight:'38px', height:'40px', borderRadius:5, marginTop:5, border:'1px solid #06b11a'},

    textFieldintro: {border: '1px solid #b1b0b0', borderRadius:5, fontSize: 35, width: 300, height: 50,
                     padding: '0px 4px', boxShadow: 'inset 0px 0px 3px #d3d3d3', color:'#acabab',},
    textFieldother: {border: '1px solid #b1b0b0', borderRadius:5, fontSize: 25, width: 300, height: 40,
                     padding: '0px 4px', boxShadow: 'inset 0px 0px 3px #d3d3d3'},
    dashboardHeader:{fontSize:'x-large', color: muiTheme.palette.subHeaderColor, fontWeight:500,
                        lineHeight:'0px',verticalAlign:'sub', paddingLeft:20},
    dashboardMenuList:{display: 'inline-block', float: 'left', margin: '10px 0px 16px 0px'},
    menuDisabled:   {backgroundColor:'#EAEAEAFF',padding:'0px 10px', color:'#969696FF', border:'0px 0px 1px 0px red'},
    menuNav:        {color:'#6C6C6CFF'},
    account:        {lineHeight:'25px', color:muiTheme.palette.currency}
};

export default Styles;
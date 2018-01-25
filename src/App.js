import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './muiTheme.js';
import SplitWise from './SplitWise.js';
import Snackbar from 'material-ui/Snackbar';
/*** change logged state to  false ***/
//login/signup has a separate 'signupLogin: 0/1' because there is interchangable tabs user can go independent
//of app state on start up i.e. when user is not logged in
//page 0 default welcome page from where user gets into app login/signup options
//page1 is the base page : Dashboard if logged in or else show login/signup

class App extends Component{
    constructor(){
        super();
        // If you have the auth token saved in offline storage
        // var authToken = window.localStorage.getItem('HASURA_AUTH_TOKEN');
        // headers = { "Authorization" : "Bearer " + authToken }
        this.state =    { page:1 , signupLogin: 0, logged: false, err: 0, errorOpen: false};
        //cookie.load("onboarded")
        this.user  =    { username: '', avatar: ''};

        this.account =  { totalBalance: 10, youOwe: 20, youAreOwed: 30};
        this.users =    { 1:'user 1', 2:'user 2', 3:'user 3', 4:'user 4', 5:'user 5', 6:'user 6', 7:'user 7'};
        this.friends =  { 1:'friend 1', 2:'friend 2', 3:'friend 3', 4:'friend 4'};
        this.groups =   { 1:'group  1', 2:'group  2', 3:'group  3'};
        this.log =      { 1:{'name':'Expense name 1','group':'group 1','year':2017,'month':'DEC','day':25,
                            'paidBy':'friend 1',paid:14,'lentBy':'friend 1','lent':14},
                          2:{'name':'Expense name 2','group':'group 2','year':2017,'month':'DEC','day':31,
                            'paidBy':'friend 1',paid:84,'lentBy':'friend 2','lent':42},
                          3:{'name':'Expense name 3','group':'group 1','year':2018,'month':'JAN','day':31,
                            'paidBy':'friend 2',paid:55,'lentBy':'friend 2','lent':55},
                          4:{'name':'Expense name 1','group':'group 1','year':2017,'month':'DEC','day':25,
                            'paidBy':'friend 1',paid:14,'lentBy':'friend 1','lent':14},
                        };
        this.demo =     { username: 'Rounak Polley',email: 'abc@def.ghi', password: 'ijkl'};

        this.error.bind(this);
        this.setCookie.bind(this);
        this.getCookie.bind(this);
    }
    componentWillMount(){
		var userCookie   = this.getCookie("username");
		var loggedCookie = this.getCookie("user_logged");
		if(loggedCookie){
			this.setState({logged:true});
			//that.state.auth = true;
	        this.user.username = userCookie;
		}
    }
    //0 : Signup
    //0 : no error, 1 : wrong email format (client side), 2 : wrong email/password, 3 : empty textfields
    onTitleClick(){
        this.setState({page:0});
        console.log(this.state.page);
    }
    signupPage(){   this.setState({signupLogin: 0});    }
    loginPage(){    this.setState({signupLogin: 1});    }
    
    ValidateEmail(mail)   
    {  
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))  {  return (true);  }   
        return (false);  
    }  
    error = (val) => {
        this.setState({ errorOpen: true});
        this.setState({err: val}, function(){console.log("error in app.js - "+this.state.err);});
    };
    
    handleError1Click = () => {
        this.setState({errorOpen: false});
    };
    handleError2Click = () => {
        this.setState({errorOpen: false});
        alert('Forgotten Password : This functionality is still in development');
    };
    handleErrorRequestClose = () => {
        this.setState({errorOpen: false});
    };
    signup = (newUser) => {
        console.log(newUser);
        if((newUser.username==='')||(newUser.email==='')||(newUser.password==='')){
            this.error(3);
        }
        else if(!this.ValidateEmail(newUser.email)){
            this.error(1);
        }
        else{
            var fetchAction =  require('node-fetch');
            var url = "https://data.bathtub62.hasura-app.io/v1/query";
            var requestOptions = {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                }
            };
            var body = {
                "type": "insert",
                "args": {
                    "table": "Users",
                    "objects": [
                        {
                            "user_owes": "0",
                            "user_owed": "0",
                            "username": newUser.username,
                            "email": newUser.email,
                            "password": newUser.password,
                            "total_balance": "0"
                        }
                    ]
                }
            };
            requestOptions.body = JSON.stringify(body);
            fetchAction(url, requestOptions)
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                console.log(result);
            })
            .catch(function(error) {
                console.log('Request Failed:' + error);
            });
            console.log('saved new-user credentials');
            //goto login page (values are already copied)
            this.setState({signupLogin: 1});   
        }
    };

    login = (authUser) => {        
        console.log(authUser);
        var fetchAction =  require('node-fetch');
        var url = "https://data.bathtub62.hasura-app.io/v1/query";
        // If you have the auth token saved in offline storage
        // var authToken = window.localStorage.getItem('HASURA_AUTH_TOKEN');
        // headers = { "Authorization" : "Bearer " + authToken }
        var that = this;
        var requestOptions = {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": "Bearer e738169cbb0ebbf3c89f96881ed6e549a3c79977bbff1f97"
            }
        };
        var body = {
            "type": "bulk",
            "args": [
                {
                    "type": "select",
                    "args": {
                        "table": "Users",
                        "columns": [
                            "username"
                        ],
                        "where": {
                            "email": {
                                "$like": authUser.username
                            },
                            "password": {
                                "$like": authUser.password
                            },
                        }
                    }
                }
            ]
        };
        requestOptions.body = JSON.stringify(body);
        fetchAction(url, requestOptions)
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            console.log(result[0][0].username);
	        that.state.auth = true;
	        that.user.username = result[0][0].username;
	        console.log('authenticated user');
	        that.setCookie("username",that.user.username,1);
	        that.setCookie("user_logged",true,1);
	        that.setState({logged: true});
	        //cookie.save("user_logged", true, {path: "/"});
        })
        .catch(function(error) {
            console.log('Request Failed:' + error);
            that.error(2);
        });
        //this.setState({page: 2});   
    };
    logout(){
    	this.setCookie("username","",0);
    	this.setCookie("user_logged",false,0);
    	this.setState({logged: false, signupLogin: 1});     
    };

    addBill = (billDetails) => {
        console.log(billDetails);
    };
    addFriends = (newFriends) => {
        console.log(newFriends);
    };
    addGroup = (groupName, groupMembers) => {
        console.log(groupName);
        console.log(groupMembers);
        if(groupMembers.length <= 0){
            this.error(4);
        }
    };

    setCookie = (cname, cvalue, exdays) => {
	    var d = new Date();
	    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	    var expires = "expires="+d.toUTCString();
	    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	};
	getCookie = (cname) => {
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i = 0; i < ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0) == ' ') {
	            c = c.substring(1);
	        }
	        if (c.indexOf(name) == 0) {
	            return c.substring(name.length, c.length);
	        }
	    }
	    return "";
	};

    render(){
        return(
            <div className="App">
                <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <SplitWise  page={this.state.page}
                        onTitleClick={this.onTitleClick.bind(this)} signupLogin={this.state.signupLogin}
                        signupPage={this.signupPage.bind(this)}     loginPage={this.loginPage.bind(this)}
                        signup={this.signup.bind(this)}             login={this.login.bind(this)}               
                        logged={this.state.logged}                  username={this.user.username}
                        logout={this.logout.bind(this)}             account={this.account}
                        users={this.users}
                        friends={this.friends}                      groups={this.groups}
                        log={this.log}                              
                        addBill={this.addBill.bind(this)}
                        addGroup={this.addGroup.bind(this)}         addFriends={this.addFriends.bind(this)}
                    />
                <div className="error-display">
                    {(this.state.err===1)
                        ?
                            <Snackbar
                                open={this.state.errorOpen}
                                message="Please enter email in correct format"
                                action="Try Again"
                                autoHideDuration={5000}
                                onActionClick={this.handleError1Click.bind(this)}
                                onRequestClose={this.handleErrorRequestClose.bind(this)}
                            />
                        :   <span></span>
                        }
                        {(this.state.err===2)
                        ?
                            <Snackbar
                                open={this.state.errorOpen}
                                message="Whoops! We couldn’t find an account for that email address and password."
                                action="Resolve"
                                autoHideDuration={5000}
                                onActionClick={this.handleError2Click.bind(this)}
                                onRequestClose={this.handleErrorRequestClose.bind(this)}
                            />
                        :   <span></span>
                        }
                        {(this.state.err===3)
                        ?
                            <Snackbar
                                open={this.state.errorOpen}
                                message="All fields are required"
                                action="Try Again"
                                autoHideDuration={5000}
                                onActionClick={this.handleError1Click.bind(this)}
                                onRequestClose={this.handleErrorRequestClose.bind(this)}
                            />
                        :   <span></span>
                        }

                        {(this.state.err===4)
                        ?
                            <Snackbar
                                open={this.state.errorOpen}
                                message="You cannot form group without adding friends"
                                action="ok"
                                autoHideDuration={5000}
                                onActionClick={this.handleError1Click.bind(this)}
                                onRequestClose={this.handleErrorRequestClose.bind(this)}
                            />
                        :   <span></span>
                        }
                </div>                    
                </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;

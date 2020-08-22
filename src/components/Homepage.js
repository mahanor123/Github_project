import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Github_logo from './download.png';
import axios from 'axios';


import UserRepos from "./Userrepos"
const Styles = (theme) => ({
    container: {
        position: 'absolute',
        top: '20%',
        left: '30%',[theme.breakpoints.down('xs')]: {left:"0%"
    }
        
    },
    logo: {

        paddingLeft: '25%'

    },
    inputbox: {
        
        margin: theme.spacing(1),
        width: '70ch',

     [theme.breakpoints.down('sm')]: {
        
        width: '20ch',
    },
    [theme.breakpoints.only('md')]: {
       
        margin: theme.spacing(1),
        width: '50ch',
    },
    
},
    submitbtn: {

        margin: theme.spacing(1),
        padding: theme.spacing(2),

        width: '25ch',[theme.breakpoints.down('sm')]: {width:"15ch"
    }

    },
});

class BasicForm extends React.Component {
    constructor(props) {
        super()
        this.state = ({ Text: "", GithubProfile: "", UserRepos: "" ,showDetail:false})
        
    }
    handleInputChange = e => {
    
        const letterNumber = /^[0-9a-zA-Z]+$/;
        
        if((e.target.value === '' || letterNumber.test(e.target.value))) {
            this.setState({ Text: e.target.value })
        }

        console.log(this.state.Text)

    };
    handleSubmit = async e => {
        e.preventDefault();
       
        const response = await axios.get('https://api.github.com/search/users', {
            params: {
                q: this.state.Text,
            },

        });
        const resp = await axios.get(`https://api.github.com/users/${this.state.Text}/repos`);
        console.log(resp)
        this.setState({ GithubProfile: response.data.items, UserRepos: resp.data,showDetail:true})

    }
    render() {
        const { classes } = this.props

        return (
            <div>
            {!this.state.showDetail ? 
            <div className={classes.container}>
                <div className={classes.logo}>
                    <img src={Github_logo} alt="logo" />
                </div>
                <br />
               
                <form noValidate autoComplete="off" >
                
                
                    <TextField id="outlined-basic" className={classes.inputbox} label="Username" variant="outlined"
                        onChange={this.handleInputChange} value={this.state.Text} InputProps={{
                            endAdornment: (
                                <SearchIcon />
                                
                                  
                                
                            )
                          }}/>
                    <Button variant="contained" color="primary" className={classes.submitbtn}
                        onClick={this.handleSubmit} disabled={!this.state.Text} >
                        Submit
      </Button>
      
                </form>
                
                </div>
             :<UserRepos {...this.state} />}
            </div>
        );
    }
}
export default (withStyles)(Styles)(BasicForm);

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import Buttons from "./button"
const Styles = (theme) => ({
    container: {
        display: "flex",

        position: 'absolute',
        left: "20%",
        [theme.breakpoints.up('md')]: {
            display: "flex",
            top: "10%",
            position: 'absolute',
            left: "2%"
        },
        [theme.breakpoints.up('lg')]: {
            display: "flex",
            top: "10%",
            position: 'absolute',
            left: "20%"
        },
    },
    profilecontainer: {
        height: 500,

    },
    userprofile: {

        width: '300px',
        top: "30%",


    },
    username: {

        color: '#666',
        fontSize: "22px"
    },
    viewbtn: {

        fontSize: "18px",
        padding: theme.spacing(1),


        backgroundColor: "#eff3f6",

        width: '30ch',


    },
    repocard: {
        marginLeft: '50px', margin: theme.spacing(1),

    },
    repocards: {
        width: '80ch', marginLeft: '50px', margin: theme.spacing(1)
    },
    buttondisplay: {
        display: "flex"


    },
    projectinfo: {
        width: "60%",

    },
    projectname: {
        fontSize: '20px', textDecoration: 'none', color: "#0366d6"
    },
    projectlink: {

        fontSize: '16px',
        lineHeight: '0',
        textDecoration: 'none',
        color: 'black',

    },

    projectlanguage: {
        fontSize: '15px'
    },
    projectdescription: {
        fontSize: '16px'
    },
    watchers: {
        backgroundColor: '#d9534f',
        padding: '3px 10px 3px 10px'
    },
    star: {
        backgroundColor: '#4CAF50 ',
        padding: '3px 10px 3px 10px'
    },
    fork: {

        backgroundColor: '#0275d8',
        padding: '3px 10px 3px 10px'


    },
    viewlink: {
        textDecoration: "none",

    },




    starbtn: {
        marginLeft: "150px",
        [theme.breakpoints.only('md')]: {
            marginLeft: "1px",
        }
    },

    divider: {
        backgroundColor: "green",
        width: "210px",
        marginTop: "20px"

    },
});
class GithubRepo extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isOpen: false }

    }
    toggle = (e) => {
        console.log(e)
        this.setState(
            {
                isOpen: !this.state.isOpen
            });
    }

    render() {
        const { classes } = this.props
        const { GithubProfile, UserRepos } = this.props;
        console.log(GithubProfile)
        return (
            <div className={classes.container}>
                {GithubProfile.map(profile => (

                    <div className={classes.profilecontainer}>
                        <img alt="thumbnail" src={profile.avatar_url} className={classes.userprofile} />
                        <p className={classes.username}>{profile.login}</p>


                        <a href={profile.html_url} className={classes.viewlink}>
                            <Button
                                variant="contained"
                                className={classes.viewbtn}>
                                view
                    </Button>
                        </a>

                    </div>
                ))}
                <div className={classes.cardcontainer}>

                    {UserRepos.map(profile => (
                        <div className={classes.repocards}>
                            <Card className={classes.repocard}>
                                <CardContent >
                                    <Typography color="textSecondary" gutterBottom>

                                        <div className={classes.buttondisplay}>
                                            <div className={classes.projectinfo}>
                                                <a
                                                    className={classes.projectname}
                                                    href={profile.html_url}

                                                    target="_blank"
                                                    rel="noopener noreferrer">
                                                    {profile.name}
                                                </a>
                                                <p>
                                                    <a
                                                        href={profile.html_url}
                                                        className={classes.projectlink}
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                        {profile.full_name}
                                                    </a>
                                                </p>
                                                <Typography className={classes.projectdescription}>{profile.description}</Typography>


                                                <Typography className={classes.projectlanguage}>{profile.language}</Typography>

                                            </div>


                                            <div className={classes.starbtn} >
                                                <Buttons

                                                    name={this.state.isOpen ? "Unstar" : "Star"}
                                                    toggle={this.toggle}
                                                    className={classes.starbtns} />
                                                <Divider className={classes.divider} />
                                                <div style={{
                                                    marginLeft: "10px",
                                                    marginTop: "30px"


                                                }}>
                                                    <span className={classes.fork}
                                                    >
                                                        {profile.forks_count}Fork
									</span>
                                                    <span className={classes.watchers}>
                                                        {profile.watchers_count}watchers
									</span>
                                                    <span className={classes.star}>
                                                        {profile.stargazers_count}star
									</span>
                                                </div>

                                            </div>
                                        </div>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
export default (withStyles)(Styles)(GithubRepo);
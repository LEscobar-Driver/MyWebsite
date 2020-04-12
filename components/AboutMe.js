import React, { Component } from 'react';
import { Grid, Image, List } from 'semantic-ui-react';
import { Link } from '../routes';


class Aboutme extends Component {
    render() {
        return(
            <Grid celled> 
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Image src="../static/assets/aboutMe.jpg"/>
                    </Grid.Column>

                    <Grid.Column width={9}>
                        <p style={{"color":"white", "font-size":"27px", "font-weight":"bold"}}>
                            Hi There
                            <span style={{"color":"red"}}>!</span>
                            <br></br> 
                            <span style={{"padding":"15px"}}></span> I
                            <span style={{"color":"red"}}>'</span>
                            m Luis
                            <span style={{"color":"red"}}>.</span>
                            <br></br>                         
                        </p>
                        <p>
                            <span style={{"color":"white", "font-size":"17px"}}>I am a freelance 
                            <span style={{"color":"red"}}> Blockchain Developer </span> and a professional 
                            <span style={{"color":"red"}}> Software Engineer </span>
                            <span style={{"color":"white"}}> / </span>
                            <span style={{"color":"red"}}> SDET</span>
                            </span>
                        </p>
                    </Grid.Column>

                    <Grid.Column width={4}>
                        <List style={{"color":"white", marginTop: '50px'}} as="h2">
                            <List.Item>
                                Current Location : <span style={{"color":"green"}}>California</span>
                            </List.Item>
                            <List.Item>
                                Phone : <span style={{"color":"green"}}>714-222-8402</span>
                            </List.Item>
                            <List.Item>
                                Email : <span style={{"color":"green"}}>lfescoba@uci.edu</span>
                            </List.Item>
                            <List.Item>
                                Git : 
                                <Link route="https://github.com/LEscobar-Driver">
                                    <a target="_blank" style={{"color":"green"}}> github.com/LEscobar-Driver</a>
                                </Link>
                            </List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}
export default Aboutme;
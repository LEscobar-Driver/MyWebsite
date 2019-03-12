import React from 'react';
import { Image, Card, List, Grid } from 'semantic-ui-react';
import { Link } from '../routes';


export default () => {
    return(
       <Grid divided="vertically">
            <Grid.Row columns={4}>
                <Grid.Column>
                    <Card fluid>
                        <Image size="small" centered src="../static/assets/authenticating.png"></Image>
                        <Card.Content>
                            <Card.Header>Authenticating Test Suite</Card.Header>
                            <Card.Meta>Python unittest, xmlrunner, requests, & Docker</Card.Meta>
                            <Card.Description>Unittest suite testing api endpoints.</Card.Description>
                            <div style={{ marginTop: '10px' }}>
                                <Link route="https://github.com/LEscobar-Driver/Authenticating/tree/master/src/qa">
                                    <a target="_blank">Source Code</a>
                                </Link>
                            </div>
                        </Card.Content>
                    </Card>
                </Grid.Column>

                <Grid.Column>
                    <List bulleted style={{"color":"white"}} as="h2">
                        <List.Item>
                            Professional python automated unittest suite with xmlrunner. 
                        </List.Item>
                        <List.Item>
                            Dockerized python unittest scripts.
                        </List.Item>
                        <List.Item>
                            A suite of 22 unittests, testing api endpoints from other devs.
                        </List.Item>
                    </List>

                    <p style={{"color":"white"}}>
                        Some of my professional work. These automated python unittest are dockerized to fit 
                        into CI (continuous integration) lifecycle. The purpose of these endpoints tests are to 
                        ensure that these inhouse picture recognition endpoints perform as expected. Includes 22 unittest 
                        which hit our developement end points. Data to run unittest has been excluded for 
                        security concerns. 
                    </p>
                </Grid.Column>

                <Grid.Column>
                </Grid.Column>

                <Grid.Column>                    
                </Grid.Column>
            </Grid.Row>


            <Grid.Row columns={4}>
                <Grid.Column>
                </Grid.Column>

                <Grid.Column>                    
                </Grid.Column>

                <Grid.Column>
                    <Card fluid>
                        <Image size="medium" centered src="../static/assets/fliptix.png"></Image>
                        <Card.Content>
                            <Card.Header>FlipTix Test Suite</Card.Header>
                            <Card.Meta>Python unittest, xmlrunner, requets, & Docker</Card.Meta>
                            <Card.Description>Unittest suite testing api endpoints.</Card.Description>
                            <div style={{ marginTop: '10px' }}>
                                <Link route="https://github.com/LEscobar-Driver/FlipTix/tree/master/src/qa">
                                    <a target="_blank">Source Code</a>
                                </Link>
                            </div>
                        </Card.Content>
                    </Card>
                </Grid.Column>

                <Grid.Column>
                    <List bulleted style={{"color":"white"}} as="h2">
                        <List.Item>
                            Professional python automated unittest suite. 
                        </List.Item>
                        <List.Item>
                            Dockerized python unittest.
                        </List.Item>
                        <List.Item>
                            A suite of 10 unittests, testing api endpoints from other devs.
                        </List.Item>
                    </List>

                    <p style={{"color":"white"}}>
                        Some of my professional work. These automated python unittest are dockerized to fit 
                        into CI (continuous integration) lifecycle. These unittest were developed by me to 
                        test our inhouse fliptix application which we engineered for a client. The app allows 
                        users to purchase tickets and resell them. 
                    </p>
                </Grid.Column>
            </Grid.Row>
       </Grid>
    );  
};
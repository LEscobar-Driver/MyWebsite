import React from 'react';
import { Image, Card, List, Grid } from 'semantic-ui-react';
import { Link } from '../routes';


export default () => {
    return(
       <Grid divided="vertically">
            <Grid.Row columns={4}>
                <Grid.Column>
                    <Card fluid>
                        <Image size="small" centered src="../static/assets/headless.png"></Image>
                        <Card.Content>
                            <Card.Header>Serverless, Selenium, & aws Lambda Layers</Card.Header>
                            <Card.Meta>Headless Chromium, Selenium, & requirement.txt layers</Card.Meta>
                            <Card.Description>Makefile, scripts, and serverless framework yaml files allow a user to deploy lambda layers which contain selenium, headless chromium, & all requirement.txt dependencies.</Card.Description>
                            <div style={{ marginTop: '10px' }}>
                                <Link route="https://github.com/LEscobar-Driver/Code/tree/master/serverless/layers">
                                    <a target="_blank">Source Code</a>
                                </Link>
                            </div>
                        </Card.Content>
                    </Card>
                </Grid.Column>

                <Grid.Column>
                    <List bulleted style={{"color":"white"}} as="h2">
                        <List.Item>
                            Serverless Framework.
                        </List.Item>
                        <List.Item>
                            AWS Lambda Layers.
                        </List.Item>
                        <List.Item>
                            Selenium layer to attach to lamda functions.
                        </List.Item>
                        <List.Item>
                            Headless Chromium layer to attach to lamda functions.
                        </List.Item>
                        <List.Item>
                            Requirement.txt dependencies layer to attach to lamda functions.
                        </List.Item>
                    </List>

                    <p style={{"color":"white"}}>
                        Serverless framework yaml files which construct lambda layers. These lambda layers allow lambda functions to 
                        execute code on websites by simply importing selenium.webdriver.
                    </p>
                </Grid.Column>

                <Grid.Column>
                </Grid.Column>

                <Grid.Column>
                </Grid.Column>

                <Grid.Column>
                </Grid.Column>

                <Grid.Column>
                </Grid.Column>

                <Grid.Column>
                    <Card fluid>
                        <Image size="small" centered src="../static/assets/saas.jpg"></Image>
                        <Card.Content>
                            <Card.Header>Serverless, API Gateway, Lambda, SNS, &  Lambda Layers</Card.Header>
                            <Card.Meta>Serverless Stack</Card.Meta>
                            <Card.Description>Makefile to build/deploy serverless aws stack. Allows SNS to trigger a lambda and api gateway to trigger different lambdas.</Card.Description>
                            <div style={{ marginTop: '10px' }}>
                                <Link route="https://github.com/LEscobar-Driver/Code/tree/master/serverless/lambda">
                                    <a target="_blank">Source Code</a>
                                </Link>
                            </div>
                        </Card.Content>
                    </Card>
                </Grid.Column>

                <Grid.Column>
                    <List bulleted style={{"color":"white"}} as="h2">
                        <List.Item>
                            Serverless Framework.
                        </List.Item>
                        <List.Item>
                            AWS Lambda & Lambda Layers.
                        </List.Item>
                        <List.Item>
                            AWS SNS.
                        </List.Item>
                        <List.Item>
                            AWS API Gateway.
                        </List.Item>
                        <List.Item>
                            Takes layer from project above and attached to these lambdas.
                        </List.Item>
                    </List>

                    <p style={{"color":"white"}}>
                        Serverless framework yaml files which construct the entire serverless infrastructure.
                    </p>
                </Grid.Column>
            </Grid.Row>
       </Grid>
    );
};
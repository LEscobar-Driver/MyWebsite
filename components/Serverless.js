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
                            <Card.Header>Web Scrapping Lambda Layers</Card.Header>
                            <Card.Meta>Headless Chromium, Selenium, & AWS</Card.Meta>
                            <Card.Description>Project constructs Headless Chromium, Selenium, & requirement.txt lambda layers.</Card.Description>
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
                            AWS Powered.
                        </List.Item>
                        <List.Item>
                            Makefile execution.
                        </List.Item>
                    </List>

                    <p style={{"color":"white"}}>
                        Repository contains Makefile, scripts, and serverless framework yaml files which allow users to deploy lambda layers, making using Selenium & Headless Chronium in lambda functions as easy as attaching the layers.
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
                            <Card.Header>Serverless Stack</Card.Header>
                            <Card.Meta>S3, API Gateway, SNS, Lambda, Layers</Card.Meta>
                            <Card.Description>These lambdas use the layers from the project above. Allows for SNS & api gateway triggers of seperate lambdas.</Card.Description>
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
                            AWS Powered.
                        </List.Item>
                        <List.Item>
                            Makefile execution.
                        </List.Item>
                    </List>

                    <p style={{"color":"white"}}>
                        Two seperate lambdas with a suite of layers attached. One lambda is triggered by an SNS event and the other lambda is triggered by an api gateway event. Lambdas have full S3 permissions.
                    </p>
                </Grid.Column>

                <Grid.Column>
                    <Card fluid>
                        <Image size="small" centered src="../static/assets/slswebsite.jpg"></Image>
                        <Card.Content>
                            <Card.Header>Serverless Website</Card.Header>
                            <Card.Meta>S3, API Gateway, Route53, CloudFront, Full Stack</Card.Meta>
                            <Card.Description>A full stack serverless framework website hosted on AWS.</Card.Description>
                            <div style={{ marginTop: '10px' }}>
                                <Link route="https://github.com/LEscobar-Driver/Code/tree/master/serverless/sls-website">
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
                            AWS Powered.
                        </List.Item>
                        <List.Item>
                            HTML, CSS, AJAX front end.
                        </List.Item>
                        <List.Item>
                            Javascript backend.
                        </List.Item>
                        <List.Item>
                            NPM execution.
                        </List.Item>
                        <List.Item>
                            <Link route="https://www.luisdriver.com/">
                                <a target="_blank">Website Link</a>
                            </Link>
                        </List.Item>
                    </List>

                    <p style={{"color":"white"}}>
                        Allows users to shorten any valid url, displays some of the users internet information, & displays the price of some cryptocurrencies.
                    </p>
                </Grid.Column>

                <Grid.Column>
                </Grid.Column>

                <Grid.Column>
                </Grid.Column>
            </Grid.Row>
       </Grid>
    );
};
import React, { Component } from 'react';
import { Grid, Image, List } from 'semantic-ui-react';
import Link from 'next/link';

// Coma functionality
const c = ( <span style={{"color":"white"}}>,</span> );
const p = ( <span style={{"color":"white"}}>.</span> );

class Aboutme extends Component {
    render() {
        return(
            <Grid celled> 
                <Grid.Row>
                    <Grid.Column width={12}>
                        <span style={{"color":"white", "padding":"250px", "font-size":"27px", "font-weight":"bold"}}>Set of Skills & Experience
                        <span style={{"color":"green"}}>.</span></span>
                        <List style={{"color":"white"}} as="h2">
                            <List.Item>
                                Languages : <span style={{"color":"green"}}>Python{c} Javascript{c} Node{c} React{c} HTML{c} SQL{c} Shell{p}</span>
                            </List.Item>
                            <List.Item></List.Item>
                            <List.Item>
                                AWS Services : <span style={{"color":"green"}}>Serverless Framework{c} Lambda{c} Layers{c} API Gateway{c} SNS{c} SQS{c} S3{c} EC2{c} Cloud9{c} Cloudformation{c} Cloudwatch{c} IAM{p}</span>
                            </List.Item>
                            <List.Item></List.Item>                            
                            <List.Item>
                                Software Tools : <span style={{"color":"green"}}>CircleCi{c} Jenkins{c} Trello{c} Aha{c} JIRA{c} Postman{c} Git{c} GitKraken{c} SourceTree{c} cli{p}</span>
                            </List.Item>
                            <List.Item></List.Item>
                            <List.Item>
                                More Tools : <span style={{"color":"green"}}>Docker{c} Unittest{c} Pytest{c} Mocha{c} Selenium{c} Headless Chromium{c} Docker{p}</span>
                            </List.Item>
                            <List.Item></List.Item>
                            <List.Item>
                                Blockchain Tools : <span style={{"color":"green"}}>Open Zepplin{c} Ganache{c} Truffle{c} Remix{c} Metamask{c} Infura{p}</span>
                            </List.Item>
                            <List.Item></List.Item>
                            <List.Item>
                                Resume PDF : 
                                <Link href="/pdf">
                                    <a target="_blank" style={{"color":"green"}}>PDF Resume</a>
                                </Link>
                            </List.Item>
                        </List>
                    </Grid.Column>

                    <Grid.Column width={4}>
                        <Image style={{"marginTop":"12px"}} size="large" src="../static/assets/skills.png"/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}
export default Aboutme;
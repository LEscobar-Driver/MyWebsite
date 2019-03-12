import React, { Component } from 'react';
import { Grid, Image, List } from 'semantic-ui-react';


class Aboutme extends Component {

    render() {
        return(
            <Grid celled> 
                <Grid.Row>
                    <Grid.Column width={12}>
                        <span style={{"color":"white", "padding":"400px", "font-size":"27px", "font-weight":"bold"}}>Skills
                        <span style={{"color":"green"}}>.</span></span>
                        <List style={{"color":"white"}} as="h2">
                            <List.Item>
                                Software Efficiency Tools : <span style={{"color":"green"}}>Trello, Aha, JIRA.</span>
                            </List.Item>
                            <List.Item>
                                Professional QA Tools : <span style={{"color":"green"}}>Python Unittest, Selenium, Requests, Docker.</span>
                            </List.Item>
                            <List.Item>
                                Blockchain Tools : <span style={{"color":"green"}}>Open Zepplin, Ganache, Truffle, Remix, Metamask, Infura, Mocha.</span>
                            </List.Item>
                            <List.Item>
                                Programming Proficiencies : <span style={{"color":"green"}}>C++, NodeJS, JavaScript, Python, Solidity, React, JSX, HTML, SQL, Shell.</span>
                            </List.Item>
                            <List.Item>
                                Misc. Software Tools : <span style={{"color":"green"}}>Jenkins, Linux, GitKraken, SourceTree, CMD line.</span>
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
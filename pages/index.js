import React, {Component} from 'react';
import { Card, Button, Popup, Image, Dimmer, Header, Icon, Grid, List } from 'semantic-ui-react';
import Layout from '../components/Layout.js';
import { Link, Router } from '../routes';


class CampaignIndex extends Component {

    render() {
        return(
        <Layout>
            <div style={{"color":"white"}} as="h2" id="JS-Section">JS Section</div>

            <Grid divided="vertically">

                <Grid.Row columns={4}>
                    <Grid.Column>
                    </Grid.Column>

                    <Grid.Column>                    
                    </Grid.Column>

                    <Grid.Column>
                        <Card fluid>
                            <Image size="small" centered src="../static/assets/dragon.png"></Image>
                            <Card.Content>
                                <Card.Header>Dragon Stack</Card.Header>
                                <Card.Meta>Full stack project</Card.Meta>
                                <Card.Description>Users create accounts to collect dragons. Dragons can be traded, sold, & mated</Card.Description>
                                <div style={{ marginTop: '10px' }}>
                                    <Link route="https://github.com/LEscobar-Driver/DragonStack">
                                        <a target="_blank">Source Code</a>
                                    </Link>
                                </div>
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column>
                        <List bulleted style={{"color":"white"}} as="h2">
                            <List.Item>
                                Full stack application.
                            </List.Item>
                            <List.Item>
                                Nodejs, PostgreSQL, SQL, React, Redux, nodemon, babel.
                            </List.Item>
                            <List.Item>
                                Shell, HTML, JS, CSS.
                            </List.Item>
                            <List.Item>
                                Includes Restful API for users.
                            </List.Item>
                        </List>

                        <p style={{"color":"white"}}>
                            A full stack js application I built. Backend includes scipts to reset/configure sql db plus
                            db templates. Local host server runs on port 5000. Restful API to get any Dragon or a Dragons
                            generation breed status. 
                        </p>
                    </Grid.Column>
                </Grid.Row>


                <Grid.Row columns={4}>
                    <Grid.Column>
                        <Card fluid>
                            <Image src="../static/assets/dPen.png"></Image>
                            <Card.Content>
                                <Card.Header>Decentralized Kickstarter</Card.Header>
                                <Card.Meta>
                                    <Link route="https://decentalizedkickstarter.herokuapp.com">
                                        <a target="_blank">Website</a>
                                    </Link>
                                </Card.Meta>
                                <Card.Description>A decentralized kickstarter live on the rinkey testnet.</Card.Description>
                                <div style={{ marginTop: '10px' }}>
                                    <Link route="https://github.com/LEscobar-Driver/dKick">
                                        <a target="_blank">Source Code</a>
                                    </Link>
                                </div>
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column>
                        <List bulleted style={{"color":"white"}} as="h2">
                            <List.Item>
                                Full stack ethereum dapp.
                            </List.Item>
                            <List.Item>
                                Ethereum Smart contract back end.
                            </List.Item>
                            <List.Item>
                                React & Next js front end.
                            </List.Item>
                            <List.Item>
                                Live on Rinkeby testnet.
                            </List.Item>
                        </List>

                        <p style={{"color":"white"}}>
                            I built & expanded this decentralized application. Users can create
                            campaigns open to donations. Funds can only be withdrawn from campaigns
                            upon withdraw requests being voted on by the users who contributed funds.
                            A withdraw request must achieve 50% yes votes for funds to be withdrawn.
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
                            <Image size="small" centered src="../static/assets/cryptoZombies.png"></Image>
                            <Card.Content>
                                <Card.Header>Crypto Zombies</Card.Header>
                                <Card.Meta>cryptozombies.io</Card.Meta>
                                <Card.Description>An interactive code school that taught me now to program smart contracts</Card.Description>
                                <div style={{ marginTop: '10px' }}>
                                    <Link route="https://github.com/LEscobar-Driver/CryptoZombieRemix">
                                        <a target="_blank">Source Code</a>
                                    </Link>
                                </div>
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column>
                        <List bulleted style={{"color":"white"}} as="h2">
                            <List.Item>
                                Full stack ethereum dapp.
                            </List.Item>
                            <List.Item>
                                Ethereum Smart contract back end.
                            </List.Item>
                            <List.Item>
                                React & Next js front end.
                            </List.Item>
                            <List.Item>
                                Live on Rinkeby testnet.
                            </List.Item>
                        </List>

                        <p style={{"color":"white"}}>
                            I built & expanded this decentralized application. Users can create
                            campaigns open to donations. Funds can only be withdrawn from campaigns
                            upon withdraw requests being voted on by the users who contributed funds.
                            A withdraw request must achieve 50% yes votes for funds to be withdrawn.
                        </p>
                    </Grid.Column>
                </Grid.Row>


                <Grid.Row columns={4}>
                    <Grid.Column>
                    </Grid.Column>
                    
                    <Grid.Column>                    
                    </Grid.Column>
                    <Grid.Column>
                        <Image size="tiny" src="../static/assets/cplusplus.png"></Image>
                    </Grid.Column>

                    <Grid.Column>
                        <div id="C++-Section">c++ section</div>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={4}>
                    <Grid.Column>
                        <Image size="tiny" src="../static/assets/python.png"></Image>
                    </Grid.Column>

                    <Grid.Column>
                        <div id="Python-Section">Python Section</div>
                        <p>This is a test, how does it look</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>





            <Grid divided="vertically" stretched>
                <Grid.Row columns={4}>
                    <Grid.Column>
                        <Image size="tiny" src="../static/assets/sol.png"></Image>
                    </Grid.Column>

                    <Grid.Column>
                        <div id="Solidity-Section">sol section</div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            {/* <div id="JS Section">JS Section</div>

            <div id="Python Section">Python Section</div>

            <div id="C++ Section">c++ section</div>

            <div id="Solidity Section">sol section</div> */}

            

            <h3>In index.js</h3>
            <h3>In index.js</h3>
            <h3>In index.js</h3>
            <h3>In index.js</h3>
            <h3>In index.js</h3>
            <h3>In index.js</h3>
            <h3>In index.js</h3>
            <h3>In index.js</h3>
            <h3>In index.js</h3>
            <h3>In index.js</h3>
            <h3>In index.js</h3>
            <h3>In index.js</h3>
            <h3>In index.js</h3>
            <h3>In index.js</h3>
            <h3>In index.js</h3>
            <h3>In index.js</h3>
            <h3>In index.js</h3>
            <h3>In index.js</h3>
            <h3>In index.js</h3>
            <h3>In index.js</h3>
            <h3>In index.js</h3>
            <h3>In index.js</h3>
            <div id="middle">MIDDLE</div>

        </Layout>
        

        );
    }
}

export default CampaignIndex;
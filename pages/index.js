import React, {Component} from 'react';
import { Card, Button, Popup, Image, Dimmer, Header, Icon, Grid, List } from 'semantic-ui-react';
import Layout from '../components/Layout.js';
import { Link, Router } from '../routes';


class CampaignIndex extends Component {

    render() {
        return(
        <Layout>
            <div style={{"color":"white"}} as="h2" id="JS-Section">JS Section</div>
            <div style={{"color":"white"}} id="Python-Section">Python Section</div>
            <div style={{"color":"white"}} id="C++-Section">c++ section</div>
            <div style={{"color":"white"}} id="Solidity-Section">sol section</div>

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
                                <Card.Meta>Full stack dapp</Card.Meta>
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
                            <List.Item>
                                Live at https://decentalizedkickstarter.herokuapp.com
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
                                Finished beginner to intermediate smart contract course.
                            </List.Item>
                            <List.Item>
                                Using 7 smart contracts. 5 custom contracts.
                            </List.Item>
                            <List.Item>
                                Solidaty, Web3.js & HTML
                            </List.Item>
                        </List>

                        <p style={{"color":"white"}}>
                            Completed Making the Zombie Factory, Zombies Attack Their Victims, Advanced
                            Solidity Concepts, Zombie Battle System, ERC721 & Crypto-Collectibles, & 
                            App Front-ends & Web3.js
                        </p>
                    </Grid.Column>
                </Grid.Row>


                <Grid.Row columns={4}>
                    <Grid.Column>
                        <Card fluid>
                            <Image size="small" centered src="../static/assets/depthFirst.png"></Image>
                            <Card.Content>
                                <Card.Header>Recursive Depth-First Algorithm</Card.Header>
                                <Card.Meta>Tree based data structure</Card.Meta>
                                <Card.Description>This algorithm is capable of solving any MxM & NxM 2-D maze</Card.Description>
                                <div style={{ marginTop: '10px' }}>
                                    <Link route="https://github.com/LEscobar-Driver/Code/tree/master/CPlusPlus/Maze">
                                        <a target="_blank">Source Code</a>
                                    </Link>
                                </div>
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column>
                        <List bulleted style={{"color":"white"}} as="h2">
                            <List.Item>
                                C++ recursive depth-first algorithm.
                            </List.Item>
                            <List.Item>
                                Algorithm is designed to generated a perfect maze. Algoritm is also 
                                capable of solving any perfect maze. (Perfect means it has a solution)
                            </List.Item>
                            <List.Item>
                                Data structures and trees.
                            </List.Item>
                        </List>

                        <p style={{"color":"white"}}>
                            A project I completed at the University of California, Irvine. This C++ algorithm is a 
                            tree structure which is designed to traverse a structure depth-first recursively. It is
                            an extremely efficient algorithm. Zero memory leaks; I received a perfect score. 
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
                            <Image size="medium" src="../static/assets/AI.png"></Image>
                            <Card.Content>
                                <Card.Header>Othello AI</Card.Header>
                                <Card.Meta>Artificial Intelligence</Card.Meta>
                                <Card.Description>An AI capable of playing against another AI or a human</Card.Description>
                                <div style={{ marginTop: '10px' }}>
                                    <Link route="https://github.com/LEscobar-Driver/Code/tree/master/CPlusPlus/Othello%20AI">
                                        <a target="_blank">Source Code</a>
                                    </Link>
                                </div>
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column>
                        <List bulleted style={{"color":"white"}} as="h2">
                            <List.Item>
                                C++ tree structure.
                            </List.Item>
                            <List.Item>
                                Heuristic search is capable of an N depth search (user choice).
                            </List.Item>
                            <List.Item>
                                Algorithm employs a game tree heuristic search; the AI only generates the
                                part of the game tree that is logical given the opponents move. This makes
                                the AI extremely efficient at findings the next best choice. 
                            </List.Item>
                        </List>

                        <p style={{"color":"white"}}>
                            A project I completed at the University of California, Irvine. This C++ algorithm is a 
                            recursive run-time depth-first heuristic search algorithm which stores moves on the run time stack. 
                            This means that the ai reduces the amount of memory needed to choose a move. 
                            This negates the need to build and store a game tree as all possible moves are on the run-time
                            stack. It is an extremely efficient algorithm. 
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
        </Layout>
        );
    }
}
export default CampaignIndex;
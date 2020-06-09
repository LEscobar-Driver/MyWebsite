import React from 'react';
import { Image, Card, List, Grid } from 'semantic-ui-react';
import { Link } from '../routes';


export default () => {
    return(
        <Grid divided="vertically">

            <Grid.Row columns={4}> 
                <Grid.Column>
                    <Card fluid>
                        <Image src="../static/assets/dPen.png"></Image>
                        <Card.Content>
                            <Card.Header>Decentralized Kickstarter</Card.Header>
                            <Card.Meta>Full stack Decentralized Application</Card.Meta>
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
                            Project not maintained.
                        </List.Item>
                        <List.Item>
                            Ethereum Solidity Smart contract back end.
                        </List.Item>
                        <List.Item>
                            React & Next js front end.
                        </List.Item>
                        <List.Item>
                            Live on Rinkeby testnet.
                        </List.Item>
                        <List.Item>
                            <Link route="https://decentalizedkickstarter.herokuapp.com">
                                <a target="_blank">Website Link</a>
                            </Link>
                        </List.Item>
                    </List>

                    <p style={{"color":"white"}}>
                        I built & expanded this dapp. Users can create
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
                        <Image  src="../static/assets/blockchainAPI.png"></Image>
                        <Card.Content>
                            <Card.Header>PoW Python Blockchain</Card.Header>
                            <Card.Meta>Proof of Work Blockchain & API suite</Card.Meta>
                            <Card.Description>A Python PoW blockchain with an API suite.</Card.Description>
                            <div style={{ marginTop: '10px' }}>
                                <Link route="https://github.com/LEscobar-Driver/BlockchainProject">
                                    <a target="_blank">Source Code</a>
                                </Link>
                            </div>
                        </Card.Content>
                    </Card>
                </Grid.Column>

                <Grid.Column>
                    <List bulleted style={{"color":"white"}} as="h2">
                        <List.Item>
                            A PoW blockchain.
                        </List.Item>
                        <List.Item>
                            Powered by Python.
                        </List.Item>
                        <List.Item>
                            Includes a RESTful API suite.
                        </List.Item>
                        <List.Item>
                            Hashlib, uuid, flask, requests, & time.
                        </List.Item>
                    </List>

                    <p style={{"color":"white"}}>
                        A user can register a node, get the valid chain, resolve consensus conflicts,
                        generate new blocks, generate new transactions, get the last block, mine the chain, &
                        get the full blockchain.
                    </p>
                </Grid.Column>
            </Grid.Row>


            <Grid.Row columns={4}>
                <Grid.Column>
                    <Card fluid>
                        <Image size="small" centered src="../static/assets/lottery.png"></Image>
                        <Card.Content>
                            <Card.Header>Lottery Smart Contract</Card.Header>
                            <Card.Meta>Ethereum & Solidity</Card.Meta>
                            <Card.Description>Deployed to Rinkeby testnet.</Card.Description>
                            <div style={{ marginTop: '10px' }}>
                                <Link route="https://github.com/LEscobar-Driver/Lottery">
                                    <a target="_blank">Source Code</a>
                                </Link>
                            </div>
                        </Card.Content>
                    </Card>
                </Grid.Column>

                <Grid.Column>
                    <List bulleted style={{"color":"white"}} as="h2">
                        <List.Item>
                            Custom javascript compile & deploy scripts.
                        </List.Item>
                        <List.Item>
                            Deploys to Rinkeby testnet. 
                        </List.Item>
                        <List.Item>
                            Mocha test coverage included.
                        </List.Item>
                        <List.Item>
                            Metamask required.
                        </List.Item>
                    </List>

                    <p style={{"color":"white"}}>
                        Users must pay a .001 eth fee to enter the lottery. Randomness is deteremined by a 
                        keccak function which takes the current block difficulty, the current time, & and 
                        the amount of players in the lottery. The contract owner is the only address that can 
                        trigger the pickWinner() function. 
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
                            <Card.Description>An interactive code school that taught me now to program smart contracts.</Card.Description>
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
                            Using Ownable, Safemath, & ERC721 contracts from Open Zepplin.
                        </List.Item>
                        <List.Item>
                            Solidaty, Web3.js & HTML.
                        </List.Item>
                    </List>

                    <p style={{"color":"white"}}>
                        Completed courses include; Making the Zombie Factory, Zombies Attack Their Victims, Advanced
                        Solidity Concepts, Zombie Battle System, ERC721 & Crypto-Collectibles, & 
                        App Front-ends & Web3.js
                    </p>
                </Grid.Column>
            </Grid.Row>


            <Grid.Row columns={4}>
                <Grid.Column>
                    <Card fluid>
                        <Image src="../static/assets/cryptoMarket.png"></Image>
                        <Card.Content>
                            <Card.Header>CryptoCurrency Market API</Card.Header>
                            <Card.Meta>Bittrex Market Information</Card.Meta>
                            <Card.Description>Python code allows a user to get up to the second live information from Bittrex.</Card.Description>
                            <div style={{ marginTop: '10px' }}>
                                <Link route="https://github.com/LEscobar-Driver/Code/tree/master/Python/CryptoCurrencyAPIData">
                                    <a target="_blank">Source Code</a>
                                </Link>
                            </div>
                        </Card.Content>
                    </Card>
                </Grid.Column>

                <Grid.Column>
                    <List bulleted style={{"color":"white"}} as="h2">
                        <List.Item>
                            Backend python code that a user can use to get live market conditions.
                        </List.Item>
                        <List.Item>
                            Plugs into Bittrex market information.
                        </List.Item>
                        <List.Item>
                            Prints all market information request to a text file. Can be reconfigured to a bot easily.
                        </List.Item>
                    </List>

                    <p style={{"color":"white"}}>
                        I built this backend tool to allow a user to plug this into a trading bot. This allows
                        a user to extract live up to the second data from bittrex using Python. All information
                        is output into a text file. Uses RESTful apis. Security token removed for security.
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
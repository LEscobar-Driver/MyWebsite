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
                        <Card fluid>
                            <Image src="../static/assets/cryptoMarket.png"></Image>
                            <Card.Content>
                                <Card.Header>CryptoCurrency Market API</Card.Header>
                                <Card.Meta>Bittrex Market Information</Card.Meta>
                                <Card.Description>Python code allows a user to get up to the second live information</Card.Description>
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


                <Grid.Row columns={4}>
                    <Grid.Column>
                    </Grid.Column>

                    <Grid.Column>                    
                    </Grid.Column>

                    <Grid.Column>
                        <Card fluid>
                            <Image size="small" centered src="../static/assets/regex.png"></Image>
                            <Card.Content>
                                <Card.Header>Phone & Email Extractor</Card.Header>
                                <Card.Meta>pyperclip demonstration</Card.Meta>
                                <Card.Description>Python code allows a user to copy text with mouse and analysis for patterns</Card.Description>
                                <div style={{ marginTop: '10px' }}>
                                    <Link route="https://github.com/LEscobar-Driver/Code/blob/master/Python/Regex%20Mechanics/regexMainProject.py">
                                        <a target="_blank">Source Code</a>
                                    </Link>
                                </div>
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column>
                        <List bulleted style={{"color":"white"}} as="h2">
                            <List.Item>
                                Backend python code. pyperclip.
                            </List.Item>
                            <List.Item>
                                Pyperclip.
                            </List.Item>
                            <List.Item>
                                Extracts all emails and phone numbers.
                            </List.Item>
                        </List>

                        <p style={{"color":"white"}}>
                            A python backend tool I built to extract phone numbers and emails by copying text with a mouse
                            or keyboard. The user copies the text and runs this code. Any matches found are printed into
                            the console.
                        </p>
                    </Grid.Column>
                </Grid.Row>


                <Grid.Row columns={4}>
                    <Grid.Column>
                        <Card fluid>
                            <Image size="small" centered src="../static/assets/dict.png"></Image>
                            <Card.Content>
                                <Card.Header>Dictionary Word Finder</Card.Header>
                                <Card.Meta>difflib demonstration</Card.Meta>
                                <Card.Description>Returns definition of any word typed into console.</Card.Description>
                                <div style={{ marginTop: '10px' }}>
                                    <Link route="https://github.com/LEscobar-Driver/Code/blob/master/Python/DictWordFinder.py">
                                        <a target="_blank">Source Code</a>
                                    </Link>
                                </div>
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column>
                        <List bulleted style={{"color":"white"}} as="h2">
                            <List.Item>
                                Backend python code. Corrects for user misspelled words.
                            </List.Item>
                            <List.Item>
                                Difflib.
                            </List.Item>
                        </List>

                        <p style={{"color":"white"}}>
                            A python backend tool. A user runs the program through their console. If a word is misspelled the 
                            program returns 6 potential corrections with a 75% match. 
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
                            <Image size="small" centered src="../static/assets/earthquake.png"></Image>
                            <Card.Content>
                                <Card.Header>Global Earthquake Monthly</Card.Header>
                                <Card.Meta>USGS earthquake data feed</Card.Meta>
                                <Card.Description>Returns a list of all global earthquakes.</Card.Description>
                                <div style={{ marginTop: '10px' }}>
                                    <Link route="https://github.com/LEscobar-Driver/Code/blob/master/Python/EarthQuakeData.py">
                                        <a target="_blank">Source Code</a>
                                    </Link>
                                </div>
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column>
                        <List bulleted style={{"color":"white"}} as="h2">
                            <List.Item>
                                Backend python code. Uses the US Geological Service for its data feed.
                            </List.Item>
                            <List.Item>
                                Very simply and effective back end tool for seeing global earthquake data.
                            </List.Item>
                        </List>

                        <p style={{"color":"white"}}>
                            A user runs this backend code through their console. The code prints out small, medium, & 
                            large earthquakes in a clean format. 
                        </p>
                    </Grid.Column>
                </Grid.Row>


                <Grid.Row columns={4}>
                    <Grid.Column>
                        <Card fluid>
                            <Image size="small" centered src="../static/assets/facialRec.png"></Image>
                            <Card.Content>
                                <Card.Header>Facial Recognition</Card.Header>
                                <Card.Meta>Comparision between 2 images</Card.Meta>
                                <Card.Description>Returns T/F if the 2 images are the same person</Card.Description>
                                <div style={{ marginTop: '10px' }}>
                                    <Link route="https://github.com/LEscobar-Driver/Code/blob/master/Python/FacialRecognition.py">
                                        <a target="_blank">Source Code</a>
                                    </Link>
                                </div>
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column>
                        <List bulleted style={{"color":"white"}} as="h2">
                            <List.Item>
                                Backend python code.
                            </List.Item>
                            <List.Item>
                                Converts pictures into bytes for processing.
                            </List.Item>
                        </List>

                        <p style={{"color":"white"}}>
                            A user can download this program and upload images to compare for similarity. AuthKeys
                            have been removed for security. 
                        </p>
                    </Grid.Column>

                    <Grid.Column>
                    </Grid.Column>

                    <Grid.Column>                    
                    </Grid.Column>
                </Grid.Row>


                <Grid.Row columns={4}>
                    <Grid.Column>
                        <Card fluid>
                            <Image size="small" centered src="../static/assets/vol.png"></Image>
                            <Card.Content>
                                <Card.Header>Volcano Mapper</Card.Header>
                                <Card.Meta>Python Pandas & Folium</Card.Meta>
                                <Card.Description>Maps all North American Volcanoes according to height.</Card.Description>
                                <div style={{ marginTop: '10px' }}>
                                    <Link route="https://github.com/LEscobar-Driver/Code/blob/master/Python/NAVolcanoMap.py">
                                        <a target="_blank">Source Code</a>
                                    </Link>
                                </div>
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column>
                        <List bulleted style={{"color":"white"}} as="h2">
                            <List.Item>
                                Backend python code which uses Pandas & Folium. Run through a users console.
                            </List.Item>
                            <List.Item>
                                Returns a map which is saved on the users HD.
                            </List.Item>
                        </List>

                        <p style={{"color":"white"}}>
                            Returned map contains a descriptive google map of all 
                            NA volcanoes. The volcanoes are color coded according to their
                            height.
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
                            <Image size="small" centered src="../static/assets/password.png"></Image>
                            <Card.Content>
                                <Card.Header>Insecure Password Manager</Card.Header>
                                <Card.Meta>Python Pyperclip & CMD</Card.Meta>
                                <Card.Description>Returns a users password to their clipboard.</Card.Description>
                                <div style={{ marginTop: '10px' }}>
                                    <Link route="https://github.com/LEscobar-Driver/Code/blob/master/Python/PasswordManager.py">
                                        <a target="_blank">Source Code</a>
                                    </Link>
                                </div>
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column>
                        <List bulleted style={{"color":"white"}} as="h2">
                            <List.Item>
                                Backend python code which uses Pyperclip & the commond line.
                            </List.Item>
                            <List.Item>
                                The program returns the users password to their clipboard. Can save any length or 
                                amount of passwords.
                            </List.Item>
                        </List>

                        <p style={{"color":"white"}}>
                            A user runs this program through their command line. A user runs this program and types in 
                            the password they would like to received. The password is returned via the users clipboard.
                        </p>
                    </Grid.Column>
                </Grid.Row>


                <Grid.Row columns={4}>
                    <Grid.Column>
                        <Card fluid>
                            <Image size="small" centered src="../static/assets/fileFinder.png"></Image>
                            <Card.Content>
                                <Card.Header>File Finder</Card.Header>
                                <Card.Meta>Python - OS agnostic</Card.Meta>
                                <Card.Description>Allows the user to look for any file on any OS.</Card.Description>
                                <div style={{ marginTop: '10px' }}>
                                    <Link route="https://github.com/LEscobar-Driver/Code/blob/master/Python/file_search.py">
                                        <a target="_blank">Source Code</a>
                                    </Link>
                                </div>
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column>
                        <List bulleted style={{"color":"white"}} as="h2">
                            <List.Item>
                                Backend python code. User runs the program through their command line.
                            </List.Item>
                            <List.Item>
                                The program can run on Windows, Linux, or Apple prodcts. 
                            </List.Item>
                        </List>

                        <p style={{"color":"white"}}>
                            A user is able to search for any file on an OS. 
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
                            <Image size="small" centered src="../static/assets/weather.png"></Image>
                            <Card.Content>
                                <Card.Header>Weather App</Card.Header>
                                <Card.Meta>Python & SQLite3</Card.Meta>
                                <Card.Description>Uses openweathermap api to get live weather information.</Card.Description>
                                <div style={{ marginTop: '10px' }}>
                                    <Link route="https://github.com/LEscobar-Driver/Code/blob/master/Python/weatherForcast.py">
                                        <a target="_blank">Source Code</a>
                                    </Link>
                                </div>
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column>
                        <List bulleted style={{"color":"white"}} as="h2">
                            <List.Item>
                                Backend python code. Data is saved into SQLite3 db.
                            </List.Item>
                            <List.Item>
                                DB is saved locally. 
                            </List.Item>
                        </List>

                        <p style={{"color":"white"}}>
                            Returns expected forecast including wind information, cloud cover, visability,
                            humidity, location of forecast, sun rise time, future forcast in 3 hour increments, rain report,
                            snow report & the daily forcast.
                        </p>
                    </Grid.Column>
                </Grid.Row>


                <Grid.Row columns={4}>
                    <Grid.Column>
                        <Card fluid>
                            <Image  src="../static/assets/blockchainAPI.png"></Image>
                            <Card.Content>
                                <Card.Header>PoW Python Blockchain</Card.Header>
                                <Card.Meta>Proof of Work Blockchain & API</Card.Meta>
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
                                A PoW blockchain built from scratch.
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
                                Custom compile & deploy scripts.
                            </List.Item>
                            <List.Item>
                                Test coverage included.
                            </List.Item>
                        </List>

                        <p style={{"color":"white"}}>
                            Users must pay a .001 eth fee to enter the lottery. Randomness is deteremined by a 
                            keccak function which takes the current block difficulty, the current time, & and 
                            the amount of players in the lottery. The contract owner picks the winner. 
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
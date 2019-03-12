import React, {Component} from 'react';
import { Card, Button, Popup, Image, Dimmer, Header, Icon, Grid, List} from 'semantic-ui-react';
import Layout from '../components/Layout.js';
import { Link, Router } from '../routes';
import AboutMe from '../components/AboutMe.js';
import Skills from '../components/Skills.js';
import Qa from "../components/Qa.js";
import BlockChain from '../components/Blockchain.js';
import CPlusPlus from '../components/Cplusplus.js';

class CampaignIndex extends Component {

    render() {
        return(
        <Layout>
            <div style={{"color":"white"}} as="h2" id="JS-Section">JS Section</div>
            <div style={{"color":"white"}} id="Python-Section">Python Section</div>
            <div style={{"color":"white"}} id="C++-Section">c++ section</div>
            <div style={{"color":"white"}} id="Solidity-Section">sol section</div>

            <div id="AboutMe"></div>
            <AboutMe/>
            

            <div id="Skills" style={{"marginTop":"150px"}}></div>
            <Skills/>

            <Grid divided="vertically" >

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

            </Grid>
            

            <div id="Cplusplus"></div>
            <CPlusPlus/>

            <div id="Blockchain"></div>
            <BlockChain/>

            <div id="QA"></div>
            <Qa/>



        </Layout>
        );
    }
}
export default CampaignIndex;
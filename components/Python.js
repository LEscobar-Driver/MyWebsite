import React from 'react';
import { Image, Card, List, Grid } from 'semantic-ui-react';
import { Link } from '../routes';


export default () => {
    return(
       <Grid divided="vertically">

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
                            <Card.Description>Python code allows a user to copy text with mouse clipboard and analysis for patterns.</Card.Description>
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
                            Backend python code.
                        </List.Item>
                        <List.Item>
                            Pyperclip code demonstration.
                        </List.Item>
                        <List.Item>
                            Extracts all emails and phone numbers from clipboard.
                        </List.Item>
                    </List>

                    <p style={{"color":"white"}}>
                        A python backend tool I built to extract phone numbers and emails by copying text with a mouse
                        clipboard or keyboard. The user copies the text and runs this code. Any matches found are printed into
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
                            <Card.Meta>Python Difflib demonstration</Card.Meta>
                            <Card.Description>Returns definition of any word typed into console or best matches.</Card.Description>
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
                            Backend python code.
                        </List.Item>
                        <List.Item>
                            Corrects for user misspelled words. Returns 6 matches total with a 75% 
                            similarity rating.
                        </List.Item>
                        <List.Item>
                            Demonstrate how the difflib python library is a great tool for comparing text and 
                            producing reports.
                        </List.Item>
                    </List>

                    <p style={{"color":"white"}}>
                        A python backend tool. A user runs the program through their console. If a word is misspelled the 
                        program returns 6 potential corrections with a 75% match. Returns the definitoin of whatever 
                        word the user typed into their console.
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
                            Backend python code.
                        </List.Item>
                        <List.Item>
                            Uses the US Geological Service for its data feed. Demonstrates how to use public 
                            facing APIs to extract valuable data. Prints data into the user console in a clear 
                            format.
                        </List.Item>
                        <List.Item>
                            Compact and effective back end tool for seeing global earthquakes.
                        </List.Item>
                    </List>

                    <p style={{"color":"white"}}>
                        A user runs this backend code through their console. The code prints out small, medium, & 
                        large earthquakes that have occured in the current month. 
                    </p>
                </Grid.Column>
            </Grid.Row>


            <Grid.Row columns={4}>
                <Grid.Column>
                    <Card fluid>
                        <Image size="small" centered src="../static/assets/facialRec.png"></Image>
                        <Card.Content>
                            <Card.Header>Image Recognition</Card.Header>
                            <Card.Meta>Comparision between two images</Card.Meta>
                            <Card.Description>Python demonstration on how to work with images and compare images.</Card.Description>
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
                            Demonstrates how to work with images in Python. Image data conversion are done to process 
                            image data in a managable format. The user has the option to manipulate an images height & width.
                            User receives a reponse from an api that specializes in these comparisions.
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
                </Grid.Column>

                <Grid.Column>
                </Grid.Column>

                <Grid.Column>
                    <Card fluid>
                        <Image size="small" centered src="../static/assets/vol.png"></Image>
                        <Card.Content>
                            <Card.Header>Volcano Mapper</Card.Header>
                            <Card.Meta>Pandas & Folium demonstration</Card.Meta>
                            <Card.Description>Maps all North American Volcanoes and color codes them on a map.</Card.Description>
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
                            Backend python code.
                        </List.Item>
                        <List.Item>
                            Returns a map named "Map1.html" which the user can open and see all North American volcanoes 
                            categorized by their height in either green, orange, or red.
                        </List.Item>
                        <List.Item>
                            Uses Folium & Pandas.
                        </List.Item>
                    </List>

                    <p style={{"color":"white"}}>
                        A demonstration of how to use Folium & Pandas to generate interesting data driven maps.
                    </p>
                </Grid.Column>
            </Grid.Row>


            <Grid.Row columns={4}>
                <Grid.Column>
                    <Card fluid>
                        <Image size="small" centered src="../static/assets/password.png"></Image>
                        <Card.Content>
                            <Card.Header>Insecure Password Manager</Card.Header>
                            <Card.Meta> Pyperclip demonstration</Card.Meta>
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
                            Backend python code.
                        </List.Item>
                        <List.Item>
                            The program returns the users password to their clipboard. Can save any length or 
                            amount of passwords.
                        </List.Item>
                    </List>

                    <p style={{"color":"white"}}>
                        A user runs this program through their command line. A user runs this program like "python dict.py email".
                        In this case the password for "email" would be returned to the users clipboard. User can make use of this 
                        in secure computing environments (tails) where keys can get very big.
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
                        <Image size="small" centered src="../static/assets/fileFinder.png"></Image>
                        <Card.Content>
                            <Card.Header>File Finder</Card.Header>
                            <Card.Meta>OS agnostic file finder</Card.Meta>
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
                            Backend python code.
                        </List.Item>
                        <List.Item>
                            The program can run on Windows, Linux, or Apple prodcts. The program is run through 
                            the command line.
                        </List.Item>
                    </List>

                    <p style={{"color":"white"}}>
                        A user is able to search for any file on any OS. 
                    </p>
                </Grid.Column>
            </Grid.Row>


            <Grid.Row columns={4}>
                <Grid.Column>
                    <Card fluid>
                        <Image size="small" centered src="../static/assets/weather.png"></Image>
                        <Card.Content>
                            <Card.Header>Weather App</Card.Header>
                            <Card.Meta>Python, SQLite3, & public API</Card.Meta>
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
                            Backend python code.
                        </List.Item>
                        <List.Item>
                            Demonstration on how to register for a public API and extract data from it. Saves data on a 
                            local DB.
                        </List.Item>
                        <List.Item>
                            Uses OpenWeatherMap API.
                        </List.Item>
                    </List>

                    <p style={{"color":"white"}}>
                        Returns expected forecast including wind information, cloud cover, visability,
                        humidity, location of forecast, sun rise time, future forcast in 3 hour increments, rain report,
                        snow report & the daily forcast.
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
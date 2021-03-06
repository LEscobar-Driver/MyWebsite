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
                        <Image size="small" centered src="../static/assets/dragon.png"></Image>
                        <Card.Content>
                            <Card.Header>Dragon Stack</Card.Header>
                            <Card.Meta>Full stack JS project</Card.Meta>
                            <Card.Description>Users create accounts to collect dragons. Dragons can be traded, sold, & breed.</Card.Description>
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
                            Full stack.
                        </List.Item>
                        <List.Item>
                            Nodejs, PostgreSQL, React, Redux, nodemon, babel, Shell, HTML, JS, CSS.
                        </List.Item>
                        <List.Item>
                            Db tables and shell scripts.
                        </List.Item>
                        <List.Item>
                            REST API
                        </List.Item>
                    </List>

                    <p style={{"color":"white"}}>
                        Backend includes scipts to reset/configure sql db plus
                        db templates. Runs on port 5000. Rest api to get any Dragon or a Dragons
                        generation breed status.
                    </p>
                </Grid.Column>
            </Grid.Row>

       </Grid>
    );  
};
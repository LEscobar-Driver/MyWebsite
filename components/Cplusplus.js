import React from 'react';
import { Image, Card, List, Grid } from 'semantic-ui-react';
import { Link } from '../routes';


export default () => {
    return(
       <Grid divided="vertically">

            <Grid.Row columns={4}>
                <Grid.Column>
                    <Card fluid>
                        <Image size="small" centered src="../static/assets/depthFirst.png"></Image>
                        <Card.Content>
                            <Card.Header>Recursive Depth-First Algorithm</Card.Header>
                            <Card.Meta>Tree based data structure</Card.Meta>
                            <Card.Description>This algorithm is capable of solving &/or generating any MxM & NxM 2-D maze.</Card.Description>
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
                            C++ Data structures and trees. Demonstrates how to work with tree structures of high 
                            complexity. This algorithm is highly efficient. 
                        </List.Item>
                    </List>

                    <p style={{"color":"white"}}>
                        A project I completed at the University of California, Irvine. This C++ algorithm is a 
                        tree structure which is designed to traverse a structure depth-first recursively. It is
                        an extremely efficient algorithm. Zero memory leaks; I received a perfect score. It is 
                        well documented.
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
                            <Card.Description>An AI that is capable of playing against another AI or a human.</Card.Description>
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
                            Heuristic search is capable of any N depth search (N = user choice depth).
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
                        stack. It is an extremely efficient algorithm. This is a highly complex recurisve run-time algorithm 
                        which reduces systems load and can run on a low end equipment. Code is well documented.
                    </p>
                </Grid.Column>

            </Grid.Row>
       </Grid>
    );  
};
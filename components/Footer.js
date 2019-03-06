import React, { Component } from 'react';
import { Grid, Image, Segment, List, Container, Header, Divider, Form, Message, Button } from 'semantic-ui-react';
import { Link } from '../routes';

class Footer extends Component {
    state = {
        nameError: false,
        emailError: false,
        msgError: false,
        submitSuccess: true,
        name: "",
        email: "",
        msg: "",
        number: ""
    };

    handleJS = () => {
        return( <Link route="#middle"></Link> );
    };

    handleCPlusPlus = () => {
        return( <Link route="#middle"></Link> );
    };

    handlePython = () => {
        return( <Link route="#middle"></Link> );
    };

    handleSolidity = () => {
        return( <Link route="#middle"></Link> );
    };

    render() {
        return(
            <Segment inverted vertical style={{ margin: '20em 0em 0em', padding: '5em 0em' }}>
            <Container textAlign="center">

                <Grid divided inverted stackable>

                    <Grid.Column width={8}>
                        <div style={{ marginRight: '240px', marginTop: '85px' }}>
                            <Image avatar centered size='small' src='../static/assets/favicon.ico' alt=" "/>
                            <Image avatar centered size='small' src='../static/assets/qaEngine.png' alt=" "/>
                        </div>

                        <div style={{ marginTop: '15px', marginRight: '240px' }}>
                            <List horizontal inverted divided  size='small'>
                                <List.Item>
                                    <Link route="/">
                                        <a>Source Code</a>
                                    </Link>
                                </List.Item>

                                <List.Item>
                                    <Link route="/">
                                        <a>Contact Us</a>
                                    </Link>
                                </List.Item>
                                
                                <List.Item>
                                    <Link route="#topOfPage">
                                        <a>Top of page</a>
                                    </Link>
                                </List.Item>
                            </List>
                        </div>
                    </Grid.Column>

                    <Grid.Column width={8}>
                        <div style={{ marginLeft: '50px' }}>

                            <div style={{ marginLeft: '55px' }}>
                                <Header inverted as='h2' content='Contact' />
                                <h4>Do you have questions? Go ahead and send me a message.</h4>
                            </div>

                            <Form style={{ marginLeft: '65px', marginTop: '20px' }} inverted >

                                <Form.Group widths='equal'>
                                    <Form.Input  label='Name' placeholder='Name' />
                                    <Form.Input  label='Email' placeholder='Email' />
                                </Form.Group>
                                
                                <Form.Input  label='Phone Number' placeholder='Number' />
                                <Form.TextArea label='Message' placeholder='Message' />
                                <Message success header='Form Completed' content="You're all signed up for the newsletter" />
                                <Button>Submit</Button>
                            
                            </Form>
                        </div>
                    </Grid.Column>
                </Grid>
            </Container>
       </Segment>
        );
    }
}
export default Footer;

// export default () => {
//     return(
//        <Segment inverted vertical style={{ margin: '20em 0em 0em', padding: '5em 0em' }}>
//             <Container textAlign="center">

//                 <Grid divided inverted stackable>
//                     <Grid.Column width={3}>
//                         <Header inverted as='h4' content='Group 1' />
//                         <List link inverted>
//                         <List.Item as='a'>Link One</List.Item>
//                         <List.Item as='a'>Link Two</List.Item>
//                         <List.Item as='a'>Link Three</List.Item>
//                         <List.Item as='a'>Link Four</List.Item>
//                         </List>
//                     </Grid.Column>

//                     <Grid.Column width={3}>
//                         <Header inverted as='h4' content='Group 2' />
//                         <List link inverted>
//                         <List.Item as='a'>Link One</List.Item>
//                         <List.Item as='a'>Link Two</List.Item>
//                         <List.Item as='a'>Link Three</List.Item>
//                         <List.Item as='a'>Link Four</List.Item>
//                         </List>
//                     </Grid.Column>

//                     {/* <Grid.Column width={3}>
//                         <Header inverted as='h4' content='Group 3' />
//                         <List link inverted>
//                         <List.Item as='a'>Link One</List.Item>
//                         <List.Item as='a'>Link Two</List.Item>
//                         <List.Item as='a'>Link Three</List.Item>
//                         <List.Item as='a'>Link Four</List.Item>
//                         </List>
//                     </Grid.Column> */}

//                     <Grid.Column width={10}>
//                         <Header inverted as='h2' content='Contact' />
//                         <h4>Do you have question? Go ahead and send me message.</h4>

//                         <Form success>
//                             <Form.Group widths='equal'>
//                                 <Form.Input label='Name' placeholder='Name' />
//                                 <Form.Input label='Email' placeholder='Email' />
//                                 <Form.Input label='Phone Number' placeholder='Number' />
//                             </Form.Group>
                            
//                             <Form.TextArea label='Message' placeholder='Message' />

//                             {/* <Form.Button>Submit</Form.Button> */}

//                             <Message success header='Form Completed' content="You're all signed up for the newsletter" />
//                             <Button>Submit</Button>

//                         </Form>

//                     </Grid.Column>
//                 </Grid>

//                 <Divider inverted section />

//                 <Image avatar centered size='small' src='../static/assets/favicon.ico' alt=" "/>
//                 <Image avatar centered size='small' src='../static/assets/qaEngine.png' alt=" "/>
//                 <div style={{ marginTop: '10px' }}>
//                     <List horizontal inverted divided  size='small'>
//                         <List.Item>
//                             <Link route="/">
//                                 <a>Source Code</a>
//                             </Link>
//                         </List.Item>

//                         <List.Item>
//                             <Link route="/">
//                                 <a>Contact Us</a>
//                             </Link>
//                         </List.Item>
                        

//                         <List.Item>
//                             <Link route="#topOfPage">
//                                 <a>Top of page</a>
//                             </Link>
//                         </List.Item>
//                     </List>
//                 </div>


//             </Container>        
//        </Segment>
//     );  
// };
import React, { Component } from 'react';
import { Grid, 
    Image, 
    Input,
    Segment, 
    List, 
    Container, 
    Header, 
    Divider, 
    Form, 
    Icon,
    Message, 
    Button } from 'semantic-ui-react';
import { Link } from '../routes';

class Footer extends Component {
    state = {
        errorMessage: "",

        hidden: true,
        msgError:false,
        nameError:false,
        emailError:false,

        name: "",
        email: "",
        message: ""
    };

    handleName = () => {
        if (this.state.name.length > 2 && this.state.name !== '') {
            return false;
        }
        let errMsg = this.state.errorMessage + "\nInvalid Name value.";
        this.setState({ errorMessage: errMsg});
        return true;
    };

    handleMessage = () => {
        if (this.state.message.length > 10 && this.state.message !== '') {
            return false;
        }
        let errMsg = this.state.errorMessage + "\nInvalid message value.";
        this.setState({ errorMessage: errMsg});
        return true;
    };

    handleEmail = () => {
        let re = /\S+@\S+\.\S+/i;
        console.log(`re.test(this.state.email) ${re.test(String(this.state.email)).toString()}`)

        // if (this.state.email.length > 4 && this.state.email !== '' && re.test(String(this.state.email))) {
        if ( re.test(String(this.state.email)) ) {
            return false;
        }
        let errMsg = this.state.errorMessage + "\nInvalid email value.";
        this.setState({ errorMessage: errMsg});
        return true;
    };

    onSubmit = async (event) => {
        event.preventDefault();

        await this.setState({ errorMessage: "", 
                              emailError: false,
                              nameError: false,
                              msgError: false
        });

        await this.setState({ nameError: this.handleName(),
                              msgError: this.handleMessage(),
                              emailError: this.handleEmail()
        });

        console.log(`\n\nthis.state.name ${this.state.name}`);
        console.log(`this.state.email ${this.state.email}`);
        console.log(`this.state.message ${this.state.message}`);
        console.log(`this.state.errorMessage ${this.state.errorMessage}\n\n`);

        if (this.state.errorMessage === "") {
            try {
                await emailjs.init("user_SF89V0WjfaZHFMIGFFeif");

                let service_id = "default_service";
                let template_id = "template_FKK9klm2";
                let templateParams = {
                    from_name: this.state.name,
                    reply_to: this.state.email,
                    message_html: this.state.message,
                    to_name: "Luis Escobar-Driver"
                };

                await emailjs.send(service_id, template_id, templateParams);
                alert("Sent!");

            } catch (err) {
                console.log("ERROR ONSUBMIT:", err.message);
                alert(`Error: ${err.message}`);
            }
        } else {
            this.setState({ hidden: false});
        }

        await this.setState({ name: "",
                              email: "",
                              message: ""
        });
    };

    handleDismiss = () => {
        this.setState({ hidden: false });

        setTimeout( () => {
            this.setState({ errorMessage: "", 
                            hidden: true,
                            emailError: false,
                            nameError: false,
                            msgError: false
            })
        }, 90);
    };

    render() {
        return(

            <Segment inverted vertical style={{ margin: '20em 0em 0em', padding: '5em 0em' }}>

                {/* <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
                <script type="text/javascript" src="https://cdn.emailjs.com/sdk/2.3.2/email.min.js"></script> */}

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
                                        <a>Contact me</a>
                                    </Link>
                                </List.Item>
                                
                                <List.Item>
                                    <Link route="#topOfPage">
                                        <a>Top of page</a>
                                    </Link>
                                </List.Item>

                                <List.Item>
                                    <a href="mailto:l.driver.escobar@gmail.com">email me here!</a>
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

                            <Form id="contractMe" style={{ marginLeft: '65px', marginTop: '20px' }} inverted onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                                <Form.Group widths='equal'>

                                    <Form.Field error={!!this.state.nameError}>
                                        <label>Name</label>
                                        <Input 
                                            placeholder="Your name"
                                            value={this.state.name}
                                            onChange={ (event) => {
                                                this.setState({ name: event.target.value });
                                            }}>
                                        </Input>
                                    </Form.Field>

                                    <Form.Field error={!!this.state.emailError}>
                                        <label>Email</label>
                                        <Input 
                                            placeholder="Your email"
                                            value={this.state.email}
                                            onChange={ (event) => {
                                                this.setState({ email: event.target.value });
                                            }}>
                                        </Input>
                                    </Form.Field>

                                </Form.Group>

                                <Form.TextArea
                                    error={!!this.state.msgError}
                                    autoHeight
                                    rows={3}
                                    label="Message"
                                    placeholder="Tell me more"
                                    value={this.state.message}
                                    onChange={ (event) => {
                                        this.setState({ message: event.target.value });
                                    }}
                                />
                                <Message error hidden={this.state.hidden} header="Opps!" content={this.state.errorMessage} onDismiss={this.handleDismiss}></Message>
                                <Button primary={true}>Submit</Button>
                            </Form>
                        </div>
                    </Grid.Column>

                </Grid>

                {/* <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
                <script type="text/javascript" src="https://cdn.emailjs.com/sdk/2.3.2/email.min.js"></script> */}
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
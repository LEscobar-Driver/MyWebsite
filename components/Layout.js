import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Head from 'next/head';
import { Container, Popup, Button, Image, Message, Visibility, Sticky } from 'semantic-ui-react';
import { Link } from '../routes';


export default class Layout extends Component {
    state = {
        calculations: {
          direction: 'none',
          height: 0,
          width: 0,
          topPassed: false,
          bottomPassed: false,
          pixelsPassed: 0,
          percentagePassed: 0,
          topVisible: false,
          bottomVisible: false,
          fits: false,
          passing: false,
          onScreen: false,
          offScreen: false,
        }
      };
    
    
    handleContextRef = contextRef => this.setState({ contextRef });

    handleUpdate = (e, { calculations }) => this.setState({ calculations });
    
    render() {
        const { calculations, contextRef } = this.state;

        return(
            <div id="topOfPage" ref={this.handleContextRef}>     
                
                <Visibility onUpdate={this.handleUpdate}>
                    <Header/>

                    <style>{`
                        html, body {
                            background-color: #252839 !important;
                        }
                    `}</style>

                    <div>
                        {(calculations.percentagePassed * 100).toFixed() < 10 ? null : (
                            <Sticky context={contextRef}>
                                <a href="#topOfPage">
                                    Top of Page
                                </a>
                            </Sticky>
                        )} 
                    </div>

                    <Container >
                        <Head>                
                            <link rel="shortcut icon" type="image/x-icon" href="../static/assets/favicon.ico" />
                            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"/>
                            <title>Luis Driver</title>

                            <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
                            <script type="text/javascript" src="https://cdn.emailjs.com/sdk/2.3.2/email.min.js"></script>
                        </Head>

                        {this.props.children}
                    </Container>

                    <Footer/>

                </Visibility>
            </div>
        );
    }   
};



// export default (props) => {

//     return(
//         <div id="topOfPage">            
//             {/* <div id="back2Top"></div> */}
//             <Header/>    

//             {/* <a href="#topOfPage">link text, img etc.</a> */}

//             <style>{`
//                 html, body {
//                     background-color: #252839 !important;
//                 }
//             `}</style>

//             <Container >

//                 <Head>                
//                     <link rel="shortcut icon" type="image/x-icon" href="../static/assets/favicon.ico" />
//                     <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"/>                    
//                     <title>Luis Driver</title>

//                     <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
//                     <script type="text/javascript" src="https://cdn.emailjs.com/sdk/2.3.2/email.min.js"></script>
//                 </Head>

//                 {/* <div style={{ marginTop: '50px' }}></div>  */}
//                 {/* <h3 style={{"color":"white"}}>I am in the layout</h3> */}
//                 {props.children}

//             </Container>

//             <a href="#topOfPage">link text, img etc.</a>
//             <Footer/>
//         </div>
//     );
// };
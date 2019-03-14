import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Head from 'next/head';
import { Container, Popup, Button, Image, Message } from 'semantic-ui-react';
import { Link } from '../routes';

export default (props) => {
    return(
        <div id="topOfPage">            
            <Header/>    

            {/* <a fixed="top" href="#topOfPage">Back to Top</a> */}

            <style>{`
                html, body {
                    background-color: #252839 !important;
                }
            `}</style>

            <Container >

                <Head>                
                    <link rel="shortcut icon" type="image/x-icon" href="../static/assets/favicon.ico" />
                    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"/>                    
                    <title>Luis Driver</title>

                    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
                    <script type="text/javascript" src="https://cdn.emailjs.com/sdk/2.3.2/email.min.js"></script>
                </Head>

                {/* <div style={{ marginTop: '50px' }}></div>  */}
                {/* <h3 style={{"color":"white"}}>I am in the layout</h3> */}
                {props.children}

            </Container>

            <Footer/>
        </div>
    );
};
import React from 'react';
// import Header from './Header.js';
// import Footer from './Footer.js';
import Head from 'next/head';
import { Container, Popup, Button, Image, Message } from 'semantic-ui-react';
import { Link } from '../routes';

export default (props) => {

    return(
        <div>            
            {/* <Header/>             */}
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
                </Head>

                {/* <div style={{ marginTop: '50px' }}></div>  */}
                <h3 style={{"color":"red"}}>I am in the layout</h3>
                {props.children}

            </Container>

            {/* <Footer/> */}
        </div>
    );
};
import React, {Component} from 'react';
import { Card, Button, Popup, Image, Dimmer, Header, Icon, Grid, Divider} from 'semantic-ui-react';
import Layout from '../components/Layout.js';
// import { Link, Router } from '../routes';
import AboutMe from '../components/AboutMe.js';
import Skills from '../components/Skills.js';
import Qa from "../components/Qa.js";
import BlockChain from '../components/Blockchain.js';
import CPlusPlus from '../components/Cplusplus.js';
import Javascript from '../components/Javascript.js';
import Python from '../components/Python.js';

class Index extends Component {

    render() {
        return(
            
        <Layout>
            <div id="AboutMe" style={{"marginTop":"100px"}}></div>
            <AboutMe/>
            
            <div id="Skills" style={{"marginTop":"100px"}}></div>
            <Skills/>
            
            <div style={{"marginTop":"150px", "marginBottom":"150px"}}>
                <Divider horizontal inverted>
                    <span style={{"font-size":"27px"}}>
                    {/* <span style={{"fontSize":"27px"}}> */}
                        Portfolio<span style={{"color":"red" }}>.</span>
                    </span>
                </Divider>
            </div>

            <div id="Python-Section"></div>
            <Python/>

            <div id="JS-Section"></div>
            <Javascript/>

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
export default Index;
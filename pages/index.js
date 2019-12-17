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

import getConfig from 'next/config'
// Only holds serverRuntimeConfig and publicRuntimeConfig from next.config.js nothing else.
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

class CampaignIndex extends Component {

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
                        Portfolio<span style={{"color":"green" }}>.</span>
                    </span>
                </Divider>
            </div>

            {/* <div style={{"marginTop":"150px", "marginBottom":"150px"}}>
                <span style={{"color":"white", "font-size":"27px", "font-weight":"bold", "padding":"450px"}}>
                    Portfolio<span style={{"color":"green" }}>.</span>
                </span>
            </div> */}

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
export default CampaignIndex;
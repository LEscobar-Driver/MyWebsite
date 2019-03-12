import React, {Component} from 'react';
import { Card, Button, Popup, Image, Dimmer, Header, Icon, Grid, List} from 'semantic-ui-react';
import Layout from '../components/Layout.js';
import { Link, Router } from '../routes';
import AboutMe from '../components/AboutMe.js';
import Skills from '../components/Skills.js';
import Qa from "../components/Qa.js";
import BlockChain from '../components/Blockchain.js';
import CPlusPlus from '../components/Cplusplus.js';
import JaveScript from '../components/Javascript.js';
import Javascript from '../components/Javascript.js';
import Python from '../components/Python.js';

class CampaignIndex extends Component {

    render() {
        return(
        <Layout>
            {/* <div style={{"color":"white"}} as="h2" id="JS-Section">JS Section</div>
            <div style={{"color":"white"}} id="Python-Section">Python Section</div>
            <div style={{"color":"white"}} id="C++-Section">c++ section</div>
            <div style={{"color":"white"}} id="Solidity-Section">sol section</div> */}

            <div id="AboutMe"></div>
            <AboutMe/>
            

            <div id="Skills" style={{"marginTop":"150px"}}></div>
            <Skills/>

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
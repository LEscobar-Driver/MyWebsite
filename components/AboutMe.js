import React, { Component } from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { Link, Router } from '../routes';


class Aboutme extends Component {
    state = {

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
            <Menu inverted>
                <Menu.Item header>
                    <div>
                        <Image alt=" " avatar size="mini" src='../static/assets/favicon.ico' style={{ marginRight: '10px' }}></Image>
                        <b>Blockchain Engineer -- Software QA Engineer</b>
                        <Image alt=" " avatar size="mini" src='../static/assets/qaEngine.png' style={{ marginLeft: '10px' }}></Image>
                    </div>
                </Menu.Item>

                <Menu.Menu position="right" >
                    <Dropdown as="a" item simple text="My Code" direction="left" selection="true">
                        <Dropdown.Menu style={{ marginRight: '0px' }}>

                            <Link route="#middle">
                                {/* <Dropdown.Item onClick={this.handleJS} icon='js' text='JavaScript' /> */}
                                <Dropdown.Item onClick={this.handleJS} image="../static/assets/nodejs.png" text='JavaScript' />
                                {/* <Dropdown.Item>
                                    <Image size="huge" src='../static/assets/nodejs.png'></Image>
                                    JavaScript
                                </Dropdown.Item> */}
                            </Link>

                            <Link route="#middle">
                                {/* <Dropdown.Item icon='python' text='Python' /> */}
                                <Dropdown.Item image="../static/assets/python.png" text='Python' />
                            </Link>

                            <Link route="#middle">
                                {/* <Dropdown.Item icon="code" text='C++' /> */}
                                <Dropdown.Item image="../static/assets/cplusplus.png" text='C++' />
                            </Link>

                            <Link route="#middle">
                                {/* <Dropdown.Item icon='ethereum' text='Solidity' /> */}
                                <Dropdown.Item image="../static/assets/sol.png" text='Solidity' />
                            </Link>
                            
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Menu>
        );
    }
}
export default Aboutme;
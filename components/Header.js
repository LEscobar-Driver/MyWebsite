import React, { Component } from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { Link, Router } from '../routes';


class Header extends Component {
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
                
                    <Link route="#AboutMe">
                        <a className="item">About Me</a>
                    </Link>

                    <Dropdown as="a" item simple text="My Code" direction="left" selection="true">
                        <Dropdown.Menu style={{ marginRight: '0px' }}>
                            <Link route="#JS-Section">
                                <Dropdown.Item onClick={this.handleJS} image="../static/assets/nodejs.png" text='JavaScript' />
                            </Link>

                            <Link route="#Python-Section">
                                <Dropdown.Item image="../static/assets/python.png" text='Python' />
                            </Link>

                            <Link route="#C++-Section">
                                <Dropdown.Item image="../static/assets/cplusplus.png" text='C++' />
                            </Link>

                            <Link route="#Solidity-Section">
                                <Dropdown.Item image="../static/assets/sol.png" text='Solidity' />
                            </Link>
                        </Dropdown.Menu>
                    </Dropdown>

                </Menu.Menu>

            </Menu>
        );
    }
}
export default Header;



// export default () => {
//     return(
//         <Menu fixed='top' inverted>
//             <Menu.Item as="a" header>
//                 <Link route="/" as="a">
//                     <a>
//                         <div>
//                             <Image alt=" " avatar size="mini" src='../static/dPen.png' style={{ marginRight: '20px' }}></Image>
//                             <b>Decentralized Kickstarter</b>
//                         </div>
//                     </a>
//                 </Link>
//             </Menu.Item>

//             <Menu.Menu position="right">

//                 <Link route="/">
//                     <a className="item">Home</a>
//                 </Link>

//                 <Link route="/campaigns/new">
//                     <a className="item">+</a>
//                 </Link>

//             </Menu.Menu>
//         </Menu>
//     );  
// };
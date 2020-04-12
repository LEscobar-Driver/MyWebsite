import React, {Component} from 'react';
import { Card, Button, Popup, Image, Dimmer, Header, Icon, Grid, Divider} from 'semantic-ui-react';
import Layout from '../components/Layout.js';
import PdfResume from '../components/PdfResume.js';


class PDF extends Component {
  // state = { url: "../static/assets/MasterResume.pdf" }

  // onRender = ({ blob }) => {
  //   this.setState({ url: URL.createObjectURL(blob) })
  // }

  // download(url, name) {
  //   var link = document.createElement('a');
  //   link.download = 'Luis Driver - MasterResume.pdf';
  //   link.href = "../static/assets/MasterResume.pdf";
  //   link.click();
  // }

  render () {
    return (
      <Layout>
        <div>
          <PdfResume/>
          {/* <Button
            fluid={false}
            size={"small"}
            attached='bottom'
            content='Download Resume'
            onClick={this.download}
          /> */}
          {/* <a href={this.state.url}  download={`document.pdf`}>Download Resume</a> */}
        </div>
      </Layout>
    )
  }
}
export default PDF;